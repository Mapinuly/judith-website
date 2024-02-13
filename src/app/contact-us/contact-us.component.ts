import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ReactiveFormsModule,FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm : FormGroup
  ApiData:any
  dataOfCheck:any = []

  checkboxItems = [
    { title: 'Google Maps Platform', value: 'Google Maps Platform' },
    { title: 'Google Cloud', value: 'Google Cloud' },
    { title: 'TomTom', value: 'TomTom' },
    { title: 'Google Workspace', value: 'Google Workspace' },
    { title: 'HERE Technologies', value: 'HERE Technologies' },
    { title: 'Carto', value: 'Carto' },
    { title: 'On-premise solutions', value: 'On-premise solutions' },
    { title: 'Data Provider', value: 'Data Provider' },
    { title: 'Other', value: 'Other' },
  ];
  isLoading: boolean=false;

  constructor(private contact:ContactService, private fb:FormBuilder, private snackbar:MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      phone: ['', Validators.required],
      Technology_of_interest: this.fb.array([]),
    });

   }
   showSubmitSuccessSnackbar() {
    this.snackbar.open('Submitted successfully!', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['custom-Success-snackbar'],
      duration: 3000,
    });
  }

  get selectedTechnologyArray() {
    return this.contactForm.get('Technology_of_interest') as FormArray;
  }

  onCheckboxChange(event: any, item: any) {
    const formArray: FormArray = this.selectedTechnologyArray;
   
    if (event.target.checked) {
      this.dataOfCheck.push(item.title)
      formArray.push(this.fb.group({
        title: item.title,
        options: item.options
      }));
    } else {
      const arrIndex=this.dataOfCheck.indexOf(item)
      
      const index = formArray.controls.findIndex(
        (control) => control.value.options === item.options
      );
      formArray.removeAt(index);
      this.dataOfCheck.splice(arrIndex, 0)
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true; 
      const formData = {
        name: this.contactForm.value.name, 
        sub_title: '', 
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message,
        Technology_of_interest: this.contactForm.value.Technology_of_interest.map((item: any) => ({
          title: item.title,
          options: item.title
        }))
      };
        
      this.contact.postContactData(formData).subscribe(
        (response) => {
          console.log('API Response', response);
          this.showSubmitSuccessSnackbar();

          this.resetForm()
        
        },
        (error) => {
          console.error('API Error', error);
          this.isLoading=false
          let errorMessage = 'Something went wrong. Please try again.';

          if (error && error.error && error.error.message) {
            errorMessage = error.error.message;
          }
          this.snackbar.open(errorMessage, 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 3000,
            panelClass: ['custom-snackbar'], 
          });
        },
        
       
      );
    } else {
      this.contactForm.markAllAsTouched();
      console.log('error');
    }
  }
  resetForm(){
    this.dataOfCheck=[]
    this.isLoading = false; 
    this.contactForm = this.fb.group({
            name: [''],
            email: [''],
            message: [''],
            Technology_of_interest:[ ]
            
            
          });
  }
  ngOnInit(): void {
    // this.contact.contactData().subscribe((response:any)=>{
    //   if(response){
    //     // this.ApiData = response[0]
    //     // this.checkboxItems=response[0].Technology_of_interest
    //   }
    // })
  }
}

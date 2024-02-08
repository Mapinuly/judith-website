import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contactus-dialog',
  templateUrl: './contactus-dialog.component.html',
  styleUrls: ['./contactus-dialog.component.scss']
})
export class ContactusDialogComponent implements OnInit {
  dialogRef:MatDialogRef<ContactusDialogComponent>
  contactForm : FormGroup
  ApiData:any
  isLoading: boolean=false;

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

  constructor(private contact:ContactService, private fb:FormBuilder, private snackbar:MatSnackBar,dialogRef: MatDialogRef<ContactusDialogComponent>) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      Technology_of_interest: this.fb.array([]),
    });
    this.dialogRef = dialogRef;
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
      formArray.push(this.fb.group({
        title: item.title,
        options: item.options
      }));
    } else {
      const index = formArray.controls.findIndex(
        (control) => control.value.options === item.options
      );
      formArray.removeAt(index);
    }
  }
  onSubmit() {

    if (this.contactForm.valid) {
      this.isLoading = true;

      const formData = {
        name: this.contactForm.value.name, 
        sub_title: '', 
        email: this.contactForm.value.email,
        phone: "",
        message: this.contactForm.value.message,
        Technology_of_interest: this.contactForm.value.Technology_of_interest.map((item: any) => ({
          title: item.title,
          options: item.title
        }))
      };
  
  
      this.contact.postContactData(formData).subscribe(
        (response) => {
          this.showSubmitSuccessSnackbar();
          this.resetForm();
          this.isLoading=false;
          this.closeDialog();
        },
        (error) => {
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
  closeDialog() {
    this.dialogRef.close();
  }
  resetForm(){
    this.contactForm = this.fb.group({
            name: [''],
            email: [''],
            message: [''],
            Technology_of_interest:[]
          });
  }
 

  ngOnInit(): void {
    // this.contact.contactData().subscribe((response:any)=>{
    //   if(response){
    //     this.ApiData = response[0]
    //     this.checkboxItems=response[0].Technology_of_interest
    //   }
   
    // })        
  }

}

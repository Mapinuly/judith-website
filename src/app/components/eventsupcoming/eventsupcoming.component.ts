import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardService } from 'src/app/services/card.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventsupcoming',
  templateUrl: './eventsupcoming.component.html',
  styleUrls: ['./eventsupcoming.component.scss']
})
export class EventsupcomingComponent implements OnInit {
  items:any[]
  eventForm : FormGroup
  loading: boolean = false;
  eventIMG: any[];

  constructor(private fb:FormBuilder,private cardService:CardService, private eventService:EventService, private snackBar:MatSnackBar) {
    this.eventForm=this.fb.group({
      eventname:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      jobdescription:['',Validators.required],
      organisation:['',Validators.required],
      phone1:['',[Validators.required, this.phoneNumberValidator(),Validators.maxLength(10)]],
      phone2:[''],
      email:['',[Validators.required, Validators.email]],
    })
   }

  ngOnInit(): void {
    this.eventService.eventData().subscribe((response)=>{
      this.items=response
      if (this.items.length > 0) {
        this.eventIMG = this.items[0].img; 
        console.log(this.eventIMG,"event imga ")
      }
    })
  }
  resetForm(){
    this.eventForm=this.fb.group({
      eventname:[''],
      firstname:[''],
      lastname:[''],
      jobdescription:[''],
      organisation:[''],
      phone1:[''],
      phone2:[''],
      email:[''],
            tech:[]
          })
  }

  onSubmit() {
    if (this.eventForm.valid ) {
      this.loading = true; 
      const formData = this.eventForm.value;
      this.cardService.postEventData(formData).subscribe(
        (res: any) => {
          console.log(res,"fdgkal")
          this.loading = false;
          this.showSubmitSuccessSnackbar();
          this.resetForm();
        },
        (error) => {
          console.error('API Error', error);
          this.loading = false;
          let errorMessage = 'Something went wrong. Please try again.';
  
          if (error && error.error && error.error.message) {
            errorMessage = error.error.message;
          }
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: ['custom-snackbar'],
          });
        }
      );
    } else {
      this.eventForm.markAllAsTouched();
    }
  }
   phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const phoneNumber = control.value;
      if (Validators.required(control)) {
        return { 'required': true };
      }
      const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);
  
      return isPhoneNumberValid ? null : { 'invalidPhoneNumber': true };
    };
  }
  showSubmitSuccessSnackbar() {
    this.snackBar.open('Submitted successfully!', 'Close', {
      duration: 3000, 
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['custom-Success-snackbar'],
    });
  }

}

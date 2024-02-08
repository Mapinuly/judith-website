import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactusDialogComponent } from 'src/app/contactus-dialog/contactus-dialog.component';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  openContactModal(){
    const dialogRef=this.matDialog.open(ContactusDialogComponent,{
      width:'1200px',
      height:'800px'
    });
  }

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

}

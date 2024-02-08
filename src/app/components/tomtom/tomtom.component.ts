import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactusDialogComponent } from 'src/app/contactus-dialog/contactus-dialog.component';

@Component({
  selector: 'app-tomtom',
  templateUrl: './tomtom.component.html',
  styleUrls: ['./tomtom.component.scss']
})
export class TomtomComponent implements OnInit {
  openContactUsDialog(){
this.matDialog.open(ContactusDialogComponent,{
  width:'1200px',
  height:'800px'
})
  }

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

}

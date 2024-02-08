import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactusDialogComponent } from '../contactus-dialog/contactus-dialog.component';



@Component({
  selector: 'app-google-workspace',
  templateUrl: './google-workspace.component.html',
  styleUrls: ['./google-workspace.component.scss']
})
export class GoogleWorkspaceComponent implements OnInit {
  openContactModal(){
    this.matdialog.open(ContactusDialogComponent,{
      width:'1200px',
      height:'800px',
      disableClose: false
    })
  }

  constructor(private matdialog:MatDialog) { }

  ngOnInit(): void {
  }

}

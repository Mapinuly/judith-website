import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactusDialogComponent } from '../contactus-dialog/contactus-dialog.component';

@Component({
  selector: 'app-google-cloud',
  templateUrl: './google-cloud.component.html',
  styleUrls: ['./google-cloud.component.scss']
})
export class GoogleCloudComponent implements OnInit {
  products = [
    {
      icon: 'fas fa-cog',
      title: 'Compute Engine',
      description: 'Virtual machines running in Google\'s data center',
    },
    {
      icon: 'fas fa-hdd',
      title: 'Cloud Storage',
      description: 'Object Storage that\'s secure, durable, and scalable',
    },
    {
      icon: 'fas fa-desktop',
      title: 'Cloud SDK',
      description: 'Command-line tools and libraries for Google Cloud',
    },
    {
      icon: 'fas fa-server',
      title: 'Cloud SQL',
      description: 'Relational Database services for My SQL,PostgreSQL and SQL server',
    },
    {
      icon: 'fas fa-cube',
      title: 'Google Kulberenetes Engine',
      description: 'Managed environment for running containerized apps',
    },
    {
      icon: 'fas fa-search-plus',
      title: 'BigQuery',
      description: 'Data warehouse for business agility and insights',
    },
    {
      icon: 'fab fa-dashcube',
      title: 'Cloud CDN ',
      description: 'Content Delivery network for delivering web and video',
    },
    {
      icon: 'far fa-hourglass',
      title: 'Dataflow',
      description: 'Streaming anlalytics for stream and batch processing',
    },
    {
      icon: 'fab fa-centos',
      title: 'Operations',
      description: 'Monitoring , logging and apllication performance suit',
    },
    {
      icon: 'fab fa-google-play',
      title: 'Cloud Run ',
      description: 'Fully Managed environment for running containerized apps',
    },
    {
      icon: 'fas fa-exclamation-triangle',
      title: 'Anthos',
      description: 'Object Storage that\'s secure, durable, and scalable',
    },
    {
      title: ' Not seeing what youre looking for?',
      description: 'See all products(100+)',
    },
    // Add more products here
  ];
  openContactModal(){
   
    const dialogRef=this.matDialog.open(ContactusDialogComponent,{
      width:'1200px',
      height:'800px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

}

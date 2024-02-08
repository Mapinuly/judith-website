import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactusDialogComponent } from 'src/app/contactus-dialog/contactus-dialog.component';

@Component({
  selector: 'app-carto',
  templateUrl: './carto.component.html',
  styleUrls: ['./carto.component.scss']
})
export class CartoComponent implements OnInit {
  products=[
    {
      icon:'fas fa-layer-group',
      title:'Technology',
      description:'A full-stack geospatial platform that suits your needs'
    },
    {
      icon:'fas fa-database',
      title:'Data',
      description:'The latest and greatest in location data,such as human mobility financial, and POI data'
    },
    {
      icon:'fas fa-user-secret',
      title:'Services',
      description:'An expert team available to help you fast track your projects'
    }
  ]
  productsData=[
    {
      icon:'fas fa-user-secret',
      title:'Data Ingestion & Integrations'
    },
    {
      icon:'fas fa-database',
      title:'Data Enrichment'
    },
    {
      icon:'fas fa-layer-group',
      title:'Analysis'
    },
    {
      icon:'fas fa-circle-notch',
      title:'Solutions & Visualization'
    }

  ]
  openContactUsDialog(){
this.matdialog.open(ContactusDialogComponent,{
  width:'1200px',
  height:'800px'
})
  }

  constructor(private matdialog:MatDialog) { }

  ngOnInit(): void {
  }

}

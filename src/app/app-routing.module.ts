import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { DataProvidersPageComponent } from './pages/data-providers/data-providers-page.component';
import { EventsPageComponent } from './pages/events/events-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { OpenSourcePageComponent } from './pages/open-source/open-source-page.component';
import { TechnologiesPageComponent } from './pages/technologies/technologies-page.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleCloudComponent } from './google-cloud/google-cloud.component';
import { GoogleWorkspaceComponent } from './google-workspace/google-workspace.component';
import { HeretechnologiesComponent } from './heretechnologies/heretechnologies.component';
import { CartoComponent } from './components/carto/carto.component';
import { TomtomComponent } from './components/tomtom/tomtom.component';
import { EventsupcomingComponent } from './components/eventsupcoming/eventsupcoming.component';
import { PastEventsComponent } from './components/past-events/past-events.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'technologies/:technology',
    component: TechnologiesPageComponent
  },
  {
    path:'google-maps',
    component:GoogleMapsComponent 
   },
   {
    path:'google-cloud',
    component:GoogleCloudComponent 
   },
   {
    path:'here',
    component:HeretechnologiesComponent
   },
   {
    path:'google-workspace',
    component:GoogleWorkspaceComponent
   },
   {
    path:'carto',
    component:CartoComponent
   },
   {
    path:'tomtom',
    component:TomtomComponent
   },
   {
    path:'upcoming-events',
    component:EventsupcomingComponent
   },
   {
    path:'past-events',
    component:PastEventsComponent
   },

  {
    path: 'data-provider/:company',
    component: DataProvidersPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'events',
    component: EventsPageComponent
  },
  {
    path: 'open-source',
    component: OpenSourcePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

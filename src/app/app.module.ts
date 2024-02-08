import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NavbarSubItemComponent } from './components/navbar/navbar-sub-item/navbar-sub-item.component';
import { NavbarItemComponent } from './components/navbar/navbar-item/navbar-item.component';
import { NavbarDropdownComponent } from './components/navbar/navbar-dropdown/navbar-dropdown.component';
import { RepresentedCompaniesComponent } from './components/represented-companies/represented-companies.component';
import { CardsCarouselComponent } from './components/cards-carousel/cards-carousel.component';
import { CardSlideComponent } from './components/card-slide/card-slide.component';
import { TechnologiesPageComponent } from './pages/technologies/technologies-page.component';
import { ScrollEventDirective } from './directives/scroll.directive';
import { TechnologyHeaderComponent } from './components/technology-header/technology-header.component';
import { GoogleMapsPlatformViewComponent } from './pages/technologies/views/google/google-maps-platform-view/google-maps-platform-view.component';
import { OurTeamsComponent } from './components/our-teams/our-teams.component';
import { MapboxGlobeComponent } from './components/mapbox-globe/mapbox-globe.component';
import { DataProvidersPageComponent } from './pages/data-providers/data-providers-page.component';
import { CartoDataProviderViewComponent } from './pages/data-providers/views/carto-data-provider-view/carto-data-provider-view.component';
import { HexagonDataProviderViewComponent } from './pages/data-providers/views/hexagon-data-provider-view/hexagon-data-provider-view.component';
import { PlanetDataProviderViewComponent } from './pages/data-providers/views/planet-data-provider-view/planet-data-provider-view.component';
import { MbDataProviderViewComponent } from './pages/data-providers/views/mb-data-provider-view/mb-data-provider-view.component';
import { EventsPageComponent } from './pages/events/events-page.component';
import { OpenSourcePageComponent } from './pages/open-source/open-source-page.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { HttpClient } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactusDialogComponent } from './contactus-dialog/contactus-dialog.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleCloudComponent } from './google-cloud/google-cloud.component';
import { GoogleWorkspaceComponent } from './google-workspace/google-workspace.component';
import { HeretechnologiesComponent } from './heretechnologies/heretechnologies.component'
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CartoComponent } from './components/carto/carto.component';
import { TomtomComponent } from './components/tomtom/tomtom.component';
import { EventsupcomingComponent } from './components/eventsupcoming/eventsupcoming.component';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    TechnologiesPageComponent,
    HeaderComponent,
    BannerComponent,
    NavbarComponent,
    NavbarItemComponent,
    NavbarSubItemComponent,
    NavbarDropdownComponent,
    RepresentedCompaniesComponent,
    CardsCarouselComponent,
    CardSlideComponent,
    ScrollEventDirective,
    TechnologyHeaderComponent,
    GoogleMapsPlatformViewComponent,
    OurTeamsComponent,
    MapboxGlobeComponent,
    DataProvidersPageComponent,
    CartoDataProviderViewComponent,
    HexagonDataProviderViewComponent,
    PlanetDataProviderViewComponent,
    MbDataProviderViewComponent,
    EventsPageComponent,
    OpenSourcePageComponent,
    ContactUsComponent,
    ContactusDialogComponent,
    NavbarMainComponent,
    AboutUsComponent,
    GoogleMapsComponent,
    GoogleCloudComponent,
    GoogleWorkspaceComponent,
    HeretechnologiesComponent,
    CartoComponent,
    TomtomComponent,
    EventsupcomingComponent,
    PastEventsComponent
  ],
  entryComponents: [ContactusDialogComponent], 
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

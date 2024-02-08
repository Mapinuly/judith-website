import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NavItem } from 'src/app/models/nav.model';
import { NavbarService } from 'src/app/services/navbar.service';
import { DisplayService } from 'src/app/services/display.service';
import { IMAGE_CONSTANTS } from 'src/app/constants';

export enum NavbarDisplayMode {
  Desktop = 0,
  Mobile = 1,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  imagePaths= IMAGE_CONSTANTS
  @Input() navbarDark: boolean = false;
  navbarMenuOpen: boolean = false;
  navbarDisplayMode: NavbarDisplayMode;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navbarService: NavbarService,
    private displayService: DisplayService
  ) { }

  get navItems(): NavItem[] {
    return this.navbarService.navItems;
  }
  get NavbarDisplayMode() {
    return NavbarDisplayMode;
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        this.navbarDisplayMode = state.matches
          ? NavbarDisplayMode.Mobile
          : NavbarDisplayMode.Desktop;
      });
  }

  toggleNavbarMenu() {
    this.navbarMenuOpen = !this.navbarMenuOpen;
  }
  openNavbarMenue() {
    console.log('Mouse Hover');
    
    this.navbarMenuOpen = true;
  }
}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavSubItem } from 'src/app/models/nav.model';
import { DisplayService } from 'src/app/services/display.service';
import { NavbarDisplayMode } from '../navbar.component';

@Component({
  selector: 'app-navbar-sub-item',
  templateUrl: './navbar-sub-item.component.html',
  styleUrls: ['./navbar-sub-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarSubItemComponent implements OnInit {

  @Input() subItem: NavSubItem;
  @Input() displayMode: NavbarDisplayMode;

  get NavbarDisplayMode() {
    return NavbarDisplayMode;
  }
  constructor(
    private router: Router,
    private displayService: DisplayService) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate([this.subItem.link]);
    this.displayService.openItem.emit(null);

  }

}

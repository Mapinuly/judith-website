import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NavItem } from 'src/app/models/nav.model';
import { DisplayService } from 'src/app/services/display.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { NavbarDisplayMode } from '../navbar.component';

@Component({
  selector: '.navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarItemComponent implements OnInit, OnDestroy {
  @Input() navItem: NavItem;
  @Input() displayMode: NavbarDisplayMode;

  openItemSub: Subscription;

  constructor(
    private navbarService: NavbarService,
    private displayService: DisplayService
  ) {}

  get NavbarDisplayMode() {
    return NavbarDisplayMode;
  }

  ngOnInit() {
    this.openItemSub = this.displayService.openItem.subscribe((openItem) => {
      this.navItem.dropdownOpen = this.navItem === openItem;
    });
  }

  ngOnDestroy(): void {
    this.openItemSub.unsubscribe();
  }

  navigateTo() {}

  toogleDropdown() {
    if (this.navItem.dropdownOpen) {
      this.navItem.dropdownOpen = false;
      this.displayService.openItem.emit(null);
    } else {
      this.displayService.openItem.emit(this.navItem);
    }
  }
}

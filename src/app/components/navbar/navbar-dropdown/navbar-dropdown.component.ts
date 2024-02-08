import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NavSubItem } from 'src/app/models/nav.model';
import { NavbarDisplayMode } from '../navbar.component';

@Component({
  selector: '.navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarDropdownComponent implements OnInit {
  // items = [
  //   { title: 'Google', subItems: /* Your Google subItems data here */ }
  //   { title: 'HERE Technologies', subItems: /* Your HERE Technologies subItems data here */ }
  //   { title: 'TomTom', subItems: /* Your TomTom subItems data here */ }
  //   { title: 'Thermopylae Sciences & Technologies', subItems: /* Your Thermopylae Sciences & Technologies subItems data here */ }
  // ];
  itemHeads: any =[
    "Google","HERE Technologies","Tom Tom","Thermopylae Sciences & Technologies"
  ]


  @Input() dropdownOpen: boolean = false;
  @Input() subItems: NavSubItem[];
  @Input() displayMode: NavbarDisplayMode;

  get NavbarDisplayMode() {
    return NavbarDisplayMode;
  }
  constructor() { }

  ngOnInit() {
  }

}

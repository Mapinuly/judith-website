import { EventEmitter, Injectable } from "@angular/core";
import { NavItem } from "src/app/models/nav.model";

@Injectable({ providedIn: 'root' })
export class NavbarService {

  //openItem = new EventEmitter<NavItem>();

  navItems: NavItem[] = [
    {
      title: "Technologies", link: null, isDropdown: true, dropdownOpen: false,
      subItems: [
        { title: "Google Maps", link: "/google-maps" },
        { title: "Google Cloud", link: "/google-cloud" }, //"Google Maps Platform , Google Cloud Platform , Google Workspace (Premier Partner)"
        { title: "Google Workspace", link: "/google-workspace" },
        { title: "HERE", link: "/here" },
        { title: "MapsIndoors", link: "/technologies/mapsindoors" },
        { title: "Thermopylae Sciences Technology", link: "/technologies/t-sciences" },
        { title: "Carto", link: "/technologies/carto" }
      ]
    },
    {
      title: "Data Providers", link: null, isDropdown: true, dropdownOpen: false, subItems: [
        { title: "Carto - spatial data provider", link: "/data-provider/carto" },
        { title: "Hexagon", link: "/data-provider/hexagon" },
        { title: "Planet", link: "/data-provider/planet" },
        { title: "MB International Worldwide Geodata", link: "/data-provider/mb" }
      ]
    },
    { title: "Events", link: "events", isDropdown: false, dropdownOpen: null, subItems: null },
    { title: "Open Source", link: "open-source", isDropdown: false, dropdownOpen: null, subItems: null },
    { title: "About", link: "about", isDropdown: false, dropdownOpen: null, subItems: null }

  ];
}
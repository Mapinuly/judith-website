import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
interface MenuItemLink {
  name: string;
  route: string;
}

interface MenuItem {
  heading: string;
  subItems: (MenuItemLink | string)[]; // subItems can be an array of MenuItemLink objects or strings
}
interface HeaderItem {
  id: string;
  name: string;
  sub_links:string
  // Add other properties as needed
}

interface FooterItem {
  id: string;
  name: string;
  // Add other properties as needed
}

interface ResponseData {
  data: {
    header: HeaderItem[];
    footer: FooterItem[];
    // Add other properties as needed
  };
}


@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})

export class NavbarMainComponent implements OnInit {
  [x: string]: any;
  

  activeSection: string | null = null;
  headerResponse: any[];

  toggleSection(sectionName: string) {
    if (this.activeSection === sectionName) {
      this.activeSection = null;
    } else {
      this.activeSection = sectionName;
    }
  }

  NavdataHeader= <any>[];
  NavDataSubLinks=<any>[]
  


  navItems: { name: string }[] = [
    { name: "Technologies" },
    { name: "Data Providers",},
    { name: "Resources" ,},
    { name: "Events",}


  ];
  menuItems:MenuItem[]  = [
    {
      heading: 'Google',
      subItems:  [
        { name: 'Map', route: 'google-map' },
        { name: 'Workspace', route: 'google-workspace' },
        { name: 'Cloud', route: 'google-cloud' }
      ]

    },
    {
      heading: 'HERE Technologies',
      subItems:  [
        { name: 'Online', route: 'google-map' },
        { name: 'Offline content', route: 'google-workspace' },
        { name: 'On-premise', route: 'google-cloud' }
      ]

      
    },
    {
      heading: 'TomTom',
      subItems:  [
        { name: 'Real-Time Traffic', route: 'google-map' },
        { name: 'Data', route: 'google-workspace' },
        { name: 'Cloud', route: 'google-cloud' }
      ]

    },
    {
      heading: 'Thermopylae Sciences & Technologies',
      subItems:  [
        { name: 'Google Earth Enterprise Platform', route: 'google-map' },
        { name: 'On-premise', route: 'google-workspace' },
        { name: 'Cloud', route: 'google-cloud' }
      ]
    },
  ];


  dataProviders=[
    {
      heading:"Data Providers",
      subItems:  [
        { name: 'Maxar', route: 'google-map' },
        { name: 'Planet', route: 'google-workspace' },
        { name: 'TomTom', route: 'google-cloud' },
        { name: 'HERE Technologies', route: 'google-cloud' },
        { name: 'Carto', route: 'google-cloud' },
        { name: 'Mapbox', route: 'google-cloud' }
      ]

    }
  ]


  events=[
    {
      heading:"Events",
      subItems:  [
        { name: 'Upcoming events', route: 'google-map' },
        { name: 'Webinars', route: 'google-workspace' },
      ]
    }
  ]

  
  Resources=[
    {
      heading:"Resources",
      subItems:  [
        { name: 'Open Sources', route: 'google-map' },
        { name: 'Demo Sites', route: 'google-workspace' },
      ]
    }
  ]


  constructor(private navService:NavbarService) { }
  

  ngOnInit(): void {
    // this.navService.navbarData().subscribe((res:any)=>{
    //   const responseData: ResponseData = res;
    //   let footerResponse=responseData.data.footer;
    //   debugger
    //   this.headerResponse= responseData.data.header;
    //   const dataObject:any = {}

    //   headerResponse.forEach((item:any) => {
    //     dataObject[item.name] = item;
    //   });
    //   const keyobOBJ = Object.keys(dataObject)
    //   console.log( dataObject['Technologies'].sub_links,"dataobjecct")
    //   const dataNav=dataObject['Technologies'].sub_links
    //   console.log(dataObject,"dataObject")
    //   this.NavdataHeader=dataObject['Technologies'].sub_links
    //   // this.NavDataSubLinks=dataObject['Technologies'].sub_links
    //   this.NavdataHeader.forEach((item:any) => {
    //     this.NavDataSubLinks[item.name] = item;
    //   });
    //   console.log("sublinks",this.NavDataSubLinks)
    //   console.log(this.NavdataHeader,"navbar header")


    
    // })
  }

}

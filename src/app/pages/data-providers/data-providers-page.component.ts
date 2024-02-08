import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataProviderCompany } from 'src/app/models/data-provider-company.model';
import { DataProvidersService, DataProvidersCompanyTypes } from 'src/app/services/data-providers.service';

@Component({
  selector: 'app-data-providers-page',
  templateUrl: './data-providers-page.component.html',
  styleUrls: ['./data-providers-page.component.scss']
})
export class DataProvidersPageComponent implements OnInit {

  companyName: string;
  dataProviderCompanyType: DataProvidersCompanyTypes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataProvidersService: DataProvidersService
  ) { }


  public get DataProvidersCompanyTypes(): typeof DataProvidersCompanyTypes {
    return DataProvidersCompanyTypes;
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let companyID = params['company'];
      console.log(companyID);

      this.setDataProviderCompanyType(companyID);

      if (this.dataProviderCompanyType) {
        this.dataProvidersService.getDataProviderCompany(this.dataProviderCompanyType);
      }
    })
  }

  setDataProviderCompanyType(comapnyID: string) {

    switch (comapnyID) {
      case 'carto':
        this.dataProviderCompanyType = DataProvidersCompanyTypes.Carto;
        break;

      case 'hexagon':
        this.dataProviderCompanyType = DataProvidersCompanyTypes.Hexagon;
        break;

      case 'planet':
        this.dataProviderCompanyType = DataProvidersCompanyTypes.Planet;
        break;

      case 'mb':
        this.dataProviderCompanyType = DataProvidersCompanyTypes.MB;
        break;


      default:
        this.router.navigate(['/']);
        break;
    }
  }
}

import { Injectable } from '@angular/core';
import { DataProviderCompany } from '../models/data-provider-company.model';


export enum DataProvidersCompanyTypes {

  Carto = 1,
  Hexagon = 2,
  Planet = 3,
  MB = 4
}

let dataProvidersCompanies: DataProviderCompany[] = [

  {
    companyID: 'carto',
    companyName: "Carto - spatial data provider"
  },
  {
    companyID: 'hexagon',
    companyName: "Hexagon"
  },
  {
    companyID: 'planet',
    companyName: "Planet"
  },
  {
    companyID: 'mb',
    companyName: "MB International Worldwide Geodata"
  },
];

@Injectable({
  providedIn: 'root'
})
export class DataProvidersService {

  constructor() { }


  getDataProviderCompany(company: DataProvidersCompanyTypes): DataProviderCompany | undefined {
    // console.log(technology, TechnologyTypes[technology]);

    //Todo! get from database by http client
    return dataProvidersCompanies.find(
      (comapany) => comapany.companyID === DataProvidersCompanyTypes[company]
    );
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, ConfigDetails } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class WehereService {
    private apiUrl = AppConfig.baseUrl + AppConfig.weAreHere
    

  whereData(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ConfigDetails.authToken}`,
    });
    return this.http.get<any[]>(this.apiUrl,{ headers })
  }


  constructor(private http:HttpClient) { }
}

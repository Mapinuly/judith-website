import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig, ConfigDetails } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class SynopsisService {
  private apiUrl = AppConfig.baseUrl + AppConfig.synopsis;
    
  synopsisData(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ConfigDetails.authToken}`,
    });
    return this.http.get<any[]>(this.apiUrl,{ headers })
    


  }


  constructor(private http:HttpClient) { }
}

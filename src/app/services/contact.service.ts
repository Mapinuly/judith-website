import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, ConfigDetails } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = AppConfig.baseUrl + AppConfig.contactUs;

  contactData(){
    return this.http.get<any[]>(this.apiUrl)
  }

  postContactData(data:any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ConfigDetails.authToken}`,
    });
    return this.http.post(this.apiUrl ,data,{headers})
  }

  constructor(private http:HttpClient) { }
}

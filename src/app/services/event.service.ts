import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, ConfigDetails } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = AppConfig.baseUrl + AppConfig.events;

  eventData(){
    return this.http.get<any[]>(this.apiUrl)
  }

  constructor(private http:HttpClient) { }
}

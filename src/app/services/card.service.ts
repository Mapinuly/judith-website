import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig, ConfigDetails } from 'src/config';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http:HttpClient) { }

  private cards = AppConfig.baseUrl + AppConfig.cards;
  private team = AppConfig.baseUrl + AppConfig.team;


  private getHeaders() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ConfigDetails.authToken}`
    });
    const requestOptions = {
      headers: headers
    };
    return requestOptions
  }

  getCards():Observable<any[]>{
    return this.http.get<any[]>(this.cards)
  }
  
  getOurTeamData():Observable<any[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getHeaders()}`,
    });
    return this.http.get<any[]>(this.team,{headers})
  }

  getPastEvents(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getHeaders()}`,
    });
    return this.http.get<any[]>(AppConfig.baseUrl+'upcoming-events',{headers})
  }
  
  postEventData(data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getHeaders()}`,
    });
    return this.http.post(AppConfig.baseUrl+'/register_events',data,{headers})
  }


}

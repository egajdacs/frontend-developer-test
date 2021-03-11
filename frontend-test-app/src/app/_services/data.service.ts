import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getItem(): Observable<any> {
    return this.http.get<any>("https://my-json-server.typicode.com/joeiipay/iipayfrontendtest/item");
  }

  getNotifications():Observable<any> {
    return this.http.get<any>("https://my-json-server.typicode.com/joeiipay/iipayfrontendtest/notifications");
  }
}

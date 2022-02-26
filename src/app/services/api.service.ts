import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseURL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*');
  httpOptions = {
    headers: this.headers
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(baseURL);
  }
}

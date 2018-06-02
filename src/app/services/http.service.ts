import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url: string = "http://jsonplaceholder.typicode.com/users";

  constructor (private httpClient: HttpClient) {}

  searchCars(data: any): Observable<Object> {
    return this.httpClient.post(this.url, data);
  }
}

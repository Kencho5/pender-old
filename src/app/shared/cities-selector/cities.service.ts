import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private _http: HttpClient) {}

  getCities(): Observable<any> {
    return this._http.get('/api/cities');
  }

}


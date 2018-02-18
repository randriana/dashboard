import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {

  private _apiUrl: string = 'http://46.101.120.12';

  constructor(private http: HttpClient) { }

  public getGuestlist(): Observable<any> {
    return this.http.get(`${this._apiUrl}/families/all`);
  }

  public getStats(): Observable<any> {
    return this.http.get(`${this._apiUrl}/stats/all`);
  }

  public getOpenedInvites(): Observable<any> {
    return this.http.get(`${this._apiUrl}/stats/openedInvites`);
  }

  public getAnsweredGuests(): Observable<any> {
    return this.http.get(`${this._apiUrl}/stats/answeredGuests`);
  }
}

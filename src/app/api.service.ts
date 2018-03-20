import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiInterface} from './api-interface';

@Injectable()
export class ApiService {

private _ytUrl = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCjTiwYzA38EX9NXo1ZGOtzw' +
  '&key=AIzaSyBveMbX-5H9pPMqsOYGMaiM2PsHc9wVQkk';
  constructor(private http: Http) { }

  getPosts(): Observable<ApiInterface[]> {
    return this.http
      .get(this._ytUrl)
      .map((response: Response) => {
        return <ApiInterface[]>response.json();
      })
      .catch(this.handleError);
  }

  getChannelDetail(link): Observable<ApiInterface[]> {
    this._ytUrl = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' +link+
      '&key=AIzaSyBveMbX-5H9pPMqsOYGMaiM2PsHc9wVQkk';
    return this.http
      .get(this._ytUrl)
      .map((response: Response) => {
        return <ApiInterface[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

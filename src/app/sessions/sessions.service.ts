import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { ISessionRating } from './session-rating/session-ratings.service';

export interface ISession {
  id: number;
  name: string;
  location: string;
  startTime: Date | string;
  createdAt: Date;
  updatedAt: Date;
  avgRating: number;
  userRating: ISessionRating;
}
@Injectable()
export class SessionsService {
  constructor(
    private http: HttpClient,
  ) { }

  getSessions(): Observable<ISession[]> {
    return this.http.get<ISession[]>('http://localhost:3000/sessions');
  }

  getSessionById(id: number): Observable<ISession> {
    return this.http.get<ISession>(`http://localhost:3000/sessions/${id}`);
  }

  save(session: ISession): Observable<ISession | number[]> {
    if (session.id) {
      return this.http.put<number[]>(`http://localhost:3000/sessions`, session);
    } else {
      return this.http.post<ISession>(`http://localhost:3000/sessions`, session);
    }
  }


}

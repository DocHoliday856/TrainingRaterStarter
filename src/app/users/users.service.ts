import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
  ) { }

getUsers(): Observable<IUser[]> {
  return this.http.get<IUser[]>('http://localhost:3000/users');
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:3000/sessions/${id}`);
  }

  save(user: IUser): Observable<IUser | number[]> {
    if (user.id) {
      return this.http.put<number[]>(`http://localhost:3000/sessions`, user);
    } else {
      return this.http.post<IUser>(`http://localhost:3000/sessions`, user);
    }
  }
}

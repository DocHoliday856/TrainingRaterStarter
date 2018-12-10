import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 // tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
 export type RatingValue = 1 | 2 | 3 | 4 | 5;
 export interface ISessionRating {
  userId: number;
  sessionId: number;
  rating: RatingValue;
  createDate: Date;
}
 @Injectable()
export class SessionRatingsService {
   // TODO CCC: remove this, it is only here pretend it
  // is the DB right now
  private ratings: ISessionRating[] = [];
   constructor(
    private http: HttpClient,
  ) { }
  getAvgRating(sessionId: number): Observable<number> {
    const ratings = this.ratings
      .filter(
        (ratingObj) => ratingObj.sessionId === sessionId,
      ).map(
        (ratingObj: ISessionRating) => ratingObj.rating,
      );
    if (!this.ratings.length) {
      return Observable.of(null);
    }
    let sum = 0;
    ratings.forEach((rating: number) => sum += rating);
    const avg = sum / ratings.length;
    return Observable.of(avg);
  }
  getUserRating(userId: number, sessionId: number): Observable<number> {
    const rated = this.ratings
    .filter(
      (ratingObj) => ratingObj.sessionId === sessionId,
      (ratingObj) => ratingObj.userId === userId,
    ).map(
      (ratingObj: ISessionRating) => ratingObj.rating,
    );
    if (!this.hasBeenRatedByUser(userId, sessionId)) {
      return Observable.of(null);
    }
      const ur = this.ratings.find( i => i.userId === 1).rating;

      return Observable.of(ur);
  }
  hasBeenRatedByUser(userId: number, sessionId: number): Observable<boolean> {
    const hasBeenRated = this.ratings.some(
      (rating) => rating.userId === userId && rating.sessionId === sessionId,
    );
    return Observable.of(hasBeenRated);
  }
   getRatings(sessionId: number): Observable<ISessionRating[]> {
    const ratings = this.ratings
      .filter(
        (rating) => rating.sessionId === sessionId,
      );
    return this.http.get<ISessionRating[]>(`http://localhost:3000/sessions/${ratings}`);
  }
   save(rating: ISessionRating): Observable<ISessionRating> {
    this.ratings.push(rating);
    console.log([...this.ratings]);
    return this.http.post<ISessionRating>('http://localhost:3000/ratings/' + rating.sessionId, rating);
  }
 }

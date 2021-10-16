import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { drinkUnit } from '../model/drinkUnit';

@Injectable({
  providedIn: 'root'
})
export class DrinkUnitService {

  private dtApiUrl = 'http://localhost:8080/dtapi/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getAllDrinkUnits(): Observable<drinkUnit[]> {
    return this.http.get<drinkUnit[]>(`${this.dtApiUrl}/getAllDrinkUnits`)
      .pipe(
        catchError(this.handleError<drinkUnit[]>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

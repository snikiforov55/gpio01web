import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Gpio} from './gpio'

@Injectable({
  providedIn: 'root'
})
export class GpioService {
  private gpioUrl = 'http://rasp01.local:7000/gpio';  // URL to web api
  constructor(private http: HttpClient) { }


  getGpio () : Observable<Gpio> {
    return this.http.get<Gpio>(this.gpioUrl)
      .pipe(
        tap(_ => this.log('fetched gpio')),
        catchError(this.handleError<Gpio>('getGpio'))
      );
  }
  private log(message: string){
    console.log(message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

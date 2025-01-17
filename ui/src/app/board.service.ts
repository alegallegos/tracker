import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from './board';
import { MessageService } from './message.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  url : string = 'https://tracker-agallegos.herokuapp.com';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.url + '/board/list').pipe(
      tap(_ => this.log('Fetched Boards')),
      catchError(this.handleError('getBoards', []))
    );
  }

  getBoard(id: string): Observable<Board> {
    return this.http.get<Board>(this.url + `/board/get/${id}`).pipe(
      tap(_ => this.log(`Fetched Board: id=${id}`)),
      catchError(this.handleError<Board>(`getBoard id=${id}`))
    );
  }

  addBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.url + '/board/create', board, httpOptions).pipe(
      tap((board: Board) => this.log(`Added Board w/ name=${board.name}`)),
      catchError(this.handleError<Board>('addBoard'))
    );
  }

  updateBoard(board: Board): Observable<Board> {
    return this.http.put<Board>(this.url + '/board/update', board, httpOptions).pipe(
      tap(_ => this.log(`Updated Board: name=${board.name}`)),
      catchError(this.handleError<Board>(`updateBoard name=${board.name}`))
    );
  }

  deleteBoard(board: Board): Observable<Board> {
    return this.http.delete<Board>(this.url + `/board/delete/${board.id}`, httpOptions).pipe(
      tap(_ => this.log(`Deleted Board: name=${board.name}`)),
      catchError(this.handleError<Board>(`deleteBoard name=${board.name}`))
    );
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

  private log(message: string) {
    this.messageService.add(`BoardService: ${message}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommentList } from 'src/model/comment.model';
const file = require('src/assets/data.json');

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getComments(): Observable<CommentList> {
    return of(file);
  }
}

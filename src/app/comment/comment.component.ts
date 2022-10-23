import { Component, Input, OnInit } from '@angular/core';
import { User, Comment } from 'src/model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comment;
  @Input() isUser!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

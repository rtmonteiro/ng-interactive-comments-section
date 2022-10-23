import { Component, OnInit } from '@angular/core';
import { User, Comment } from 'src/model/comment.model';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  currentUser!: User;
  comments!: Comment[];


  ngOnInit(): void {
    this.commentService.getComments().subscribe(({comments, currentUser}) => {
      this.currentUser = currentUser;
      this.comments = comments;
    });
  }

}

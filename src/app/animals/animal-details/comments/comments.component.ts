import { CommentsService } from './comments.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.findComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  save(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentService.addComment(this.id, comment).pipe(
      switchMap(() => this.commentService.findComment(this.id)),
      tap(() => {
        this.commentForm.reset();
        alert('Comentário salvo');
      })
    );
  }
}

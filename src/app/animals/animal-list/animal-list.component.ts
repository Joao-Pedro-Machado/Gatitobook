import { UserService } from 'src/app/auth/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      })
    );
  }
}

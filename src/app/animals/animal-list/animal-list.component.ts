import { UserService } from 'src/app/auth/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animals = this.activatedRoute.snapshot.data['animals'];
    });
  }
}

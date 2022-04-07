import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css'],
})
export class AnimalDetailsComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animalsService.findById(this.animalId);
  }
}

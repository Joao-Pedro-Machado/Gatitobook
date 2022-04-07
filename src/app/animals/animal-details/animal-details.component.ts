import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animalsService.findById(this.animalId);
  }

  like() {
    this.animalsService.like(this.animalId).subscribe((liked) => {
      if (liked) {
        this.animal$ = this.animalsService.findById(this.animalId);
      }
    });
  }

  remove() {
    this.animalsService.removePhotoById(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

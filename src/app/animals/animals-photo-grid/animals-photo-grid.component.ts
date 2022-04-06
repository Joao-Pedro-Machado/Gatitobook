import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animals';

@Component({
  selector: 'app-animals-photo-grid',
  templateUrl: './animals-photo-grid.component.html',
  styleUrls: ['./animals-photo-grid.component.css'],
})
export class AnimalsPhotoGridComponent implements OnInit {
  @Input() animals!: Animals;

  constructor() {}

  ngOnInit(): void {}
}

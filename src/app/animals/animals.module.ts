import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [AnimalListComponent, AnimalComponent],
  imports: [CommonModule, AnimalsRoutingModule],
})
export class AnimalsModule {}

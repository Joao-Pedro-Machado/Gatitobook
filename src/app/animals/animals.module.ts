import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalsPhotoGridComponent } from './animals-photo-grid/animals-photo-grid.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CommentsComponent } from './animal-details/comments/comments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AnimalListComponent,
    AnimalComponent,
    AnimalsPhotoGridComponent,
    AnimalDetailsComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, CardModule, SharedModule],
})
export class AnimalsModule {}

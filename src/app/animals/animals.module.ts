import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalsPhotoGridComponent } from './animals-photo-grid/animals-photo-grid.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CommentsComponent } from './animal-details/comments/comments.component';
import { MessageModule } from '../components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimalListComponent,
    AnimalComponent,
    AnimalsPhotoGridComponent,
    AnimalDetailsComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    MessageModule,
    ReactiveFormsModule,
  ],
})
export class AnimalsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalListResolver } from './animal-list/animal-list.resolver';
import { NewAnimalComponent } from './new-animal/new-animal.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalListComponent,
    resolve: {
      animals: AnimalListResolver,
    },
  },
  {
    path: ':animalId',
    component: AnimalDetailsComponent,
  },
  {
    path: 'new',
    component: NewAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}

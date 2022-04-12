import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalListResolver } from './animal-list/animal-list.resolver';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}

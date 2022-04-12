import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { UserService } from 'src/app/auth/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalListResolver implements Resolve<Animals> {
  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      }),
      take(1)
    );
  }
}

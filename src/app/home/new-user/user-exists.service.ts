import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private newUserService: NewUserService) { }

  verifyUserAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.newUserService.userAlreadyExists(userName)
        ),
        map((userExists) =>
          userExists ? { userExists: true } : null
        ),
        first()
      )
    }
  }
}

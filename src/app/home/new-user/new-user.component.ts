import { UserExistsService } from './user-exists.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from './lowerCase.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { userPasswordMatchValidator } from './user-password-match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService: UserExistsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      userName: ['', [
          lowerCaseValidator
        ],
        [ this.userExistsService.verifyUserAlreadyExists() ]
      ],
      password: ['']
    },{
      validators: [userPasswordMatchValidator]
    })
  }

  register() {
    if(this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser
      this.newUserService.registerNewUser(newUser).subscribe(() => {
        this.router.navigate([''])
      },
      (error) => {
        console.log(error)
      })
    }
  }

}

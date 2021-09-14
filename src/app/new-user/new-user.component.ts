import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  id: number;
  user: any[];
  constructor(private formBuilder: FormBuilder , private userService: UserService , private router: Router) { }

  ngOnInit(): void {
    this.unitForm();
  }

  // tslint:disable-next-line:typedef
  unitForm() {
    this.userForm = this.formBuilder.group (
      {
        username: ['', Validators.required],
        nom : ['', Validators.required],
        hobbies : this.formBuilder.array([])
      }
    );
  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  onSubmit() {
    const user = this.userForm.value;

    this.userService.register(user);
    this.userService.delete(this.id);
    this.router.navigate(['/user']);
  }

  // tslint:disable-next-line:typedef
  avoirleshobbies(): FormArray{
    return this.userForm.get('hobbies') as FormArray;
}

// tslint:disable-next-line:typedef
onAjoutHobbies() {
    const newHobby = this.formBuilder.control(null, Validators.required);
    this.avoirleshobbies().push(newHobby);
}
}


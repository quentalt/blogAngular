import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
    ) { }

  ngOnInit(){
    this.initForm();
  }

  initForm() {

    this.registerForm = this.builder.group({
      Fullname: ['', Validators.required],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Comment: ['', Validators.required]
   });
 }
  
  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    this.alertService.clear();

    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value).pipe(first()).subscribe(
      data => {
        this.alertService.success('Message envoyé', true);
        this.router.navigate(['/posts']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostModel } from '../Model/post-model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})

export class NewPostComponentComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  // tslint:disable-next-line:typedef
   initForm() {

     this.postForm = this.formBuilder.group({
      content: ['', Validators.required],
      title: ['', Validators.required],
      id: 0,
      loveIt: 0,
      create_at: new Date()
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const postS = this.postForm.value;
    const newPost = new PostModel(
      postS.title,
      postS.content,
      postS.id,
      postS.loveIt,
      postS.create_at

    );

    this.postService.addPost(newPost);
    this.router.navigate(['posts']);
  }
}

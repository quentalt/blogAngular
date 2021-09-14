import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-singlepostcomponent',
  templateUrl: './singlepostcomponent.component.html',
  styleUrls: ['./singlepostcomponent.component.css']
})
export class SinglePostComponentComponent implements OnInit {

  title: string = "Titre";
  content: string = "Description";
  loveIts: number;
  create_at: Date;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.title = this.postService.getPostById(+id).title;
    this.content = this.postService.getPostById(+id).content;
    this.loveIts = this.postService.getPostById(+id).loveIts;
    this.create_at = this.postService.getPostById(+id).create_at;
  }

}

import { Component,Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  constructor(private postService: PostService) { }

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number=0;
  @Input() dontLove: number=0;
  @Input() create_at: Date;
  @Input() id: number;
  posts: any[];
  // tslint:disable-next-line:typedef

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  onLove() {
    this.loveIts++;
  }
  // tslint:disable-next-line:typedef
  onDontLove(){
    this.dontLove++;
  }
  
  // tslint:disable-next-line:typedef
  onDelete() {
    this.postService.deleteOnePost(this.id);
  }
}

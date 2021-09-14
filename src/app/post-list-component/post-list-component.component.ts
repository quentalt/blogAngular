import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { PostService} from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  postInscription: Subscription;
  @Input() i: number;
  @Input() id: number;

  posts:any[];
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postInscription = this.postService.postsSubject.subscribe(
      (post: any[]) => {
        this.posts = post ;
      }
    );
    this.postService.pushPosts();
  }
// tslint:disable-next-line:typedef
sauvegarderPost() {
    this.postService.sauvegarderPost();
  }

// tslint:disable-next-line:typedef
chargerPost() {
    this.postService.chargerPost();
  }

// tslint:disable-next-line:typedef adjacent-overload-signatures
 ngOnDestroy() {
  this.postInscription.unsubscribe();

}


}

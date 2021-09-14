import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { PostModel } from '../Model/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsSubject = new Subject<any[]>();

  private post1 = 'Nulla facilisi. Suspendisse potenti.';
  private post2 = 'Pellentesque congue et mauris vitae interdum. ';
  private post3 = 'Quisque sit amet tellus turpis. ';

  private posts = [];

  constructor(private httpClient: HttpClient) {}


  // tslint:disable-next-line:typedef
  pushPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  getPostById(id: number){
    const post = this.posts.find(
      (postObject) => {
        if (postObject.id === id) {
          return true;
        }
      }
    );
    return post;
  }
  

  deleteOnePost(id: number){
    delete this.posts[id];
    this.posts.splice(id, 1);
    this.pushPosts();
  }

  addPost(post: PostModel){
    post.id = this.posts.length;
    this.posts.push(post);
    this.pushPosts();
  }

  addlove(id: number){
    this.getPostById(id).loveIts++;
  }

  chargerPost(){
  this.httpClient.get<any[]>('.json').subscribe(
    (response) => {
      this.posts = response;
    },
    (error) => {
      console.log('Erreur' + error);
    }
  );
  this.pushPosts();
  }

  sauvegarderPost() {
    this.httpClient.put('.json', this.posts).subscribe(
      () => {
        console.log('Enregistrement des données .....');
      }, (error) => {
        console.log('Erreur d\'enregistrement ' + error);
      }, () => {
        console.log('Les données sont bien enregistrés!');
      }
    );
    this.pushPosts();
    }
}

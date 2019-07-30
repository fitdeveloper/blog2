import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Post} from '../model/Post.model';

@Injectable()
export class PostService {

  postSubject = new Subject<any[]>();

  posts = [];


  constructor(private httpClient: HttpClient) {
  }

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }


  supprimerPost(id) {
    const index = this.posts.findIndex(item => item.id === id);
    this.posts.splice(index, 1);
    this.emitPosts();
  }


  addPost(titre: string, content: string) {

    // this algorithm to set an unique ID to each element Object added
    let idValue = 0;
    if (this.posts.length <= 0) {
      idValue = 0;
    } else {
      idValue = this.posts[(this.posts.length - 1)].id + 1;
    }

    // this the constructor of the object
    const post = new Post(
      idValue,
      titre,
      content,
      0,
      new Date()
    );

    // pushing the new object.
    this.posts.push(post);
    this.emitPosts();
  }


  savePostService() {
    this.httpClient.put('https://blog2-a66a8.firebaseio.com/posts.json', this.posts).subscribe(
      () => {
        console.log('Initial Enregistrement terminé !');
        this.emitPosts();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  getPostService() {
    this.httpClient.get('https://blog2-a66a8.firebaseio.com/posts.json').subscribe(
      (response: Post[]) => {
        if (response !== null) {
          this.posts = response;
          this.emitPosts();
        }
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}

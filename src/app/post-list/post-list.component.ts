import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Subject, Subscription} from 'rxjs';
import {Post} from '../model/Post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  arrayPosts: Post[];
  arrayPostsSubscription: Subscription;


  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.arrayPostsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.arrayPosts = posts;
      }
    );
    this.postService.emitPosts();
  }


  ngOnDestroy() {
    this.arrayPostsSubscription.unsubscribe();
  }

  NewPost() {
    this.router.navigate(['/new']);
  }

}

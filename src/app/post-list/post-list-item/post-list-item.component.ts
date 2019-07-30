import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() private post;


  constructor(private postService: PostService) {
  }

  getPost() {
    return this.post;
  }


  ngOnInit() {

  }

  loveItButton() {
    (this.post).loveIts = (this.post).loveIts + 1;
    this.postService.savePostService();

  }

  dontLoveItButton() {
    (this.post).loveIts = (this.post).loveIts - 1;
    this.postService.savePostService();

  }

  supprimerPost(id) {
        this.postService.supprimerPost(id);
        this.postService.emitPosts();
        this.postService.savePostService();

  }


}

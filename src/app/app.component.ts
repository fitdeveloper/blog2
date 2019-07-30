import {Component, OnInit} from '@angular/core';
import {PostService} from './services/post.service';
import {ConnectionService} from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titleApp = 'blog2 create by Zine Mahmoud';

  ngOnInit(): void {
        this.postService.getPostService();
        this.postService.emitPosts();
  }


  constructor(private postService: PostService, private connectionService: ConnectionService) {
  }

// arrays of posts

}

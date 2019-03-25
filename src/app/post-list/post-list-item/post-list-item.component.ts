import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() private post;


  getPost() {
    return this.post;
  }


  ngOnInit() {

  }

  loveItButton() {
    (this.post).loveIts = (this.post).loveIts + 1;
  }

  dontLoveItButton() {
    (this.post).loveIts = (this.post).loveIts - 1;
  }


}

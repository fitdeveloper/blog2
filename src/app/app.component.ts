import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleApp = 'blog2';
  
  posts = [
    {
      title : 'post 1',
      content : 'content 1 content 1',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title : 'post 2',
      content : 'content 2 content 2',
      loveIts : 6,
      created_at: new Date()
    },
    {
      title : 'post 3',
      content : 'content 3 content 3',
      loveIts : -3,
      created_at: new Date()
    }

  ];
}

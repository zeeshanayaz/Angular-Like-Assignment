import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tweet = {
    body: '...',
    likesCount : 9,
    isLiked: false
  }

  counter = {
    body: '...',
    totalCount : 10
  }

}

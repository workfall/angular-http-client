import { Component, VERSION } from '@angular/core';
import { PostDataService } from './service/post-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'reader';

  message: string =
    'Welcome to Workfall blog. Start editing to see some magic happen';

  allPosts: any = [];

  constructor(private post: PostDataService) {
    this.post.getPosts().subscribe((data) => {
      // console.log(data);
      this.allPosts = data;
    });
  }
}

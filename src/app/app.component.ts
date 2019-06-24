import {Component} from '@angular/core';
import {Post} from './models/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PostsArray: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Les cons, ça ose tout. C\' est même à ça qu on les reconnaît',
      loveIts: 0,
      dloveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon second post',
      content: 'J ai connu une polonaise qui en prenait au p\' tit déjeuner',
      loveIts: 0,
      dloveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Seulement on a dû arrêter la fabrication. Y a des clients qui devenaient aveugles, alors ça faisait des histoires',
      loveIts: 0,
      dloveIts: 0,
      created_at: new Date()
    }
  ];
  title = 'app-blog-angular';

}

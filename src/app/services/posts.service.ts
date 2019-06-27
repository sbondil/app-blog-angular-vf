import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private PostsArray: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Les cons, ça ose tout. C\' est même à ça qu\'on les reconnaît',
      loveIts: 0,
      dloveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon second post',
      content: 'J\'ai connu une polonaise qui en prenait au p\'tit déjeuner',
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
  PostsArraySubject = new Subject<Post[]>();

  constructor() { }

  emitPostsArray() {
    this.PostsArraySubject.next(this.PostsArray);
  }
  removePostFromArray(post: Post) {
    const postIndexToRemove = this.PostsArray.findIndex(
      (postEl) => {
        if (postEl === post) {
          console.log('Postes identiques');
          return true;
        }
      }
    );
    this.PostsArray.splice(postIndexToRemove, 1);
    this.emitPostsArray();
  }
  creaNewPostInArray(newpost: Post) {
    this.PostsArray.push(newpost);
    this.emitPostsArray();
  }
  addloveIts(post: Post) {
    const postIndexToModify = this.PostsArray.findIndex(
      (postEl) => {
        if (postEl === post) { // optimisation -> rajouter un id et faire le test sur postE1.id===post.id
          return true;
        }
      }
    );
    this.PostsArray[postIndexToModify].loveIts++;
    this.emitPostsArray();
  }
  adddloveIts(post: Post) {
    const postIndexToModify = this.PostsArray.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.PostsArray[postIndexToModify].dloveIts++;
    this.emitPostsArray();
  }

}

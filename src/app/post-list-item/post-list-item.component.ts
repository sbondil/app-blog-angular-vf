import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() dloveIts: number;
  @Input() created_at: Date;

  constructor() {
  }

  ngOnInit() {
  }
  getColor(){
    if(this.loveIts >= this.dloveIts){
      return 'darkgreen';
    } else if  (this.loveIts < this.dloveIts){
    }
  }
  onLike(){
    this.loveIts ++;
  }
  ondLike(){
    this.dloveIts ++;
  }
}

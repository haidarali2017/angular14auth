import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  postid:any='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn("post id is", this.route.snapshot.paramMap.get('id'));
    this.postid=this.route.snapshot.paramMap.get('id');

    
  }

}

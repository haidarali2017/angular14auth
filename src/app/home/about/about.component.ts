import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  aboutid:any='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn("user id is", this.route.snapshot.paramMap.get('id'));
    this.aboutid=this.route.snapshot.paramMap.get('id');
  }

}

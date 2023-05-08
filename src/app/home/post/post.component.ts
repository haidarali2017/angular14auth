import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 
  postDetails: any; 
  constructor(private route:ActivatedRoute,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    // console.warn("post id is", this.route.snapshot.paramMap.get('id'));
    // this.postid=this.route.snapshot.paramMap.get('id');
    // console.log('3');
    this.fetchPostDetails();
  }


  fetchPostDetails() {
    const postId =this.route.snapshot.paramMap.get('id');   
     console.warn(postId);
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;  
    this.http.get(url).subscribe((response) => {
      this.postDetails = response;
      console.warn('details',this.postDetails);  
    });
  }


  goescommentpage(){
    this.router.navigate(['/addcomment']);
  }

}

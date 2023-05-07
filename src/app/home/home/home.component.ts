import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post:any;
  constructor(private postData:UserdataService){
      // console.warn('post data is ', );
      postData.postdata().subscribe((data)=>{
        console.warn("data",data);
        this.post=data;
      })
  }

    ngOnInit() {
   
  }
  // posts: any[] = [];
  // currentPage = 1;
  // pageSize = 10;
  // totalPages:any = 0;

  // constructor(private apiService: PostService) { }

  // ngOnInit() {
  //   this.loadPosts();
  // }
  // loadPosts() {
  //   this.apiService.getPosts(this.currentPage, this.pageSize)
  //     .subscribe(response => {
  //       this.posts = response.posts;

        
  //       this.totalPages = response.totalPages;
  //     });
  // }

  // goToPage(page: number) {
  //   if (page >= 1 && page <= this.totalPages) {
  //     this.currentPage = page;
  //     this.loadPosts();
  //   }
  // }

}

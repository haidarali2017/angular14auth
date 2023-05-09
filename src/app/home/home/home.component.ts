import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // post:any;
  // constructor(private postData:UserdataService){
  //     // console.warn('post data is ', );
  //     postData.postdata().subscribe((data)=>{
  //       console.warn("data",data);
  //       this.post=data;
  //     })
  // }

  //   ngOnInit() {
   
  // }
 posts: any ; 
 page:number=1;
 count:number=0;
 tableSize:number=10;
 tableSizes:any=[5,10,15,20];
 constructor(private apiService: PostService) { }

  ngOnInit() {
    this.postList();
 
  }
  postList():void {
    this.apiService.getAllPosts()
      .subscribe(response => {
        this.posts = response;
        // console.warn('data:',response);
         
      })
  }

  onTableDataChange(event:any) {
    this.page = event;
    this.postList(); 
  }
  onTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    this.postList();

  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {SharedServiceService } from '../../services/shared-service.service';
import {UserdataService} from '../../services/userdata.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 
  postDetails: any; 
  commentFormData: any;
  signUpFormData: any;
  c_comment:any;
  c_user:any;
  todaysdate:any;
  postId:any;
 
  constructor(private userDataservice: UserdataService,private route:ActivatedRoute,private http: HttpClient,private router: Router,private sharedService: SharedServiceService) { 
    this.commentFormData = this.sharedService.getcommentFormData();
    this.signUpFormData = this.userDataservice.getSignUpFormData()
    
      //  const c_comment:any=commentData[0] ;
      //  const c_postId:any=commentData[1] ;
      //  const c_user:any=commentData[2] ;
      //  const c_pass:any=commentData[3] ;

      //  const s_user:any=signupData[0] ;
      //  const s_pass:any=signupData[1] ;
  

        // console.warn("comment data:",this.sharedService.getcommentFormData());
        // console.warn("Signup  data:",this.userDataservice.getSignUpFormData());
  }

  ngOnInit(): void {
    // console.warn("post id is", this.route.snapshot.paramMap.get('id'));
    // this.postid=this.route.snapshot.paramMap.get('id');
    // console.log('3');
    this.fetchPostDetails();
  }


  fetchPostDetails() {
    const postId =this.route.snapshot.paramMap.get('id'); 
    // const postId =this.route.snapshot.paramMap.get('id');   
    //  console.warn(postId);
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;  
    this.http.get(url).subscribe((response) => {
      this.postDetails = response;
      // console.warn('details',this.postDetails); 

      //  console.warn('comment data',this.commentFormData); 

        //  console.warn(this.signUpFormData.username,this.signUpFormData.password);
      if(this.commentFormData){
        // console.warn('comment data postid',this.commentFormData.postId );
        // console.warn(postId);
        const c_password=this.commentFormData.pasword;
       const commentData = Object.values(this.commentFormData);
       const signupData = Object.values(this.signUpFormData);
        // console.warn('comment data',commentData[0]); 
        // console.warn('comment postid',commentData[1]);
        // console.warn('comment user',commentData[2]);
        // console.warn('comment pass',commentData[3]);
        if(commentData[2] === signupData[0]  && this.commentFormData.postId===postId){
          this.c_comment=commentData[0] ;

          this.c_user=commentData[2] ;
          this.todaysdate=Date();
        }

        
      //  const c_postId:any=commentData[1] ;
      
      //  const c_pass:any=commentData[3] ;

      //  const s_user:any=signupData[0] ;
      //  const s_pass:any=signupData[1] ;
      }

     
  


   
    });
  }

 
  goescommentpage(eventData:any){
    // alert(eventData);
    const postId =this.route.snapshot.paramMap.get('id'); 
    // alert(postId);

     
    if(this.signUpFormData){
      this.router.navigate(['/addcomment', postId]);
    }else{
      this.router.navigate(['/login']);
    }
    
  }

}

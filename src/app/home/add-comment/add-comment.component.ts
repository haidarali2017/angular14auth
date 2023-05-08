import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {SharedServiceService } from '../../services/shared-service.service';
import {ActivatedRoute} from '@angular/router';
import {UserdataService} from '../../services/userdata.service';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  commentFormData: any;
  signUpFormData: any;
  comment: string = '';
  postId:any;

  constructor(private dataService: UserdataService,private route:ActivatedRoute,private router: Router,private sharedService: SharedServiceService) {
    this.commentFormData = this.sharedService.getcommentFormData();
    // this.signUpFormData = this.sharedService.getSignUpFormData();
    this.signUpFormData = this.dataService.getSignUpFormData();
    console.warn("userdatatest",this.signUpFormData);
   }


  ngOnInit(): void {
 
  }

  
  submitComment() {
    // console.warn("userdatatest",this.signUpFormData);
 
    const signUp = Object.values(this.signUpFormData);
    const postId =this.route.snapshot.paramMap.get('postId');   
    // alert(postId);
     const commentdata={
      'comment':this.comment,
      'postId':postId,
      'user':signUp[0],
      'password':signUp[1]
 
     }
    this.sharedService.savecomment(commentdata);
    // Clear the comment input
    this.comment = '';
    this.router.navigate(['/post/',postId]);
    alert('Save comment');
  }



}

import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {SharedServiceService } from '../../services/shared-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  commentFormData: any;
  constructor(private route:ActivatedRoute,private router: Router,private sharedService: SharedServiceService) {
    this.commentFormData = this.sharedService.getcommentFormData();
   }

  ngOnInit(): void {
  }

  comment: string = '';
  postId:any;
  submitComment() {
    console.warn("userdata",this.sharedService.emitUserLoggedIn);
    const postId =this.route.snapshot.paramMap.get('postId');   
    // alert(postId);
     const commentdata={
      'comment':this.comment,
      'postId':postId
     }
    this.sharedService.savecomment(commentdata);
    // Clear the comment input
    this.comment = '';
    // this.router.navigate(['/login']);
    alert('Save comment');
  }



}

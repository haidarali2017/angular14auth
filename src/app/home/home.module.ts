import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { RouterModule } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NoPageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent,
    PostComponent,
    AddCommentComponent,
  
  ],
  imports: [
    CommonModule,RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    NoPageComponent,
    FooterComponent,
    PostComponent,
    AddCommentComponent
  ]

})
export class HomeModule { }

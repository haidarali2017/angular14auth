import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  memberData=[
    {m_name:'haidar',email:"haidar@gmail.com"},
    {m_name:'Hiya',email:"hiya@gmail.com"},
    {m_name:'Haisam',email:"haisam@gmail.com"}
  ]


  // users:any='';
  // constructor(private userdata:UserdataService){
  // console.warn("userdata",userdata.users());
  // this.users=userdata.users();
  // }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import{FormGroup, FormControl} from  '@angular/forms'
import { UserSrrvice } from '../Service/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers:[UserSrrvice]
})
export class AdduserComponent implements OnInit {

  register=new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')

  })


  constructor(private reguser:UserSrrvice) { }

  ngOnInit(): void {

  }
  
  collection(){
    console.warn(this.register.value);
    this.reguser.registeruser(this.register.value).subscribe((result)=>{
        console.warn("result",result);
    })
  }



}

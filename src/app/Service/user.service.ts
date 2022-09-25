import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../Model/user';

@Injectable({
  providedIn: 'root',
})

export class UserSrrvice {

  url='https://localhost:7062/Home';

   // selecteduser:user={
  //    name :' ',
   //   password :''

  //  };
   
  
  constructor(private http:HttpClient) { }
 
  registeruser(data: any){
     debugger;
     console.log(data.name);
     console.log(data.password);
     //console.log(this.url);
    return this.http.post(this.url,data)
  }

}
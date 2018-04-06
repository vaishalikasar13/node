import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
users =[];
  constructor(private UserService: UserService) { }

  ngOnInit() {
  	this.UserService.getUsers()
  		.subscribe (users =>
  		this.users = users);
  }
  deleteUser(id)
  {
  	 if(confirm("Are You sure")) 
   {
   		var users = this.users;
   	this.UserService.deleteContact(id)
   		.subscribe(data=>{
   			if(data.n==1)
   			{
   				for (var i = 0;i<users.length; i++) {
   					if(users[i]._id==id)
   					{
   						users.splice(i,1);
   					}
   				};
   			}
   		})
   }
  }

}

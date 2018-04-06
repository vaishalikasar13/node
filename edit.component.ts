import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService]
})
export class EditComponent implements OnInit {
id:number;
user = [];

  constructor(private UserService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
		this.route.params.subscribe(
  		params =>{
  			this.id = params['id']
  		}
  	);
  this.UserService.getDataById(this.id)
            .subscribe(user => {
               this.user = user;
          
        },
	}

	updateUser(formData)
	{

		this.UserService.updateUser(formData.value)
		.subscribe(contact=>{
			if (contact.status === 200) {
   	 	// this.isAdded=true;
   	 	// this.confirmationString = "Contact Added";
   	 	this.router.navigate(['/']);
   	 }
   	})

	}

}

import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service"
 import { Router } from '@angular/router';
@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css'],
	providers: [UserService]
})
export class AddComponent implements OnInit {

	constructor(private UserService:UserService,private router:Router) { }

	addUser(formData)
	{

		this.UserService.addUser(formData.value)
		.subscribe(contact=>{
			if (contact.status === 200) {
   	 	// this.isAdded=true;
   	 	// this.confirmationString = "Contact Added";
   	 	this.router.navigate(['/']);
   	 }
   	})

	}

	ngOnInit() {
	}

}

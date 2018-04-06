import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // RETRIEVING USERS SERVICE
getUsers()
{
return this.http.get('http://localhost:4000/api/users')
	.map(res=>res.json());
}

//ADD USER
addUser(data)
{
	var headers = new Headers();
	headers.append('Content-Type','application/json');
return this.http.post('http://localhost:4000/api/add-user',data,{headers:headers})
	.map(res=>res.json());
}

//DELETE CONTACT
deleteContact(id) 
{
return this.http.delete('http://localhost:4000/api/delete-user/'+id)
	.map(res=>res.json());	
}

//GET DATA BY ID
getDataById(id)
{
	return this.http.get('http://localhost:4000/api/user/'+id)
	.map(res=>res.json());
}
// UPDATE USER DATA
updateUser(data)
{
	var headers = new Headers();
	headers.append('Content-Type','application/json');
	return this.http.post('http://localhost:4000/api/update-user',data,{headers:headers})
	.map(res=>res.json());
}

}

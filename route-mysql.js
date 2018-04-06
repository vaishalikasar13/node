var express = require('express');
const router = express.Router();



// ADD USER
	router.post('/add-user',function(req,res){
	req.connect.query("insert into person values('','"+req.body.name+"','"+req.body.email+"','"+req.body.mobile+"')",function(err,result)
	{
	if(err)
	{
	res.json({msg: 'Failed to add:'+err});
	}
	else
	{
		 res.json({msg: 'Contact Added successfully',status:200});
	}
	})
	
});

//GET USERS
	router.get("/users",function(req,res){
	req.connect.query("select * from person",function(err,result)
	{
		if (err) {
			res.json({msg: 'Failed to add:'+err});
		}
		else{
			res.json(result);
		}
	})

})

//DELETE USER
	router.delete("/delete-user/:id",function(req,res){
	// console.log(req.params.id);
	req.connect.query("delete from person where id="+req.params.id+"",function(err,result){
		if (err) {
			// IF IT FAILED RETURN ERROR
			res.json(err);
		}
		else{
			// FORWARD TO SUCCESS
			res.json(result);
		}
	})

})
//GET USER BY ID
router.get("/user/:id",function(req,res){
	req.connect.query("select * from person where id="+req.params.id+"",function(err,result){
		if (err) {
			// IF IT FAILED RETURN ERROR
			res.json(err);
		}
		else{
			// FORWARD TO SUCCESS
			//res.redirect("/");
			// console.log(err);
			res.json(result[0]);
			
		}

	})
})

//UPDATE USER DATA
	router.post("/update-user/:id",function(req,res){
	req.connect.query("update person set name='"+req.body.name+"',email='"+req.body.email+"',mobile='"+req.body.mobile+"' where id="+req.params.id+"",function(err,result){
		if (err) {
			// IF IT FAILED RETURN ERROR
			res.json(err);
		}
		else{
			// FORWARD TO SUCCESS
			//res.redirect("/");
			// console.log(err);
			res.json(result[0]);
			
		}

	})
})




module.exports = router;

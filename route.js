var express = require('express');
const router = express.Router();


// ADD USER

router.post('/add-user',function(req, res, next){
	var db = req.db;
	var name=req.body.name;
	var email=req.body.email;
	var mobile=req.body.mobile;
	var collection = db.get('person');
	collection.insert({"name":name,"email":email,"mobile":mobile},function(err,doc){
		if (err) {
			res.json({msg: 'Failed to add:'+err});
		}
		else{
			 res.json({msg: 'Contact Added successfully',status:200});
		}

	})
});

//GET USERS

router.get("/users",function(req,res){
	// console.log(req.db);
	var db = req.db;
	var collection = db.get('person');
	collection.find({},function(err,data){
		if (err) {
			res.json({msg: 'Failed to add:'+err});
		}
		else{
			res.json(data);
		}
	})

})

//DELETE USER
router.delete("/delete-user/:id",function(req,res){
	// console.log(req.params.id);
	var db = req.db;
	var collection = db.get('person');
 collection.remove({"_id":req.params.id},function(err,result){
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
	var db = req.db;
	var collection = db.get('person');
	collection.find({"_id":req.params.id},function(err,data){
		if (err) {
			// IF IT FAILED RETURN ERROR
			res.json(err);
		}
		else{
			// FORWARD TO SUCCESS
			//res.redirect("/");
			// console.log(err);
			res.json(data[0]);
			
		}

	})
})

//UPDATE USER DATA

router.post('/update-user',(req, res, next)=>{
	var db = req.db;
	var collection = db.get('person');
	var	id = req.body.id;
	collection.update({"_id":id},{$set:{"name":req.body.name,"email":req.body.email,"mobile":req.body.mobile}},function(err,doc){
		if (err) {
		res.json(err);
		}
		else{
			res.json({data:doc[0],status:200});
		}
	})
});

module.exports = router;

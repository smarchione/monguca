let URL = "mongodb://localhost:27017";
let express = require("express");
let path = require("path");
let mongo = require("mongodb").MongoClient;
let app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "auto.html"));
});

app.get("/report", (req, res) => {
	
	mongo.connect(URL, (err, client) => {
		let db = client.db("airport");
		
		let options = {
			"limit": 5
		};
		
		db.collection("flights").find({}, options).toArray((err, data) => {
			console.log(data);
			res.send({ "flights": data });
		});
	});	
});

app.use(express.static("public"));
app.listen(3000);
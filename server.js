let express = require("express");
let path = require("path");
let app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "auto.html"));
});

app.use(express.static("public"));
app.listen(3000);
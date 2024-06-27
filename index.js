const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sem", (req, res)=>{
	let data = [req.body.name, req.body.phone, req.body.query];
	console.log(data);

	let name = req.body.name;
	let txt = "Phone-->" + req.body.phone +";"+ "Query-->" + req.body.query;

	let transporter = nodemailer.createTransport({
		service:"gmail",
		auth: {
			user:"rajkhairnar26@gmail.com",
			pass:"kops vqiw mdcv stls"
		}
	})

	let mailOptions = {
		from : "rajkhairnar26@gmail.com",
		to : "rkhairnar10789@gmail.com",
		subject : "Enquiry From" + name,
		text :txt
	}

	transporter.sendMail(mailOptions, (err, info)=>{
		if(err){
			console.log("mail err", err);
			res.status(500).json(err);
		}
		else{
			console.log("mail send", info.response);
			res.status(200).json("mail send")
		}
	})
})
app.listen(9000, ()=> {console.log("ready @ 9000")})

































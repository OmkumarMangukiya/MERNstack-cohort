/* eslint-disable no-undef */
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Om1:Omkumar%40706@cluster1paytm.ggzmxp8.mongodb.net/');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		trim: true,
		lowercase: true,
		minLength: 3,
		maxLength: 30,
	},
	password: {
		type: String,
		minLength: 6,
	},
	firstName: {
		type: String,
		trim: true,
		maxLength: 25,
	},
	lastName: {
		type: String,
		trim: true,
		maxLength: 25,
	},
	
})

const accountSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User", //this refferring to the document of the User Model
		//for value we have to just metnion ref:user._id
		required: true,
	},
	balance: {
		type: Number,
		required: true,
	},
})
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
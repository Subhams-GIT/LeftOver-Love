import mongoose from "mongoose";
const donorSchema = new mongoose.Schema({
	bname: {
	  type: String,
	  required: true,
	  trim: true,
	},
	cname: {
	  type: String,
	  required: true,
	  trim: true,
	},
	mno: {
	  type: String,
	  required: true,
	  trim: true,
	},
	email: {
	  type: String,
	  required: true,
	  trim: true,
	  unique: true,
	  match: [/.+\@.+\..+/, 'Please fill a valid email address'],
	},
	address: {
	  type: String,
	  required: true,
	  trim: true,
	},
	pincode: {
	  type: String,
	  required: true,
	  trim: true,
	},
	city: {
	  type: String,
	  required: true,
	  trim: true,
	},
	state: {
	  type: String,
	  required: true,
	  trim: true,
	}
  });
  
  export const Donor = mongoose.model('Donor', donorSchema);
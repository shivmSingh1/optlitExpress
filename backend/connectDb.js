import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const dbUrl = process.env.ATLAS_URL;

const connectDB = async () => {
	try {
		// await mongoose.connect("mongodb://127.0.0.1:27017/optlit")
		await mongoose.connect(dbUrl);
		console.log("connected to db")
	} catch (error) {
		console.log(`connection faild ${error}`)
	}
}

export default connectDB;
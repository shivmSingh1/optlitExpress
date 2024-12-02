import express from "express";
import connectDB from "./connectDb.js";
import User from "./models/userModel.js";
import bcrypt from "bcrypt";
import cors from "cors";
import path from "path";
const app = express();

//connecting database

connectDB();

const _dirname = path.resolve();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); // For form data (x-www-form-urlencoded)
app.use(express.json()); // For JSON payloads
app.use(cors());
app.use(express.static(path.join(_dirname, "/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(_dirname, "dist", "index.html"))
})

app.get("/", (req, res) => {
	res.send("home")
})

app.post("/signup", async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Check if the user already exists
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).send('User already exists');
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Save the user
		const newUser = new User({
			username: username,
			email: email,
			password: hashedPassword
		});
		await newUser.save();

		res.status(200).send('Signup successful! You can now login.');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal server error');
	}
})

// -----------------------------------------------------------------------

app.post("/login", async (req, res) => {
	const { email, password } = req.body;

	// Find the user
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).send('Invalid email');
		}

		// Compare passwords
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).send('Invalid password');
		}

		// Authentication successful
		res.status(200).json({ message: 'Login successful!', name: user.username });

	} catch (error) {
		console.log(error)
	}
})


app.listen(3000, () => {
	console.log("server started");
})
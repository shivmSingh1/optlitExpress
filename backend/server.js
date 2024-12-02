import express from "express";
import connectDB from "./connectDb.js";
import User from "./models/userModel.js";
import bcrypt from "bcrypt";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';


const app = express();

//connecting database

connectDB();



// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); // For form data (x-www-form-urlencoded)
app.use(express.json()); // For JSON payloads
app.use(cors());


// Get __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Serve your HTML pages
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));  // Landing page
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});

app.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'signup.html'));
});

// Course pages
app.get('/course/web_development/css', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'web_development', 'css.html'));
});

app.get('/course/web_development/html', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'web_development', 'html.html'));
});

app.get('/course/web_development/javascript', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'web_development', 'javascript.html'));
});

app.get('/course/web_development/web_development', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'web_development', 'web_develoment.html'));
});

app.get('/course/c', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'c.html'));
});

app.get('/course/java', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'java.html'));
});

app.get('/course/networking', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'networking.html'));
});

app.get('/course/os', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'course', 'os.html'));
});


// Catch-all for any other page (useful for SPAs or missing pages)
app.get('*', (req, res) => {
	res.status(404).send('Page Not Found');
});



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
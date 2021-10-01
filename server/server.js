const express = require('express');
const mongoose = require('mongoose');
let mongoClient = require('mongodb');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const User = require('./modals/user');
const session = require('express-session');
const path = require('path');

const app = express();
app.use(bodyParser.json());
require('dotenv').config();
app.use(morgan('dev'));
app.use(flash());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
	secret: 'thisshouldbeabettersecret!',
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7
	}
};

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(passport.authenticate(User)));
passport.serializeUser(passport.serializeUser(User));
passport.deserializeUser(passport.deserializeUser(User));
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		// useCreateIndex: true,
		// useFindAndModify: true,
		useUnifiedTopology: true
	})
	.then(console.log('db connected atlas'))
	.catch((err) => console.log('error', err));

// routes
app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', categoryRoutes);
app.use('/', orderRoutes);
app.listen(8080, () => {
	console.log('connected to port 8080');
});

import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './route/sizeRoute';

const app = express();
const PORT = 8080;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongodb+srv://kevinUser:<kevinUser>@cluster0-tlj4k.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


routes(app);

// Testing purposes
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);


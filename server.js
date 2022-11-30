const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
const createPath = require("./helpers/create-path");
const postRoutes = require("./routes/post-routes")
const contactRoutes = require("./routes/contact-routes");
const postApiRoutes = require("./routes/api-post-routes");
require("dotenv").config();

const app = express();
app.set('view engine', 'ejs');
 
mongoose   
    .connect(process.env.MONGO_URL)
    .then((res) => console.log('Connect to DB'))
    .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) =>{
    error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use(morgan(':method :url :res[content-length] - :response-time ms'));

app.use(express.static('styles')); 

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), { title });
});

app.use((req, res) => {
    const title = 'Error page';
    res
        .status(404)
        .render(createPath('error'), { title });
});
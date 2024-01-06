const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

const route = require("./routes");
const db = require("./config/db");
//Connect DB
db.connect();

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
// HTTP logger
// app.use(morgan("combined"));

//set up view engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes initialization
route(app);

app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}/`)
);

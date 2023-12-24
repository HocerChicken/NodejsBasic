const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = 3000;

const route = require("./routes");

// //HTTP logger
app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
// app.use(morgan("combined"));

//set up view engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => console.log(`listening on http://localhost:${port}/`));
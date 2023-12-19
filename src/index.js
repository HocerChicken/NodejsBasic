const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = 3000;

// //HTTP logger
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

//set up view engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    return res.render("home");
});

app.get("/news", (req, res) => {
    return res.render("news");
});

app.listen(port, () => console.log(`listening on http://localhost:${port}/`));

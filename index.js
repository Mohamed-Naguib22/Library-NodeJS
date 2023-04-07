require("dotenv").config();

const PORT = process.env.POST || "4000";
const HOST = process.env.HOST || "localhost";
//express-session
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const book = require("./routes/books");
const chapter = require("./routes/chapter");
const author = require("./routes/author");
const field = require("./routes/field");
const reader = require("./routes/reader");
const request = require("./routes/request");
const searchHistory = require("./routes/searchHistory");
const search = require("./routes/search");
const user = require("./routes/user");
const login = require("./routes/login");

const app = express();

// const adminAuth = require("./middleware/admin");

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'webslesson',
    resave: true,
    saveUninitialized: true
}))

app.use("", book);
app.use("/chapter", chapter);
app.use("", author);
app.use("/field", field);
app.use("", reader);
app.use("", request);
app.use("/searchHistory", searchHistory);
app.use("/search", search);
app.use("/user", user);
app.use("", login);

app.listen(PORT, HOST, () => {
    console.log(`SERVER IS RUNNING ON http://${HOST}:${PORT}`);
});


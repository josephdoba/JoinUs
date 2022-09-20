// load .env data into process.env
require("dotenv").config();
// Web server config
var sassMiddleware = require("./lib/sass-middleware");
var express = require("express");
var morgan = require("morgan");
var PORT = process.env.PORT || 8080;
var app = express();
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/styles", sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false
}));
app.use(express.static("public"));
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
var userApiRoutes = require("./routes/users-api");
var widgetApiRoutes = require("./routes/widgets-api");
var usersRoutes = require("./routes/users");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);
// Note: mount other resources here, using the same pattern above
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", function (req, res) {
    res.render("index");
});
app.listen(PORT, function () {
    console.log("Example app listening on port ".concat(PORT));
});
const express = require("express");
const https = require("https");
const port = 3000;
const app = express();
const data = require(`${__dirname}/data.json`);
const bodyParser = require("body-parser");

// Set and Use for express
//ejs
app.set("view engine", "ejs");
//static folder
app.use(express.static("public"));
//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
//be able to receive json
app.use(express.json());

//Root Route
app.get("/", (req, res) => {
  res.render("index", {
    data: data,
  });
});

// Dynamic Route to open agent pages
app.get("/agent/:topic", (req, res) => {
  // *1* If not set variable to render a 404 page
  let renderItem = "404";
  let topics = data;

  // Loop through the topics in our json and compare their title to the parameter in our URL
  for (topic of data.topics) {
    // If one of the matches break the loop and send the specific topic object further to our ejs template
    // If not look *1*
    if (topic.title.toLowerCase() === req.params.topic.toLowerCase()) {
      renderItem = "topic";
      topics = topic;
      break;
    }
  }

  // Render either topic.ejs or 404.ejs depending of if our parameter matches
  res.render(renderItem, {
    data: data,
    topic: topics,
  });
});

// Host the server
app.listen(port, () => {
  console.log("Server started on", port);
});

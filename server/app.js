const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017");
mongoose.connection.once("open", () => {
  console.log("Connected to DB");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(5000, () => {
  console.log("Now listening reqestis for port 5000");
});

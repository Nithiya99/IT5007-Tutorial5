const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

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

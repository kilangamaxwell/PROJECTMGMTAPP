// import express server
const express = require("express");

// import graphglHTTP from express-graphql
const { graphqlHTTP } = require("express-graphql");

// import schema
const schema = require("./schema/schema");

// add config method
require("dotenv").config();

// create port that allows us to access the server from the browser
const port = process.env.PORT || 5000;

// create app variable that initializes the express server
const app = express();

// add use method that ties our graphql endpoint to the middleware graphqlHTTP
app.arguments(
  "/graphql",
  graphqlHTTP({
    // pass schema to the middleware
    schema,
    // add graphiqle for testing backend queries, true if NODE_ENV === 'development'
    graphiql: process.env.NODE_ENV === "development",
  })
);

// app-listen method
app.listen(port, console.log(`Server running on port ${port}`));

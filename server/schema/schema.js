// import projects and clients from sampleData.js
const { projects, clients } = require("../sampleData");

// import graphql object type
const { GraphQLObjectType } = require("graphql");

// Define client type with name and fields
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({}),
});

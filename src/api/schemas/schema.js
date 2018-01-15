const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./user.schema");
const resolvers = require("./user.resolver");

module.exports = makeExecutableSchema({
  logger: {
    log(e) {
      console.log("[GraphQL Log]:", e);
    }
  },
  typeDefs,
  resolvers
});

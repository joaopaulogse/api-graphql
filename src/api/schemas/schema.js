const { makeExecutableSchema } = require("graphql-tools");
// const typeDefs = require("./user.schema.graphql");
const {readFileSync, createWriteStream} = require("fs");
const typeDefs = readFileSync(`${__dirname}/user.schema.graphql`).toString()
const resolvers = require("./user.resolver");

module.exports = makeExecutableSchema({
  logger: {
    log(e) {
      createWriteStream("./error-graphql.log",{flags:"a"}).write("[GraphQL Log]:", e.toString());
    }
  },
  typeDefs,
  resolvers
});

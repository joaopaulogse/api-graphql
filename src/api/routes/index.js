const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const graphqlHTTP = require("express-graphql");
const schema = require("../schemas/schema");
const models = require("../models")
const router = express.Router();

router.use(
  "/graphql",
  bodyParser.json(),
  graphqlHTTP({
    schema: schema,
    context: { models },
    graphiql:true
  })
);

// router.use(
//   "/graphiql",
//   graphiqlExpress({ endpointURL: "/graphql" })
// );

module.exports = router;

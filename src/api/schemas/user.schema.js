module.exports = `
type User {
    _id: String!
    username: String
    email: String
    type: String
    createdAt: String
}

type Query {
    users: [User!]!
}

type Mutation {
    getUser(_id: String!): User!
}
schema {
     query: Query
     mutation: Mutation
}
`;
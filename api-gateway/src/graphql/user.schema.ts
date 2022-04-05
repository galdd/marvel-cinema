import { gql } from "apollo-server-express";

const schema = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
  }

  type UserSession {
    user: User!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(me: Boolean!): Boolean!
  }

  type Query {
    userSession(me: Boolean!): UserSession
  }
`;

export default schema;

// type UserSession {
//   user: User!
// }
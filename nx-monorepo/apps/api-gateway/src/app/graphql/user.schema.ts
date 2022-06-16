import { gql } from 'apollo-server-express';

const schema = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
    isAdmin: Boolean!
  }

  type UserSession {
    user: User!
  }

  type Mutation {
    signup(email: String!, password: String!): UserSession!
    signin(email: String!, password: String!): UserSession!
    signout: Boolean!
    updateUser(email: String!, password: String, isAdmin: Boolean!): User!
    removeUser: String!
  }

  type Query {
    currentUser: UserSession
  }
`;

export default schema;

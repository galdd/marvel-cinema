import { gql } from 'apollo-server-express';

const schema = gql`
  scalar Date

  type Order {
    id: ID!
    userId: String!
    ticketId: [String]!
    status: String!
    ticket: [Ticket]!
  }

  type Mutation {
    createOrder(ticketId: [String]!): Order!
    removeOrder(id: String!): [String!]!
  }

  type Query {
    orders: [Order!]!
    order(id: ID!): Order!
  }
`;

export default schema;

// ordersByUser(): [Order!]!
// type Order {
//   id: ID!
//   userId: String!
//   ticketId: String!
//   user: User!
//   ticket: Ticket!
// }

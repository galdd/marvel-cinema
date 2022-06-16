import { gql } from 'apollo-server-express';

const schema = gql`
  scalar Date

  type Ticket {
    id: ID!
    showId: String!
    seatId: Int!
    isTaken: Boolean!
    show: Show!
  }

  type Show {
    id: ID!
    dateAndTIme: Date!
    price: Int!
    moviedbApiId: String!
    movieId: String!
    movie: Movie!
    ticketAmount: Int!
    isSoldOut: Boolean
  }

  type Movie {
    id: ID!
    title: String
    desc: String
    img: String
    year: String
    chronologicalOrder: Int
    length: String
    moviedbApiId: String
  }

  type Mutation {
    # setTicket(id: ID!, isTaken: Boolean!): Ticket!
    createMovie(
      title: String
      desc: String
      img: String
      imgTitle: String
      imgSm: String
      trailer: String
      year: String
      chronologicalOrder: Int
      length: String
      moviedbApiId: String
    ): Movie!
    createShow(
      dateAndTIme: Date!
      price: Int!
      moviedbApiId: String!
      movieId: String!
      ticketAmount: Int!
    ): Show!
    editShow(
      dateAndTIme: Date!
      price: Int!
      moviedbApiId: String!
      movieId: String!
      ticketAmount: Int!
    ): Show!
    editMovie(
      title: String
      desc: String
      img: String
      imgTitle: String
      imgSm: String
      trailer: String
      year: String
      chronologicalOrder: Int
      length: String
      moviedbApiId: String
    ): Movie!
    removeShow(id: ID!): String!
    removeMovie(id: ID!): String!
  }

  type Query {
    Shows: [Show!]!
    Show(id: ID!): Show
    Tickets(showId: ID!): [Ticket!]!
    Ticket(id: ID!): Ticket
    Movies: [Movie!]!
    Movie(id: ID!): Movie!
  }
`;

export default schema;

//TODO
// Update/remove movie
// Update/removec ticket
// # createTicket(
//   #   showId: String!
//   #   moviedbApiId: String!
//   #   seatId: Int!
//   #   isTaken: Boolean!
//   # ): Ticket!
// getAvailableTicket(showId: ID!): Int!
// isSoldOut(showId: ID!): Boolean!
//  type TicketsInformation {
//    availableTickets: Int!
//   ticketsLeft: Int!
//  }
// isSoldOut(showId: ID!): Boolean!

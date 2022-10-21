import { useDispatch, useSelector } from 'react-redux';
import { signoutUser, userSelector, clearState } from '../../redux/userSlice';
import { Featured } from '@nx-monorepo/client/ui-shared';
import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './seats.scss';
import Moment from 'moment';
import { Routes, Route, useParams, Link, useNavigate } from 'react-router-dom';

import { AppDispatch } from '../../redux/store';
import PageHeader from '../../components/page-header/PageHeader';

const query = gql`
  query Tickets($showId: ID!) {
    Tickets(showId: $showId) {
      id
      showId
      seatId
      isTaken
    }
  }
`;

const mutation = gql`
  mutation CreateOrder($ticketId: [String]!) {
    createOrder(ticketId: $ticketId) {
      id
      userId
      status
      ticketId
    }
  }
`;

const Seats = () => {
  // const { email } = useSelector(userSelector);
  const dispatch: AppDispatch = useDispatch();
  const onLogOut = async () => {
    await dispatch(signoutUser());
  };

  const [tickets, setTickets] = useState([]);
  // const [ticketsIds, setTicketsIds] = useState([]);
  // const [tickets, setTickets] = useState([]);
  const [seats, setSeats] = useState([]);
  const [checked, setChecked] = useState([]);
  // const [genre, setGenre] = useState(null);
  let { showid } = useParams();
  // const showId = showid;
  // console.log('showid', showid);
  let navigate = useNavigate();
  const { data, loading, error } = useQuery(query, {
    variables: { showId: showid },
  });

  const [addTodo, { data: Odata, loading: Oloading, error: Oerror }] =
    useMutation(mutation);
  if (Odata) {
    navigate('/order');
  }
  console.log('d', Odata);
  console.log('l', Oloading);
  console.log('e', Oerror);
  // const movies = useMutation(mutation, {
  //   variables: { ticketId: ticketsIds },
  // });

  const chunkSize = 4;

  useEffect(() => {
    console.log('loading', loading);
    console.log('data', data);
    console.log('error', error);

    const getTickets = async () => {
      if (data) {
        const d = await data[0];
        // console.log('d1', data);
        // console.log('d1', data);
        // let chunk = [];
        // for (let i = 0; i < data.Tickets.length; i += chunkSize) {
        //   chunk = data.Tickets.splice(i, i + chunkSize);
        //   // do whatever
        // }

        // console.log('chunk', chunkArray(data.Tickets, 6));

        const tickets: any = data.Tickets.map((ticket: any) => {
          let pair = { isChecked: false };
          ticket = { ...ticket, ...pair };
          return ticket;
        });

        console.log('a', data.Tickets);
        console.log('b', tickets);
        setTickets(tickets);
        // setTickets(data.Tickets);
      }
    };
    getTickets();
  }, [data]);

  const handleClick = (e: any, id: any) => {
    const updateTicket: any = tickets.map((ticket: any) => {
      if (ticket.id === id && !ticket.isTaken) {
        ticket.isChecked = !ticket.isChecked;
      }
      return ticket;
    });
    console.log(updateTicket);

    setTickets(updateTicket);
  };

  const handleSubmit = async () => {
    let buyTicket: any = [];
    tickets.map((ticket: any) => {
      if (ticket.isChecked) {
        buyTicket.push(ticket.id);
      }
    });

    // const buyTicket: any = tickets.filter((ticket: any) => {
    //   return ticket.isChecked;
    // });

    console.log(buyTicket);
    await addTodo({ variables: { ticketId: buyTicket } });
    // const movies: any = await useMutation(mutation, {
    //   variables: { ticketId: buyTicket },
    // });

    // await setTicketsIds(buyTicket);

    // setTickets(updateTicket);
    // console.log('t', updateTicket);/*  */
    // console.log('t', e.target, id);
  };

  const chunkArray: any = (arr: any, size: any) =>
    arr.length > size
      ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
      : [arr];

  return (
    <>
      <PageHeader></PageHeader>
      <div className="seats">
        <div className="seats-up">
          <div className="movie-container">
            <p className="text">
              You have selected <span id="count">0</span> seats for a price of $
              <span id="total">0</span>
            </p>
          </div>

          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>

            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>

            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>

          <div className="seats-container">
            <div className="screen"></div>

            {chunkArray(tickets, 8).map((ticketsSlice: any, i: any) => (
              <div key={`${i}`} className="row">
                <span
                  style={{
                    textAlign: 'center',
                    marginTop: '7px',
                    marginRight: '7px',
                    marginLeft: '-14px',
                  }}
                >
                  {i + 1}
                </span>
                {ticketsSlice.map((ticket: any, y: any) => (
                  <div
                    onClick={(e) => handleClick(e, ticket.id)}
                    key={`${i},${y}`}
                    className={`seat ${ticket.isTaken ? 'occupied' : ''}  ${
                      ticket.isChecked ? 'selected' : ''
                    }`}
                  >
                    <div style={{ textAlign: 'center', color: 'black' }}>
                      {y + 1}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="btn-shows" onClick={handleSubmit}>
            Buy tickets
          </button>
        </div>
      </div>
    </>
  );
};

export default Seats;

import { useDispatch, useSelector } from 'react-redux';
import { signoutUser, userSelector, clearState } from '../../redux/userSlice';
import { Featured } from '@nx-monorepo/client/ui-shared';
import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './order.scss';
import Moment from 'moment';

import { AppDispatch } from '../../redux/store';
import PageHeader from '../../components/page-header/PageHeader';

const query = gql`
  {
    orders {
      id
      userId
      ticketId
      status
      ticket {
        id
        showId
        seatId
        isTaken
        show {
          id
          dateAndTIme
          price
          moviedbApiId
          movieId
          movie {
            id
            title
            desc
            img
            chronologicalOrder
            length
            moviedbApiId
            year
          }
          ticketAmount
          isSoldOut
        }
      }
    }
  }
`;

const Order = () => {
  // const { email } = useSelector(userSelector);
  const dispatch: AppDispatch = useDispatch();
  const onLogOut = async () => {
    await dispatch(signoutUser());
  };

  const [lists, setLists] = useState([]);
  // const [genre, setGenre] = useState(null);

  const { data, loading, error } = useQuery(query);

  useEffect(() => {
    console.log(data);

    const getOrders = async () => {
      if (data) {
        const d = await data[0];
        console.log('d1', data);
        console.log('d2', data.orders);
        setLists(data.orders);
      }
    };
    getOrders();
  }, [data]);

  return (
    <>
      <PageHeader></PageHeader>
      <div className="order">
        <div className="menu-list">
          <div className="menu-head selected">
            <a>Summary</a>
          </div>
          <div className="menu-head">
            <a>Profile</a>
          </div>
        </div>
        <div className="list-container">
          {lists &&
            lists.map((item: any, i) =>
              item.ticket.map((ticket: any, y: any) => (
                <div key={i} className="list-card">
                  <div className="list-label">{ticket.show.movie.title}</div>
                  <img src={ticket.show.movie.img} />
                  <div className="list-details">
                    <div className="list-name">Marvel Movies</div>

                    <button className="list-callback">Movie Page</button>

                    <div className="list-landmark">
                      {ticket.show.movie.desc}
                    </div>

                    <div className="list-location">
                      Chronological Order:{' '}
                      <span className="section-sub3">
                        {ticket.show.movie.chronologicalOrder}
                      </span>
                    </div>
                    <div className="list-location">
                      Ticket Id:{' '}
                      <span className="section-sub3">{ticket.id}</span>
                    </div>
                    <div className="list-bottom">
                      <div className="list-bottom-section">
                        <span className="section-title">Date-Time</span>
                        <span className="section-sub1">
                          {Moment(ticket.show.dateAndTIme).format('H:mma')}
                        </span>
                        <span className="section-sub2">
                          {Moment(ticket.show.dateAndTIme).format(
                            'MMMM do, yyyy ',
                          )}
                        </span>
                      </div>
                      <div className="list-bottom-section">
                        <span className="section-title">Price</span>
                        <span className="section-sub1">
                          {ticket.show.price}$
                        </span>
                        <span className="section-sub2"></span>
                      </div>
                      <div className="list-bottom-section">
                        <span className="section-title">Seat</span>
                        <span className="section-sub1"> {ticket.seatId}</span>
                        <span className="section-sub2"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )),
            )}
        </div>
      </div>
    </>
  );
};

export default Order;

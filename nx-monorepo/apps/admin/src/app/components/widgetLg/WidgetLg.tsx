import './widgetLg.css';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../context/orderContext/OrderContext';
import { deleteOrder, getOrders } from '../../context/orderContext/apiCalls';

export default function WidgetLg() {
  const { orders, dispatch } = useContext<any>(OrderContext);
  useEffect(() => {
    getOrders(dispatch);
    console.log('o', orders);
  }, [dispatch]);

  const Button = ({ type }: any) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <ul className="widgetSmList">
        {orders &&
          orders.map((order: any) => (
            <li
              className="widgetSmListItem"
              style={{ borderBottom: '1px solid grey' }}
            >
              <div className="widgetSmUser">
                id:<span className="widgetSmUsername">{order.id}</span>
              </div>
              <div className="widgetSmUser">
                User Id:<span className="widgetSmUsername">{order.userId}</span>
              </div>
              <div className="widgetSmUser">
                Ticket Id:
                <span className="widgetSmUsername">{order.ticketId}</span>
              </div>
              <div className="widgetSmUser">
                Status:
                <span className="widgetSmUsername">{order.status}</span>
              </div>
              {/* <tr className="widgetLgTr">
                <th className="widgetLgTh">
                  Order Id: <span>{order.id}</span>
                </th>
                <th className="widgetLgTh">Order Id: {order.userId}</th>
                <th className="widgetLgTh">Ticket Id: {order.ticketId}</th>
                <th className="widgetLgTh">Status: {order.status}</th>
              </tr> */}
            </li>
          ))}
      </ul>
    </div>
  );
}

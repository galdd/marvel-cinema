import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ticket.css';
import { Publish } from '@mui/icons-material';
import { updateTicket } from '../../context/ticketContext/apiCalls';
import { useEffect, useState } from 'react';
import { useTicketContext } from '../../context/ticketContext/TicketContext';

export default function Ticket() {
  const [updatedTicket, setUpdatedList] = useState(null);
  const [isTaken, setIsTaken] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useTicketContext();
  const location: any = useLocation();
  const ticket = location.state.ticket;

  useEffect(() => {
    setIsTaken(ticket.isTaken);
  }, []);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    const updateTicketObj = { isTaken };
    console.log(updateTicketObj);

    updateTicket(ticket.id, updateTicketObj, dispatch);
    navigate('/tickets');
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Ticket</h1>
        <Link to="/newTicket">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Show Id:{ticket.showId}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem desc">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{ticket.id}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Seat Id:</span>
              <span className="productInfoValue">{ticket.seatId}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">isTaken:</span>
              <span className="productInfoValue">
                {ticket.isTaken ? 'true' : 'false'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>isTaken</label>
            <input
              type="checkbox"
              defaultChecked={isTaken}
              name="isTaken"
              onChange={(e) => setIsTaken(e.target.checked)}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

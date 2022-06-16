import { Link, useLocation, useNavigate } from 'react-router-dom';
import './order.css';
import { Publish } from '@mui/icons-material';
import { updateOrder } from '../../context/orderContext/apiCalls';
import { useEffect, useState } from 'react';
import { useOrderContext } from '../../context/orderContext/OrderContext';

export default function Order() {
  const [updatedOrder, setUpdatedList] = useState(null);
  const [isTaken, setIsTaken] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useOrderContext();
  const location: any = useLocation();
  const order = location.state.order;

  useEffect(() => {
    setIsTaken(order.isTaken);
  }, []);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    const updateOrderObj = { isTaken };
    console.log(updateOrderObj);

    updateOrder(order.id, updateOrderObj, dispatch);
    navigate('/orders');
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Order</h1>
        <Link to="/newOrder">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Show Id:{order.showId}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem desc">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{order.id}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Seat Id:</span>
              <span className="productInfoValue">{order.seatId}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">isTaken:</span>
              <span className="productInfoValue">
                {order.isTaken ? 'true' : 'false'}
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

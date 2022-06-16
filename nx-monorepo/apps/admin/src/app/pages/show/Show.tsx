import { Link, useLocation } from 'react-router-dom';
import './show.css';
import { Publish } from '@mui/icons-material';
import { updateShow } from '../../context/showContext/apiCalls';
import { useState } from 'react';
import { useShowContext } from '../../context/showContext/ShowContext';

export default function Show() {
  const [updatedShow, setUpdatedList] = useState(null);
  const { dispatch } = useShowContext();
  const location: any = useLocation();
  const show = location.state.show;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Show</h1>
        <Link to="/newShow">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Movie Id:{show.movieId}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem desc">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{show.id}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Date and TIme:</span>
              <span className="productInfoValue">{show.dateAndTIme}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">{show.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Show Title</label>
            <input type="text" placeholder={show.title} />
            <label>Type</label>
            <input type="text" placeholder={show.type} />
            <label>Genre</label>
            <input type="text" placeholder={show.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { Link, useLocation, useNavigate } from 'react-router-dom';
import './user.css';
import { Publish } from '@mui/icons-material';
import { updateUser } from '../../context/userContext/apiCalls';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../context/userContext/UserContext';

export default function User() {
  const [updatedUser, setUpdatedList] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useUserContext();
  const location: any = useLocation();
  const user = location.state.user;

  useEffect(() => {
    console.log(user.isAdmin);

    setIsAdmin(user.isAdmin);
  }, []);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const updateUserObj = user;
    updateUserObj.isAdmin = isAdmin;
    console.log(updateUserObj);

    await updateUser(user.id, updateUserObj, dispatch);
    navigate('/users');
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">User</h1>
        <Link to="/newUser">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Show Id:{user.showId}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem desc">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{user.id}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Email:</span>
              <span className="productInfoValue">{user.email}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">isAdmin:</span>
              <span className="productInfoValue">
                {user.isAdmin ? 'true' : 'false'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>isAdmin</label>
            <input
              type="checkbox"
              defaultChecked={user.isAdmin}
              name="isAdmin"
              onChange={(e) => setIsAdmin(e.target.checked)}
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

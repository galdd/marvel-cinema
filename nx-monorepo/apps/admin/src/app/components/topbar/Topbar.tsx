import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';

import { logout } from './../../context/authContext/AuthActions';
import { useAuthContext } from './../../context/authContext/AuthContext';

import './topbar.css';

const Topbar = () => {
  // const { dispatch } = useAuthContext();
  const handleLogOut = () => {
    // dispatch(logOut());
  };
  // const { user } = useAuthContext();
  // const currentUser = user.result;
  // const ID = currentUser._id;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="topLeft link">
          <span className="logo">Admin Panel</span>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          {/* <Link
            to={{ pathname: `/user/${ID}`, user: currentUser }}
            className="link"
          > */}
          <Avatar alt="Name" src="" className="topAvatar" />
          {/* </Link> */}
          <Link to="/" className="link">
            <button onClick={handleLogOut}>Log Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

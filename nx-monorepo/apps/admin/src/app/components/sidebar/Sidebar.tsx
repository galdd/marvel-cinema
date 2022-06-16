import './sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PlayCircleOutline,
  List,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AddToQueue,
  QueuePlayNext,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              {/* <li className="sidebarListItem active"> */}
              <LineStyle className="sidebarIcon" />
              Home
              {/* </li> */}
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <PermIdentity className="sidebarIcon" />
              Users
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <PlayCircleOutline className="sidebarIcon" />
              Movies
            </NavLink>
            <NavLink
              to="/shows"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <List className="sidebarIcon" />
              Shows
            </NavLink>
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <List className="sidebarIcon" />
              Tickets
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <List className="sidebarIcon" />
              Orders
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink
              to="/newMovie"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <AddToQueue className="sidebarIcon" />
              Add Movie
            </NavLink>
            <NavLink
              to="/newShow"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <QueuePlayNext className="sidebarIcon" />
              Add Show
            </NavLink>
            <NavLink
              to="/newUser"
              className={({ isActive }) =>
                isActive
                  ? 'sidebarListItem link active'
                  : 'sidebarListItem link inactive'
              }
            >
              <QueuePlayNext className="sidebarIcon" />
              Add User
            </NavLink>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;

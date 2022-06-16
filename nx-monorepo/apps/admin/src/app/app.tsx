import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.scss';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/AuthContext';
import { useContext } from 'react';
import ShowList from './pages/showList/ShowList';
import Show from './pages/show/Show';
import NewShow from './pages/newShow/NewShow';
import MovieList from './pages/movieList/MovieList';
import Movie from './pages/movie/Movie';
import TicketList from './pages/ticketList/ticketList';
import Ticket from './pages/ticket/Ticket';
import NewMovie from './pages/newMovie/NewMovie';
import OrderList from './pages/orderList/orderList';
import Order from './pages/order/Order';

function App() {
  // const { user } = useContext(AuthContext);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/movies" element={<MovieList />}></Route>
          <Route path="/movies/:movieId" element={<Movie />}></Route>
          <Route path="/newMovie" element={<NewMovie />}></Route>
          <Route path="/shows" element={<ShowList />}></Route>
          <Route path="/shows/:showId" element={<Show />}></Route>
          <Route path="/newShow" element={<NewShow />}></Route>
          <Route path="/tickets" element={<TicketList />}></Route>
          <Route path="/tickets/:ticketId" element={<Ticket />}></Route>
          <Route path="/orders" element={<OrderList />}></Route>
          <Route path="/orders/:orderId" element={<Order />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './newUser.css';

import { useContext, useState } from 'react';
import './newUser.css';

import { createUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function NewUser() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    const value = e.target.value;
    if (e.target.name === 'isAdmin') {
      console.log(e.target.checked);
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      console.log(value, e.target.name);
      setUser({ ...user, [e.target.name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createUser(user, dispatch);
    navigate('/users');
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>isAdmin</label>
          <input
            type="checkbox"
            defaultChecked={isAdmin}
            name="isAdmin"
            onChange={handleChange}
          />
        </div>
        <button className="newUserButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

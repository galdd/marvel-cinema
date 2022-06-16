import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import styled from 'styled-components';
import './auth.scss';
import {
  Button,
  Card,
  Classes,
  Elevation,
  FormGroup,
  Intent,
} from '@blueprintjs/core';

interface FormData {
  email: string;
  password: string;
}

const Auth = () => {
  const [signinPages, setSigninPages] = useState(true);
  const handleClick = async () => {
    setSigninPages(!signinPages);
  };
  return signinPages ? (
    <div className="main_box">
      <div className="main_box--main--login">
        <Signin />
      </div>
      <div>
        <button
          style={{
            textAlign: 'center',
            color: '#262626',
            padding: '7.5px',
            width: '100%',
            marginTop: '20px',
            cursor: 'pointer',
          }}
          onClick={handleClick}
          className=""
        >
          Signup
        </button>
      </div>
    </div>
  ) : (
    <div className="main_box">
      <div className="main_box--main--login">
        <Signup />
      </div>
      <div>
        <button onClick={handleClick} className="sign-button">
          Signin
        </button>
      </div>
    </div>
  );
};

export default Auth;

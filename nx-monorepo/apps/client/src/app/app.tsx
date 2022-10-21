import { gql } from '@apollo/client';
import { Puff } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
// import { Header } from '@nx-monorepo/client/ui-shared';
import Header from './components/header/Header';
import styled from 'styled-components';
import Watch from './pages/watch/Watch';
import apolloClient from './apolloClient';
import { fetchUserBytoken, userSelector, clearState } from './redux/userSlice';
import { AppDispatch } from './redux/store';

import '../assets/boxicons-2.0.7/css/boxicons.min.css';

import { useDispatch, useSelector } from 'react-redux';

import Auth from './pages/auth/';
// import Home from './pages/home';
import Home from './pages/Home';

import { useNavigate } from 'react-router-dom';

import './app.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail/Detail';
import Catalog from './pages/Catalog';
import Order from './pages/order/Order';
import Footer from './components/footer/Footer';
import Seats from './pages/seats/Seats';
import Shows from './pages/shows/Shows';

const SpinnerWrapper = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sess, setSess] = useState<{ id: string } | undefined>();

  // const navigation = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { isFetching, isError, isSuccess } = useSelector(userSelector);
  const session = useSelector((state: any) => state.session);

  useEffect(() => {
    (async () => {
      const res = await dispatch(fetchUserBytoken());
      console.log('ad', res);

      // setSess(res.payload);
      // setIsLoading(false);
    })();
  }, []);

  const { email }: any = useSelector(userSelector);

  useEffect(() => {
    console.log('iserror', isError, isFetching, isSuccess, email);

    if (isError) {
      dispatch(clearState());
      // navigation('/login');
    }
  }, [isError]);

  const onLogOut = () => {
    // navigation('/login');
  };

  return (
    <Router>
      <Header />
      {isFetching ? (
        <SpinnerWrapper>
          <Puff color="#00BFFF" height={100} width={100} />
        </SpinnerWrapper>
      ) : isSuccess ? (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch" element={<Watch />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/seats/:showid" element={<Seats />}></Route>
          <Route path="/shows" element={<Shows />}></Route>
          <Route path="/shows/:movieid" element={<Shows />}></Route>
          <Route path="/:category/:id" element={<Detail />}></Route>
          <Route path="/:category" element={<Catalog />}></Route>
        </Routes>
      ) : (
        <Auth />
      )}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;

import { useDispatch, useSelector } from 'react-redux';
import { signoutUser, userSelector, clearState } from '../../redux/userSlice';
import { Featured } from '@nx-monorepo/client/ui-shared';
import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './home.scss';

import { AppDispatch } from '../../redux/store';

const query = gql`
  {
    Movies {
      id
      title
      desc
      img
      imgTitle
      imgSm
      trailer
      year
      chronologicalOrder
      length
      moviedbApiId
    }
  }
`;

const Dashboard = () => {
  const { email } = useSelector(userSelector);
  const dispatch: AppDispatch = useDispatch();
  const onLogOut = async () => {
    await dispatch(signoutUser());
  };

  // const [lists, setLists] = useState([]);
  // const [genre, setGenre] = useState(null);

  // const { data, loading, error } = useQuery(query);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     if (data) {
  //       const d = await data[0];
  //       console.log('d1', data);
  //       console.log('d1', data);
  //       setLists(data.Movies);
  //       // console.log(data[0].img);

  //       // setUrl(data.link.url);
  //     }
  //   };
  //   getMovies();
  // }, [data]);

  return (
    <div className="container mx-auto home">
      <Featured />
    </div>
  );
};

export default Dashboard;

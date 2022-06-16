import { useDispatch, useSelector } from 'react-redux';
import { signoutUser, userSelector, clearState } from '../../redux/userSlice';
import { Featured } from '@nx-monorepo/client/ui-shared';
import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './shows.scss';
import Moment from 'moment';

import { AppDispatch } from '../../redux/store';
import PageHeader from '../../components/page-header/PageHeader';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const movies = gql`
  {
    Movies {
      id
      title
      desc
      img
      year
      chronologicalOrder
      length
      moviedbApiId
    }
  }
`;

const shows = gql`
  {
    Shows {
      id
      dateAndTIme
      price
      moviedbApiId
      movieId
      ticketAmount
      isSoldOut
    }
  }
`;

// const shows = gql`
//   {
//     Shows {
//       id
//       dateAndTIme
//       price
//       moviedbApiId
//       movieId
//       movie {
//         id
//         title
//         desc
//         img
//         year
//         chronologicalOrder
//         moviedbApiId
//         length
//       }
//       ticketAmount
//       isSoldOut
//     }
//   }
// `;

const Shows = () => {
  // const { email } = useSelector(userSelector);
  const dispatch: AppDispatch = useDispatch();
  const onLogOut = async () => {
    await dispatch(signoutUser());
  };

  const [listShows, setListShows] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [movie, setMovie] = useState<any>(null);

  const { movieid } = useParams();

  const showsQuery = useQuery(shows);
  const moviesQuery = useQuery(movies);

  useEffect(() => {
    // console.log(showsQuery.data);
    // const getShows = async () => {
    //   if (showsQuery.data) {
    //     const d = await showsQuery.data[0];
    //     // console.log('d1', showsQuery.data);
    //     // console.log('d2', showsQuery.data.Shows);
    //     setListShows(showsQuery.data.Shows);
    //   }
    // };
    // getShows();
  }, []);

  useEffect(() => {
    // console.log(showsQuery.data);

    const getShows = async () => {
      if (showsQuery.data) {
        const d = await showsQuery.data[0];
        // console.log('d1', showsQuery.data);
        // console.log('d2', showsQuery.data.Shows);
        setListShows(showsQuery.data.Shows);
      }
    };
    getShows();
  }, [showsQuery.data]);

  useEffect(() => {
    // console.log(moviesQuery.data);

    const getMovies = async () => {
      if (moviesQuery.data) {
        const d = await moviesQuery.data[0];
        // console.log('getMovies d1', moviesQuery.data);
        // console.log('getMovies d12', moviesQuery.data.Movies);
        setListMovies(moviesQuery.data.Movies);
        // console.log(moviesQuery.data.Movies[0]);

        setMovie(moviesQuery.data.Movies[0].id);
      }
    };
    getMovies();
  }, [moviesQuery.data]);

  const handleSelect = (e: any) => {
    console.log('t', e.target.value);
    setMovie(e.target.value);

    // const value = Array.from(
    //   e.target.selectedOptions,
    //   (option: any) => option.value,
    // );
    // console.log('a', value.join());
  };

  return (
    <>
      <PageHeader></PageHeader>
      <div className="shows">
        <div className="list-dropdown">
          <div className="show-item">
            <label>Choose a Movie</label>
            <select
              name="movieId"
              onChange={handleSelect}
              // onChange={handleSelect}
              // style={{ height: '280px' }}
            >
              {listMovies.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="show-item ">
            <label>Choose a Show</label>
            {/* {listShows.map((item: any) => {
              // let showsByMovieId = item.filter();
              return <>fd</>;
            })} */}
            {listShows
              .filter((show: any) => show.movieId === movie)
              .map((item: any, i: any) => (
                <div key={i} className="flex-row-around show-border">
                  {Moment(item.dateAndTIme).format('H:mma MMMM do, yyyy ')}
                  <div>
                    <Link className="btn-shows" to={`/seats/${item.id}`}>
                      Buy ticket
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          {/* {lists &&
            lists.map((item: any, i) => (
              
              <div key={i} className="list-card">
                {item.id}
                {item.movie.title}
              </div>
            ))} */}
        </div>
      </div>
    </>
  );
};

export default Shows;

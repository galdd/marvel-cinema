import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './featured.scss';
import { gql, useMutation, useQuery } from '@apollo/client';
import { List } from '../list/list';

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

export const Featured = () => {
  const [content, setContent] = useState<any>({});
  // const { loading, error, data } = useQuery(query);

  const [lists, setLists] = useState([]);

  const { data, loading, error } = useQuery(query);

  useEffect(() => {
    const getMovies = async () => {
      if (data) {
        const d = await data[0];
        console.log('d1', data);
        console.log('d1', data);
        setLists(data.Movies);
        const rand = Math.floor(Math.random() * data.Movies.length);

        setContent(data.Movies[rand]);
        // console.log(data[0].img);

        // setUrl(data.link.url);
      }
    };
    getMovies();
  }, [data]);

  // useEffect(() => {
  //   const getRandomContent = async () => {
  //     if (data) {
  //       const d = await data[0];
  //       console.log('d1', data);
  //       console.log('d2', data.Movies[0].img);
  //       const rand = Math.floor(Math.random() * data.Movies.length);

  //       setContent(data.Movies[rand]);
  //       // console.log(data[0].img);

  //       // setUrl(data.link.url);
  //     }
  //   };
  //   getRandomContent();
  // }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  console.log('c', content);
  return (
    <div className="featured">
      {content && (
        <div className="category">
          <img src={content.img} alt="" />
          <div className="infoo">
            <div className="info">
              <span className="title">{content.title}</span>
              <span className="desc">{content.desc}</span>
              <div className="buttons">
                <button className="play">
                  <PlayArrow />
                  <span>Play</span>
                </button>
                <button className="more">
                  <InfoOutlined />
                  <span>Info</span>
                </button>
              </div>
            </div>
            <div className="not-info">
              <List list={lists} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

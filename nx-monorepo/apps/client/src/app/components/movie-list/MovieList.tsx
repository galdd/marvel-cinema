import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';
import 'swiper/swiper-bundle.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { category } from '../../../api-moviedb/tmdbApi';
import apiConfig from '../../../api-moviedb/apiConfig';

import MovieCard from '../movie-card/MovieCard';

const MovieList: any = (props: any) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response: any = null;
      const params = {};

      // if (props.type !== 'similar') {
      //     switch(props.category) {
      //         case category.movie:
      //             response = await tmdbApi.getMoviesList(props.type, {params});
      //             break;
      //         default:
      //             response = await tmdbApi.getTvList(props.type, {params});
      //     }
      // } else {
      // response = await tmdbApi.similar(props.category, props.id);
      response = await tmdbApi.getMarvelList('', { params });
      // }
      // setItems(response.results);
      setItems(response.items);
    };
    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;

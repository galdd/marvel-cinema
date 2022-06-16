import React, { useState, useEffect, useRef } from 'react';

// import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import tmdbApi, { category, movieType } from '../../../api-moviedb/tmdbApi';
import apiConfig from '../../../api-moviedb/apiConfig';

import './hero-slide.scss';
import { useNavigate } from 'react-router';

const HeroSlide = () => {
  // SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        // const response = await tmdbApi.getMoviesList(movieType.popular, {params});
        // setMovieItems(response.results.slice(1, 4));
        const response: any = await tmdbApi.getMarvelList(movieType.popular, {
          params,
        });
        // setMovieItems(response.results.slice(1, 4));
        setMovieItems(response.items);
        console.log(response);
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        // modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{delay: 3000}}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }: any) => (
              <HeroSlideItem
                item={item}
                index={i}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

const HeroSlideItem = (props: any) => {
  const navigate = useNavigate();

  const item = props.item;
  const index = props.index;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );

  const setModalActive = async () => {
    const modal: any = document.querySelector(`#modal_${item.id}`);

    const videos: any = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      modal
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videSrc);
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer';
    }

    modal.classList.toggle('active');
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="release_date">Release date: {item.release_date}</div>
          <div className="chronologicalOrder">
            Chronological Order: {index + 1}
          </div>
          <div className="btns">
            <Button onClick={() => navigate('/movie/' + item.id)}>
              Movie Page
            </Button>
            <Button
              className="btn-order"
              onClick={() => navigate('/shows/' + item.id)}
            >
              Buy Ticket
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props: any) => {
  const item = props.item;

  const iframeRef: any = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;

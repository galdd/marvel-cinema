import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../../api-moviedb/tmdbApi';

const VideoList = (props: any) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res: any = await tmdbApi.getVideos(category, props.id);
      setVideos(res.results.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

const Video = (props: any) => {
  const item = props.item;

  const iframeRef: any = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;

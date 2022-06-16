import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../../api-moviedb/tmdbApi';
import apiConfig from '../../../api-moviedb/apiConfig';

const CastList = (props: any) => {
  const { category } = useParams();

  const [casts, setCasts] = useState<any>([]);

  useEffect(() => {
    const getCredits = async () => {
      const res: any = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts.map((item: any, i: any) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;

import './list-item.scss';

import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ListItem = ({ index, item }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState<any>({});
  const [pos, setPos] = useState('left');
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  // console.log(item.img);

  return (
    <div
      className="listItem"
      style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          {/* <video src={trailer} autoPlay={true} loop /> */}
          {/* <video src={movie.trailer} autoPlay={true} loop /> */}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{item.length}</span>
              {/* <span className="limit">+{movie.limit}</span> */}
              <span>{item.year}</span>
            </div>
            <div className="desc">{item.desc}</div>
            <div className="genre">{item.genre}</div>
          </div>
        </>
      )}
      <img src={item.img} alt="" />
    </div>
  );
};

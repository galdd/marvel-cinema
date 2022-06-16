import './list.scss';
import { Link } from 'react-router-dom';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useRef, useState } from 'react';
import { ListItem } from '../list-item/list-item';
import './list.scss';

export const List = ({ list }: any) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const [dis, setDis] = useState('display');
  const listRef: any = useRef();

  const handleClick = (direction: any) => {
    setIsMoved(true);
    const distance = listRef.current.getBoundingClientRect().y - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateY(${distance + 230}px)`;
    }
    if (direction === 'right' && slideNumber < list.length - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateY(${-230 + distance}px)`;
    }
  };
  return (
    // <Link to={{ pathname: '/watch' }}>
    <div className="list ">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: isMoved && slideNumber > 0 ? 'unset' : 'none' }}
          // style={{ display: 'none' }}
        />
        <div className="container" ref={listRef}>
          {/* <ListItem item={list} /> */}
          {list.map((item: any, i: any) => (
            <div className="custom">
              <ListItem key={i} index={i} item={item} />
            </div>
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick('right')}
          // style={{
          //   display: slideNumber < list.length - 6 ? 'unset' : 'none',
          // }}
        />
      </div>
    </div>
    // </Link>
  );
};

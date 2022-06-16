import { Link, useLocation } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import './watch.scss';

const Watch = () => {
  const location = useLocation();
  // const movie = location?.movie;

  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay controls src={trailer} />
    </div>
  );
};

export default Watch;

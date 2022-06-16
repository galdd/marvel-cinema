import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PublishIcon from '@mui/icons-material/Publish';

import { updateMovie } from '../../context/movieContext/apiCalls';
import { useMovieContext } from '../../context/movieContext/MovieContext';
import './movie.css';

const Movie = () => {
  const [updatedMovie, setUpdatedMovie] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [year, setYear] = useState('');
  const [order, setOrder] = useState('');
  const [length, setLength] = useState('');
  const [moviedbApiId, setMoviedbApiId] = useState('');

  const { dispatch } = useMovieContext();
  const location: any = useLocation();
  const movie = location.state.movie;
  useEffect(() => {
    setTitle(movie.title);
    setDesc(movie.desc);
    setImg(movie.img);
    setYear(movie.year);
    setOrder(movie.chronologicalOrder);
    setLength(movie.length);
    setMoviedbApiId(movie.moviedbApiId);
  }, []);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const value = e.target.value;

    // setUpdatedMovie({ ...updatedMovie, [e.target.name]: value });
  };
  const handleUpdate = (e: any) => {
    e.preventDefault();
    const updateMovieObj = {
      title,
      desc,
      year,
      order,
      length,
      img,
      moviedbApiId,
    };
    console.log('U', updateMovieObj);

    updateMovie(movie.id, updateMovieObj, dispatch);
    navigate('/movies');
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <img src={movie.img} className="productTopLeft__img" alt="" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem desc">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue"> {movie.id}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Order:</span>
              <span className="productInfoValue">
                {movie.chronologicalOrder}
              </span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Length:</span>
              <span className="productInfoValue">{movie.length}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Description:</span>
              <span className="productInfoValue">{movie.desc}</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">moviedbApiId:</span>
              <span className="productInfoValue">{movie.moviedbApiId}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Name</label>
            <input
              type="text"
              value={title}
              placeholder={movie?.title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Movie Description</label>
            <textarea
              value={desc}
              placeholder={movie.desc}
              name="desc"
              rows={4}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label>Year</label>
            <input
              type="text"
              value={year}
              placeholder={movie.year}
              name="year"
              onChange={(e) => setYear(e.target.value)}
            />
            <label>chronologicalOrder</label>
            <input
              type="text"
              value={order}
              placeholder={movie.limit + '+'}
              name="chronologicalOrder"
              onChange={(e) => setOrder(e.target.value)}
            />
            <label>Length</label>
            <input
              type="text"
              value={length}
              placeholder={movie.length}
              name="Length"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>moviedbApiId</label>
            <input
              type="text"
              value={moviedbApiId}
              placeholder={movie.moviedbApiId}
              name="moviedbApiId"
              onChange={(e) => setMoviedbApiId(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <label>moviedbApiId:</label>
              <input
                type="text"
                value={img}
                placeholder={movie.img}
                name="img"
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;

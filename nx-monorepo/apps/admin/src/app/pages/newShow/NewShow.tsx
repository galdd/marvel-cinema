import { useContext, useEffect, useState } from 'react';
import './newShow.css';
import storage from '../../../firebase';
import { createMovie, getMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ShowContext } from '../../context/showContext/ShowContext';
import { createShow } from '../../context/showContext/apiCalls';
import { useNavigate } from 'react-router-dom';

export default function NewShow() {
  const [show, setShow] = useState<any>(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ShowContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    console.log(value);

    setShow({ ...show, [e.target.name]: value });
  };

  const handleSelect = (e: any) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value,
    );
    console.log('a', value.join());
    setShow({ ...show, [e.target.name]: value.join() });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createShow(show, dispatch);
    navigate('/shows');
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Show</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="datetime-local"
              placeholder="dateAndTIme"
              name="dateAndTIme"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input
              type="number"
              placeholder="0"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Ticket Amount</label>
            <input
              type="number"
              placeholder="0"
              name="ticketAmount"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Imdb Api</label>
            <input
              type="text"
              placeholder="https://..."
              name="moviedbApiId"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="movieId"
              onChange={handleSelect}
              style={{ height: '280px' }}
            >
              {movies.map((movie: any) => (
                <option key={movie.id} value={movie.id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

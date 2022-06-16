import { Request, Response, NextFunction } from 'express';
import { Movie } from '../model/Movie';
import { v4 as uuidv4 } from 'uuid';
import { Op } from 'sequelize';

const getMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movies = await Movie.findAll();

    // get some Movies
    return res.status(200).json({
      movies,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    console.log(movie);

    // get some Movies
    return res.status(200).json({
      movie,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// adding a Movie
const addMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = await uuidv4();
    // req.body.id = id;
    const { title } = req.body;
    const newMovie = await Movie.create({ id, title });

    // console.log(newMovie);
    // const savedMovie = await newMovie.save();
    res.status(201).json('bla');
  } catch (err) {
    // console.log(err);

    res.status(500).json(err);
  }
};

const removeMovie = async (req: Request, res: Response, next: NextFunction) => {
  // return response
};

export default { getMovies, getMovie, addMovie, removeMovie };
// export default { getMovies, getMovie, updateMovie, deleteMovie, addMovie };

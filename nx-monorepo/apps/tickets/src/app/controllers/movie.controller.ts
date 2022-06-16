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
    req.body.id = id;
    const movie = await Movie.create(req.body);

    console.log(movie);
    // const savedMovie = await newMovie.save();
    return res.status(201).json({ movie });
  } catch (err) {
    // console.log(err);

    res.status(500).json(err);
  }
};

const removeMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
      await movie.destroy().then(function () {
        return res.status(200).json({
          message: 'Movie deleted.',
        });
      });
    } else {
      res.send({ message: 'Movie not exists' });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
      await movie.update(req.body).then(function () {
        return res.status(200).json({
          message: 'Movie Updated.',
        });
      });
    } else {
      res.send({ message: 'Movie not exists' });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { getMovies, getMovie, addMovie, removeMovie, updateMovie };
// export default { getMovies, getMovie, updateMovie, deleteMovie, addMovie };

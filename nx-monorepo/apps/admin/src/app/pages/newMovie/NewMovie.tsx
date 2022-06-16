import { useContext, useState } from 'react';
import './newMovie.css';
import storage from '../../../firebase';
import { createMovie } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function NewMovie() {
  const [movie, setMovie] = useState<any>(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  //FIXME upload
  // const upload = (items: any) => {
  //   items.forEach((item: any) => {
  //     const fileName = new Date().getTime() + item.label + item.file.name;
  //     const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
  //     uploadTask.on(
  //       'state_changed',
  //       (snapshot: any) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log('Upload is ' + progress + '% done');
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       },
  //       () => {
  //         uploadTask.snapshot.ref.getDownloadURL().then((url: any) => {
  //           setMovie((prev: any) => {
  //             return { ...prev, [item.label]: url };
  //           });
  //           setUploaded((prev) => prev + 1);
  //         });
  //       },
  //     );
  //   });
  // };

  const handleUpload = (e: any) => {
    e.preventDefault();
    // upload([
    //   { file: img, label: 'img' },
    //   { file: imgTitle, label: 'imgTitle' },
    //   { file: imgSm, label: 'imgSm' },
    //   { file: trailer, label: 'trailer' },
    //   { file: video, label: 'video' },
    // ]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createMovie(movie, dispatch);
    navigate('/movies');
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Chronological Order</label>
          <input
            type="text"
            placeholder="Chronological Order"
            name="chronologicalOrder"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Length</label>
          <input
            type="text"
            placeholder="length"
            name="length"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>moviedbApiId</label>
          <input
            type="text"
            placeholder="moviedbApiId"
            name="moviedbApiId"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label></label>
        </div>
        <div className="addProductItem">
          <label></label>
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e: any) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e: any) => setImgTitle(e.target.files[0])}
          />
        </div>

        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e: any) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e: any) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e: any) => setVideo(e.target.files[0])}
          />
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

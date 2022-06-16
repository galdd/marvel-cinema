import './movieList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

export default function MovieList() {
  const [remove, setRemove] = useState(false);
  const { movies, dispatch } = useContext<any>(MovieContext);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    getMovies(dispatch);
    console.log('m', movies);
  }, [dispatch, remove]);

  const handleDelete = (id: any) => {
    deleteMovie(id, dispatch);
    setRemove(!remove);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 280 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 300,
      renderCell: (params: any) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'year', headerName: 'year', width: 120 },
    {
      field: 'chronologicalOrder',
      headerName: 'Order',
      width: 120,
    },
    { field: 'length', headerName: 'Length', width: 120 },
    { field: 'moviedbApiId', headerName: 'moviedbApiId', width: 120 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link
              to={{ pathname: '/movies/' + params.row.id }}
              state={{ movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer product">
        <h1 className="productTitle">Movie List</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 50]}
        pagination
        checkboxSelection
        getRowId={(r) => r.id}
      />
    </div>
  );
}

//FIXME
{
  /* to={{ pathname: '/movie/' + params.row._id, movie: params.row }} */
}

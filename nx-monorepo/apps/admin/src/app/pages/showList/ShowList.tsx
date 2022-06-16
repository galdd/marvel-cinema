import './showList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShowContext } from '../../context/showContext/ShowContext';
import { deleteShow, getShows } from '../../context/showContext/apiCalls';
import { useNavigate } from 'react-router-dom';

export default function ShowList() {
  const [pageSize, setPageSize] = useState<number>(10);
  const [remove, setRemove] = useState(false);
  const { shows, dispatch } = useContext<any>(ShowContext);
  useEffect(() => {
    getShows(dispatch);
  }, [dispatch, remove]);

  const handleDelete = (id: any) => {
    deleteShow(id, dispatch);
    setRemove(!remove);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'dateAndTIme', headerName: 'Date and tIme', width: 250 },
    { field: 'moviedbApiId', headerName: 'imdb Api', width: 150 },
    { field: 'ticketAmount', headerName: 'Ticket amount', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          //FIXME
          // to={{ pathname: '/show/' + params.row._id, show: params.row }}
          <>
            <Link
              to={{ pathname: '/shows/' + params.row.id }}
              state={{ show: params.row }}
            >
              <button className="productShowEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productShowDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productShow">
      <div className="productTitleContainer product">
        <h1 className="productTitle">Show List</h1>
        <Link to="/newShow">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={shows}
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

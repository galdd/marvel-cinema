import './ticketList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { TicketContext } from '../../context/ticketContext/TicketContext';
import { deleteTicket, getTickets } from '../../context/ticketContext/apiCalls';
import { useNavigate } from 'react-router-dom';

export default function TicketList() {
  const [pageSize, setPageSize] = useState<number>(10);
  const [remove, setRemove] = useState(false);
  const { tickets, dispatch } = useContext<any>(TicketContext);
  useEffect(() => {
    getTickets(dispatch);
  }, [dispatch, remove]);

  const handleDelete = (id: any) => {
    deleteTicket(id, dispatch);
    setRemove(!remove);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'showId', headerName: 'Show Id', width: 250 },
    { field: 'seatId', headerName: 'Seat Id', width: 150 },
    { field: 'isTaken', headerName: 'isTaken', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link
              to={{ pathname: '/tickets/' + params.row.id }}
              state={{ ticket: params.row }}
            >
              <button className="productTicketEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productTicketDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productTicket">
      <div className="productTitleContainer product">
        <h1 className="productTitle">Ticket List</h1>
        {/* <Link to="/newUser">
          <button className="productAddButton">Create</button>
        </Link> */}
      </div>
      <DataGrid
        rows={tickets}
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

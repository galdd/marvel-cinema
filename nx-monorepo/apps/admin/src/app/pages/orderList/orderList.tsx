import './orderList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../context/orderContext/OrderContext';
import { deleteOrder, getOrders } from '../../context/orderContext/apiCalls';
import { useNavigate } from 'react-router-dom';

export default function OrderList() {
  const [pageSize, setPageSize] = useState<number>(10);
  const [remove, setRemove] = useState(false);
  const { orders, dispatch } = useContext<any>(OrderContext);
  useEffect(() => {
    getOrders(dispatch);
    console.log('o', orders);
  }, [dispatch, remove]);

  const handleDelete = (id: any) => {
    deleteOrder(id, dispatch);
    setRemove(!remove);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'userId', headerName: 'User Id', width: 250 },
    { field: 'ticketId', headerName: 'Ticket Id', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link
              to={{ pathname: '/orders/' + params.row.id }}
              state={{ order: params.row }}
            >
              <button className="productOrderEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productOrderDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productOrder">
      <div className="productTitleContainer product">
        <h1 className="productTitle">Order List</h1>
        {/* <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link> */}
      </div>
      <DataGrid
        rows={orders}
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

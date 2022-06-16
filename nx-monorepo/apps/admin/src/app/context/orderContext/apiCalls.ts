import axios from 'axios';

import {
  getOrdersStart,
  getOrdersFailure,
  getOrdersSuccess,
  deleteOrdersStart,
  deleteOrderSuccess,
  deleteOrdersFailure,
  updateOrdersStart,
  updateOrderSuccess,
  updateOrdersFailure,
  createOrdersStart,
  createOrderSuccess,
  createOrdersFailure,
} from './OrderActions';

export const getOrders = async (dispatch: any) => {
  dispatch(getOrdersStart());
  try {
    const res = await axios.get('http://localhost:7003/order');
    console.log('resOrders', res.data.orders);

    dispatch(getOrdersSuccess(res.data.orders));
  } catch (err) {
    console.log(err);
    dispatch(getOrdersFailure());
  }
};

export const deleteOrder = async (id: any, dispatch: any) => {
  dispatch(deleteOrdersStart());
  try {
    await axios.delete(`http://localhost:7003/order/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteOrdersFailure());
  }
};
export const updateOrder = async (id: any, order: any, dispatch: any) => {
  dispatch(updateOrdersStart());
  try {
    const res = await axios.put(`http://localhost:7003/order/${id}`, order);
    console.log('resb', res);

    dispatch(updateOrderSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateOrdersFailure());
  }
};

// CREATE
export const createOrder = async (order: any, dispatch: any) => {
  dispatch(createOrdersStart());
  try {
    const res = await axios.post(`http://localhost:7003/order`, order);

    dispatch(createOrderSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createOrdersFailure());
  }
};

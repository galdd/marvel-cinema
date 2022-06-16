// GET ALL ORDERS
export const getOrdersStart = () => ({
  type: 'ORDERS_START',
});
export const getOrdersSuccess = (orders: any) => ({
  type: 'ORDERS_SUCCESS',
  payload: orders,
});
export const getOrdersFailure = () => ({
  type: 'ORDERS_FAILURE',
});

// GET SINGLE ORDER

// DELETE A ORDER
export const deleteOrdersStart = () => ({
  type: 'DELETE_ORDERS_START',
});
export const deleteOrderSuccess = (id: any) => ({
  type: 'DELETE_ORDERS_SUCCESS',
  payload: id,
});
export const deleteOrdersFailure = () => ({
  type: 'DELETE_ORDERS_FAILURE',
});

// UPDATE A ORDER
export const updateOrdersStart = () => ({
  type: 'UPDATE_ORDERS_START',
});
export const updateOrderSuccess = (updatedOrder: any) => ({
  type: 'UPDATE_ORDERS_SUCCESS',
  payload: updatedOrder,
});
export const updateOrdersFailure = () => ({
  type: 'UPDATE_ORDERS_FAILURE',
});

// CREATE A ORDER
export const createOrdersStart = () => ({
  type: 'CREATE_ORDERS_START',
});
export const createOrderSuccess = (newOrder: any) => ({
  type: 'CREATE_ORDERS_SUCCESS',
  payload: newOrder,
});
export const createOrdersFailure = () => ({
  type: 'CREATE_ORDERS_FAILURE',
});

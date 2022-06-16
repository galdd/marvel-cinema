import config from 'config';
import got from 'got';

const ORDERS_SERVICE_URI = <string>config.get('ORDERS_SERVICE_URI');

export interface Order {
  id: string;
  userId: string;
  ticketId: any;
}

export default class OrdersService {
  static async getOrdersByid({
    userId,
  }: {
    userId: string;
  }): Promise<Order | null> {
    // console.log("ttt", userId);

    const { orders } = await got
      .get(`${ORDERS_SERVICE_URI}/order/${userId}`)
      .json();
    if (!orders) return null;

    let fixOrders = Object.assign(orders);
    fixOrders.map((order) => {
      if (order.ticketId.includes(',')) {
        order.ticketId = order.ticketId.split(',');
      } else {
        order.ticketId = order.ticketId.split(' ');
      }
      return order;
    });
    console.log('f', fixOrders);
    // console.log(fixOrders);
    return <Order>fixOrders;
  }

  static async getOrder({ id }: { id: string }): Promise<Order | null> {
    // console.log("ttt", userId);

    const { order } = await got
      .get(`${ORDERS_SERVICE_URI}/order/id/${id}`)
      .json();
    if (!order) return null;
    // console.log(orders);

    return <Order>order;
  }

  static async createOrder({
    userId,
    ticketId,
  }: {
    userId: string;
    ticketId: Array<string>;
  }) {
    const body: any = await got
      .post(`${ORDERS_SERVICE_URI}/order`, {
        json: { userId, ticketId },
      })
      .json();
    if (body.order) {
      let order = Object.assign(body.order);
      console.log('B1', order, Array.isArray(order.ticketId));
      if (!Array.isArray(order.ticketId)) {
        console.log('aadsdsa');

        order.ticketId = await order.ticketId.split(',');
      }
      console.log('B2', order);
      return order;
    }

    if (body.error) {
      throw new Error(body.message);
    }

    // return order;
  }

  static async removeOrder({ id }: { id: string }) {
    console.log(id);
    const body: any = await got
      .delete(`${ORDERS_SERVICE_URI}/order/${id}`)
      .json();
    console.log('Aa', body.message);
    if (body.error) {
      throw new Error(body.message);
    }

    return body.message;
  }

  //   static async getOrder({
  //     orderId,
  //   }: {
  //     orderId: string;
  //   }): Promise<Order | null> {
  //     const body = await got.get(`${ORDERS_SERVICE_URI}/order/${orderId}`).json();
  //     if (!body) return null;
  //     return <Order>body;
  //   }
  //   static async getOrders(): Promise<Order | null> {
  //     const body: any = await got.get(`${ORDERS_SERVICE_URI}/order/`).json();
  //     console.log(body);
  //     if (!body) return null;
  //     return body.orders;
  //   }
}

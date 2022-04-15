import config from "config";
import got from "got";

const TICKETS_SERVICE_URI = <string>config.get("TICKETS_SERVICE_URI");

export interface Show {
  dateAndTIme: Date;
  price: number;
}

interface TicketsInit {
  ticketAmount: number;
  imdbApiId: string;
}

export interface Ticket {
  id: string;
  showId: string;
  dateAndTIme: Date;
  price: number;
}

export default class TicketsService {
  static async createShow({
    ticketsInit,
    dateAndTIme,
    price,
  }: {
    ticketsInit: TicketsInit;
    dateAndTIme: Date;
    price: number;
  }) {
    console.log("t", dateAndTIme, price, ticketsInit);
    const body: any = await got
      .post(`${TICKETS_SERVICE_URI}/show/`, {
        json: { dateAndTIme, price, ticketsInit },
      })
      .json();
    console.log(body);

    return body.show;
  }

  static async setTicket({ id, isTaken }: { id: string; isTaken: boolean }) {
    const body: any = await got
      .post(`${TICKETS_SERVICE_URI}/ticket/`, {
        json: { id, isTaken },
      })
      .json();
    console.log(body);

    return body.ticket;
  }

  static async getTicketsByShowId({
    showId,
  }: {
    showId: string;
  }): Promise<Ticket | null> {
    const body: any = await got
      .get(`${TICKETS_SERVICE_URI}/ticket/showId/${showId}`)
      .json();
    if (!body) return null;
    console.log(body.tickets);

    return <Ticket>body.tickets.rows;
  }

  static async getTicket({ id }: { id: string }): Promise<Ticket | null> {
    console.log("b", id);

    const body: any = await got
      .get(`${TICKETS_SERVICE_URI}/ticket/"${id}"`)
      .json();
    if (!body) return null;

    return <Ticket>body.ticket;
  }

  static async getShows(): Promise<Ticket | null> {
    const body: any = await got.get(`${TICKETS_SERVICE_URI}/show`).json();
    if (!body) return null;
    console.log(body.shows);

    return <Ticket>body.shows;
  }

  static async getShow({ id }: { id: string }): Promise<Ticket | null> {
    const body: any = await got.get(`${TICKETS_SERVICE_URI}/show/${id}`).json();
    if (!body) return null;
    console.log(body.show);

    return <Ticket>body.show;
  }
}

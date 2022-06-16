import config from 'config';
import got from 'got';

const USERS_SERVICE_URI = <string>config.get('USERS_SERVICE_URI');

export interface User {
  createdAt: string;
  id: string;
  email: string;
  isAdmin: boolean;
}

export interface UserSession {
  user: {
    id: string;
    email: string;
    isAdmin: boolean;
    iat: number;
    exp: number;
  };
}

export default class UsersService {
  static async signup({
    password,
    email,
  }: {
    password: string;
    email: string;
  }) {
    const body = <UserSession>await got
      .post(`${USERS_SERVICE_URI}/auth/signup`, {
        json: { password, email },
      })
      .json();
    return <UserSession>body;
  }
  static async signin({
    password,
    email,
  }: {
    password: string;
    email: string;
  }) {
    const body = <UserSession>await got
      .post(`${USERS_SERVICE_URI}/auth/signin`, {
        json: { password, email },
      })
      .json();
    return <UserSession>body;
  }

  static async updateUser({
    userId,
    password,
    email,
    isAdmin,
  }: {
    userId: string;
    password: string;
    email: string;
    isAdmin: boolean;
  }) {
    const body: any = await got
      .put(`${USERS_SERVICE_URI}/users/${userId}`, {
        json: { password, email, isAdmin },
      })
      .json();
    console.log(body);

    return <UserSession>body;
  }

  static async signout() {
    console.log('signout');

    const body = await got.delete(`${USERS_SERVICE_URI}/auth/signout`).json();
    console.log('signout', body);
    return body;
  }

  static async removeUser({
    userId,
  }: {
    userId: string;
  }): Promise<User | null> {
    console.log('aa', userId);

    const body: any = await got
      .delete(`${USERS_SERVICE_URI}/users/${userId}`, {})
      .json();
    if (!body) return null;
    return <User>body.message;
  }

  // static async fetchUser({
  //   accessToken,
  // }: {
  //   accessToken: string;
  // }): Promise<User | null> {
  //   const body: any = await got
  //     .get(`${USERS_SERVICE_URI}/auth/currentuser`, {
  //       headers: {
  //         Cookie: `ACCESS_TOKEN=${accessToken};`,
  //       },
  //     })
  //     .json();
  //   if (!body) return null;
  //   return <User>body.user;
  // }

  static async fetchUserSession({
    accessToken,
  }: {
    accessToken: string;
  }): Promise<UserSession | null> {
    //{withCredentials:true}
    // console.log("ttt", accessToken);

    const body: any = await got
      .get(`${USERS_SERVICE_URI}/auth/currentuser/${accessToken}`)
      .json()
      .catch((err) => {
        console.log(err);
        if (err.response.statusCode === 404) return null;
        throw err;
      });
    if (!body) return null;
    if (body.error) {
      console.log(body.error);
      return body.error;
    }
    // console.log(body);

    return <UserSession>body;
  }
}

// static async fetchUserSession({
//   sessionId,
// }: {
//   sessionId: string;
// }): Promise<UserSession | null> {   //{withCredentials:true}
//   // console.log("ttt", sessionId);

//   const body = await got
//     .get(`${USERS_SERVICE_URI}/auth/currentuser/${sessionId}`, {
//       headers: {
//         Cookie: `ACCESS_TOKEN=${sessionId};`,
//       },
//     })
//     .json()
//     .catch((err) => {
//       if (err.response.statusCode === 404) return null;
//       throw err;
//     });
//   if (!body) return null;
//   return <UserSession>body;
// }
// }
//FIXME
//localoht/?bla=galdagan query param
//.get(`${USERS_SERVICE_URI}/auth/currentuser/${sessionId}`, {  // path/route paramater

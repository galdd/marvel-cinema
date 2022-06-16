import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql, useMutation, useQuery } from '@apollo/client';
import apolloClient from '../apolloClient';

type AuthenticationParameters = {
  email: string;
  password: string;
};

const signupMutation = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      user {
        id
        email
      }
    }
  }
`;

const signinMutation = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      user {
        email
        id
      }
    }
  }
`;

const signoutMutation = gql`
  mutation Mutation {
    signout
  }
`;

const currentUserQuery = gql`
  {
    currentUser {
      user {
        id
        email
      }
    }
  }
`;

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (variables: AuthenticationParameters, thunkAPI) => {
    try {
      const res = await apolloClient.mutate({
        mutation: signupMutation,
        variables,
      });

      console.log('after', res);
      const user = res.data.signup.user;
      if (user) {
        return user;
      } else {
        return thunkAPI.rejectWithValue(user);
      }
    } catch (e: any) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const signinUser = createAsyncThunk(
  'users/signin',
  async (variables: AuthenticationParameters, thunkAPI) => {
    try {
      const res = await apolloClient.mutate({
        mutation: signinMutation,
        variables,
      });

      // const res = await createUserSession(variables: { email, password });
      // console.log('after', userSession);
      console.log('after', res);
      const user = res.data.signin.user;
      if (user) {
        return user;
      } else {
        return thunkAPI.rejectWithValue(user);
      }
    } catch (e: any) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const signoutUser = createAsyncThunk(
  'users/signout',
  async (_, thunkAPI) => {
    try {
      const res = await apolloClient.mutate({
        mutation: signoutMutation,
      });

      // const res = await createUserSession(variables: { email, password });
      // console.log('after', userSession);
      console.log('after', res);
      const user = res.data.signin.user;
      if (user) {
        return user;
      } else {
        return thunkAPI.rejectWithValue(user);
      }
    } catch (e: any) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const fetchUserBytoken = createAsyncThunk(
  'users/fetchUserByToken',
  async (_, thunkAPI) => {
    try {
      const res = await apolloClient.query({ query: currentUserQuery });
      const userSession = res.data.currentUser?.user ?? null;
      console.log('userSession', userSession);

      if (userSession) {
        return userSession;
      } else {
        return thunkAPI.rejectWithValue(userSession);
      }
    } catch (e: any) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    username: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state: any, { payload }: any) => {
        console.log('payload', payload);
        console.log('signupUser.fulfilled');
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.email;
      })

      .addCase(signupUser.pending, (state) => {
        console.log('signupUser.pending');
        state.isFetching = true;
      })

      .addCase(signupUser.rejected, (state, { payload }: any) => {
        console.log('signupUser.rejected');
        state.isFetching = false;
        state.isError = true;
        // state.errorMessage = payload.message;
      });
    builder
      .addCase(signinUser.fulfilled, (state, { payload }: any) => {
        console.log('signinUser.fulfilled');
        state.email = payload.email;
        state.username = payload.name;
        state.isFetching = false;
        state.isSuccess = true;
        return state;
      })
      .addCase(signinUser.rejected, (state, { payload }: any) => {
        console.log('payload', payload);
        console.log('signinUser.rejected');
        state.isFetching = false;
        state.isError = true;
        // state.errorMessage = payload.message;
      })
      .addCase(signinUser.pending, (state: any) => {
        console.log('signinUser.pending');
        state.isFetching = true;
      });
    builder
      .addCase(signoutUser.fulfilled, (state, { payload }: any) => {
        console.log('signoutUser.fulfilled');
        state.email = '';
        state.isFetching = false;
        state.isSuccess = true;
        return state;
      })
      .addCase(signoutUser.rejected, (state, { payload }: any) => {
        console.log('payload', payload);
        console.log('signoutUser.rejected');
        state.isFetching = false;
        state.isError = true;
        // state.errorMessage = payload.message;
      })
      .addCase(signoutUser.pending, (state: any) => {
        console.log('signoutUser.pending');
        state.isFetching = true;
      });
    builder
      .addCase(fetchUserBytoken.pending, (state: any) => {
        console.log('fetchUserBytoken.pending');

        state.isFetching = true;
      })
      .addCase(fetchUserBytoken.fulfilled, (state: any, { payload }: any) => {
        console.log('fetchUserBytoken.fulfilled');
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.email;
      })
      .addCase(fetchUserBytoken.rejected, (state) => {
        state.isFetching = false;
        state.isError = true;
      });
  },
});

export const { clearState } = orderSlice.actions;

export const orderSelector = (state: any) => state.order;

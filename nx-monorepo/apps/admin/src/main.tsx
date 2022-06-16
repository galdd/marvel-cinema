import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { AuthContextProvider } from './app/context/authContext/AuthContext';
import { UserContextProvider } from './app/context/userContext/UserContext';
import { MovieContextProvider } from './app/context/movieContext/MovieContext';
import { TicketContextProvider } from './app/context/ticketContext/TicketContext';
import { ShowContextProvider } from './app/context/showContext/ShowContext';
import { OrderContextProvider } from './app/context/orderContext/OrderContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    {/* <AuthContextProvider> */}
    <UserContextProvider>
      <MovieContextProvider>
        <ShowContextProvider>
          <TicketContextProvider>
            <OrderContextProvider>
              <App />
            </OrderContextProvider>
          </TicketContextProvider>
        </ShowContextProvider>
      </MovieContextProvider>
    </UserContextProvider>
    {/* </AuthContextProvider> */}
  </StrictMode>,
);

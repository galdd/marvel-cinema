import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './app/apolloClient';
import { createGlobalStyle } from 'styled-components';
import App from './app/app';
import { store } from './app/redux/store';
import { Provider } from 'react-redux';

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
  }
  html, body, #app {
    height: 100%;
    width: 100%;
  }
`;

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      {/* <GlobalStyle /> */}
      <App />
    </Provider>
  </ApolloProvider>,
);

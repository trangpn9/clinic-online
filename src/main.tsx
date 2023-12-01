import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import { store } from './store/config'
import App from './app/app';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </StrictMode>
);

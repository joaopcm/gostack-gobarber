import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './config/reactotronConfig';
import Routes from './routes/index';
import history from './services/history';
import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <ToastContainer />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;

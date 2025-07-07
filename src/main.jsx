// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext'; 
import NotificationCenter from './components/NotificationCenter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NotificationProvider>
          <App />
          <NotificationCenter />
        </NotificationProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
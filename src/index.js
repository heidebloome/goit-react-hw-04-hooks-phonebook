import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: 'white',
    buttonBackgroundColor: '#096dd9',
    buttonHoverBackgroundColor: '#1890ff',
  },
  spacing: value => `${4 * value}px`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Home from './view/page/Home';
// import resultsReducer from './results/model/ResultsSlice';

// const store = configureStore({
//   reducer: ,
// });

render(
  <div>
    <App />
  </div>,
  document.getElementById('root'),
);

// eslint-disable-next-line import/prefer-default-export
// export function appStore() {
//   return store;
// }

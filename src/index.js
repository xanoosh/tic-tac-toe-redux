import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components';
import reportWebVitals from './reportWebVitals';

//redux setup start
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './reducers';
const store = createStore(combinedReducers);
//redux setup end

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

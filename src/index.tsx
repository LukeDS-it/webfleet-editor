import React from 'react';
import ReactDOM from 'react-dom';
import 'style-guide/basic-components.scss'
import * as serviceWorker from './serviceWorker';
import App from './App';

// const onRedirectCallback = (appState?: any) => {
//   history.push(
//       appState && appState.targetUrl
//           ? appState.targetUrl
//           : window.location.pathname
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

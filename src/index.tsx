import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Auth0Provider} from './utils/react-auth0-wrapper';
import history from './utils/history';
import App from './App';

const onRedirectCallback = (appState?: any) => {
  history.push(
      appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
  );
};

ReactDOM.render(
    <React.StrictMode>
      <Auth0Provider
          domain={'ldsoftware.eu.auth0.com'}
          client_id={'T2jprgRzFscQ1ob2G1Mb01rBo6b05t0W'}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
      >
        <App/>
      </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

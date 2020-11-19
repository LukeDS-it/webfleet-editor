/// <reference types="react-scripts" />
declare namespace NodeJS {

  interface ProcessEnv {
    REACT_APP_AUTH0_DOMAIN: string
    REACT_APP_AUTH0_CLIENT_ID: string
    REACT_APP_AUTH0_AUDIENCE: string
    REACT_APP_WEBFLEET_DOMAINS_URL: string
    REACT_APP_FIREBASE_PROJECT_ID: string
    REACT_APP_FIREBASE_SENDER_ID: string
    REACT_APP_FIREBASE_APP_ID: string
  }

}

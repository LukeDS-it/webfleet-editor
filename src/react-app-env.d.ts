/// <reference types="react-scripts" />
declare namespace NodeJS {

  interface ProcessEnv {
    REACT_APP_FIREBASE_PROJECT_ID: string
    REACT_APP_FIREBASE_SENDER_ID: string
    REACT_APP_FIREBASE_APP_ID: string
  }

}

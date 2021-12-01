import React, {useContext} from 'react';
import firebase from 'firebase';
import {auth} from 'utils/firebase';
import {AuthContext} from 'utils/Auth';
import './LoginView.scss';
import GLogo from 'assets/g-logo.png';
import {Navigate} from 'react-router';

export function LoginView() {
  const {currentUser} = useContext(AuthContext);

  function handleGoogleLogin() {
    const google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google)
      .then((result) => {
        console.log(result);
      });
  }

  return currentUser
    ? <Navigate to={'/'}/>
    : <div className={'login-screen'}>
      <h1>Welcome to Webfleet!</h1>
      <p>
        Please choose how you want to register to our site and start creating
        your awesome websites!
      </p>
      <button type={'button'} className={'login-google'} onClick={handleGoogleLogin}>
          <span className={'icon'}>
            <img src={GLogo} alt={'Google logo'}/>
          </span>
        <span className={'buttonText'}>Sign in with Google</span>
      </button>
    </div>;

}

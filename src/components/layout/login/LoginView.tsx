import React, {useContext} from 'react';
import firebase from 'firebase';
import {auth} from 'utils/firebase';
import {Redirect, useHistory} from 'react-router';
import {AuthContext} from 'utils/Auth';
import './LoginView.scss'
import GLogo from 'assets/g-logo.png';

export function LoginView() {
  const history = useHistory();
  const {currentUser} = useContext(AuthContext);

  function handleGoogleLogin() {
    const google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google)
      .then((result) => {
        console.log(result);
        history.push('/');
      });
  }

  return currentUser
    ? <Redirect to={'/'}/>
    : <div>
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
import React, {useContext} from 'react';
import firebase from 'firebase';
import {auth} from '../../../utils/firebase';
import {Redirect, useHistory} from 'react-router';
import {AuthContext} from '../../../utils/Auth';

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
        <button type={'button'} className={'btn btn-login-google'} onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </div>;

}
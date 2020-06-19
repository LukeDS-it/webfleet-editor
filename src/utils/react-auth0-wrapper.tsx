import React, {Component, useContext} from 'react';
import createAuth0Client, {Auth0Client, Auth0ClientOptions} from '@auth0/auth0-spa-js';
import {User} from 'auth0';

export interface ContextValue {
  authenticated?: boolean,
  user?: any,
  loading?: boolean,
  handleRedirectCallback?: () => void,
  getIdTokenClaims?: (...p: any) => any,
  loginWithRedirect?: (...p: any) => any,
  getTokenSilently?: (...p: any) => any,
  logout?: (...p: any) => any
}

export const Auth0Context = React.createContext<ContextValue>({} as ContextValue);
export const useAuth0 = () => useContext(Auth0Context);

interface IState {
  auth0Client: any,
  loading: boolean,
  authenticated: boolean,
  user?: User | null;
}

interface Auth0ProviderProps extends Auth0ClientOptions {
  onRedirectCallback?: (appState: any) => void;
  children: React.ReactNode;
  initOptions?: Auth0ClientOptions;
}

export class Auth0Provider extends Component<Auth0ProviderProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      user: null,
      auth0Client: Auth0Client,
    };
  }

  componentDidMount() {
    this.initAuth0();
  }

  initAuth0 = async () => {
    const auth0Client = await createAuth0Client(this.props);
    this.setState({auth0Client});

    if (window.location.search.includes('code=')) {
      return auth0Client.handleRedirectCallback();
    }

    const isAuthenticated = await auth0Client.isAuthenticated();

    const user = (isAuthenticated) ? await auth0Client.getUser() : null;

    this.setState({loading: false, authenticated: isAuthenticated, user})
  };

  render() {
    const {auth0Client, loading, authenticated, user} = this.state;
    const {children} = this.props;
    const configObject = {
      loading: loading,
      authenticated: authenticated,
      user,
      loginWithRedirect: (...p: any) => auth0Client.loginWithRedirect(...p),
      getTokenSilently: (...p: any) => auth0Client.getTokenSilently(...p),
      getIdTokenClaims: (...p: any) => auth0Client.getIdTokenClaims(...p),
      logout: (...p: any) => auth0Client.logout(...p)
    }

    return <Auth0Context.Provider value={configObject}>{children}</Auth0Context.Provider>;
  }

}


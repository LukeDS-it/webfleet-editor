import React, {Component} from 'react';

export class ExternalRedirect extends Component<ExternalRedirectProps, any>{

  render() {
    window.location.assign(this.props.url);
    return <div>Please wait while we take you to the login page</div>;
  }

}

class ExternalRedirectProps {
  constructor(readonly url: string) {}
}
import React, {Component} from 'react';

import SigninScreen from './screens/authentication/signin';

export default class App extends Component {
  render() {
    return (
      // Onde ficará o Redux
      <SigninScreen />
    );
  }
}

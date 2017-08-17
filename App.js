import { StackNavigator } from 'react-navigation';
import Drawer from './app/src/main/AriaryNavigation/Drawer';


import React from "react";
import App from "./ariary/Components/App";

export default class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  render() {
    return <App />;
  }
}

//export default Drawer;


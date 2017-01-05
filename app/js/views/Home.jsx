import React from 'react';

import Navbar from './Navbar';
import Scoreboard from './Scoreboard';
import MainContent from './MainContent';

import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <div className="mainContainer">
          <Scoreboard {...this.props} />
          <MainContent {...this.props}>
            {this.props.children}
          </MainContent>
        </div>
      </div>
    );
  }
};

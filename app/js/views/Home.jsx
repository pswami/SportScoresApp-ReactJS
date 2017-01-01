import React from 'react';

import Navbar from './Navbar';
import Scoreboard from './Scoreboard';
import MainContent from './MainContent';

import { Link } from 'react-router';

const GAMES_REFRESH_TIME = 15000;
let setSportRefreshID = -1;

export default class Home extends React.Component {
  componentWillMount() {
    const sportName = this.props.routeParams.sport;

    console.log('Home', 'componentWillMount');
    this.setSportInterval(sportName);
  }

  componentWillReceiveProps(nextProps) {
    const { setSport } = nextProps.actions;

    if (nextProps.routeParams.sport !== this.props.routeParams.sport) {
      this.setSportInterval(nextProps.routeParams.sport);
    }
  }

  setSportInterval = (sportName) => {
    const { sportsData: { games} } = this.props;
    const { setSport } = this.props.actions;

    setSport(sportName);

    // Reset interval if sport changed
    if (setSportRefreshID >= 0) {
      clearInterval(setSportRefreshID);
    }

    setSportRefreshID = setInterval(function() {
      setSport(sportName);

      // console.log(games.every(game => game.GameStatus.toLowerCase() === 'final'));
      // if (games.every(game => game.GameStatus.toLowerCase() === 'final')) {
      //   clearInterval(setSportRefreshID);
      //   console.log('all games have ended');
      // }
    }, GAMES_REFRESH_TIME);

    console.log('sport changed to', sportName, ' with ID: ', setSportRefreshID, );
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <div className="mainContainer">
          <Scoreboard {...this.props} />
          {this.props.children}
          {/* <MainContent {...this.props} /> */}
        </div>
      </div>
    );
  }
};

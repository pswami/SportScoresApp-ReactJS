import React from 'react';

import Game from './Game';
import dummy from './dummyScores';


const GAMES_REFRESH_TIME = 15000;
let setSportRefreshID = -1;

export default class Scoreboard extends React.Component {
  componentDidMount() {
    const sportName = this.props.routeParams.sport;

    console.log('Scoreboard', 'componentDidMount');
    this.setSportInterval(sportName);
  }

  componentWillReceiveProps(nextProps) {
    const { setSport } = nextProps.actions;

    if (nextProps.routeParams.sport !== this.props.routeParams.sport) {
      this.setSportInterval(nextProps.routeParams.sport);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('Scoreboard shouldComponentUpdate', this.props.sportsData.games !== nextProps.sportsData.games);
    return this.props.sportsData.games !== nextProps.sportsData.games;
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
    const { sportsData: { games, sport }, actions, router} = this.props;

    return (
      <div className="scoreboard">
      {/* <DatePicker /> */}
      {games.map((game, idx) =>
        <Game key={`game-${idx}`} data={game} actions={actions} router={router} sport={sport} />
      )}
      </div>
    );
  }
}

import React from 'react';

import QuickScore from './QuickScore';
import StatsTable from './StatsTable';

const GAME_STATS_REFRESH_TIME = 15000;
let updateGameStatsRefreshID = -1;

export default class GameStats extends React.Component {
  componentWillMount() {
    const { actions } = this.props;
    const routeParamGameID = this.props.routeParams.gameID;

    actions.setGameID(routeParamGameID);

    console.log('GameStats componentWillMount ', this.props);
    // setInterval(() => {
    //   // console.log(this.props.sportsData.gameDetails.GameId);
      // actions.getPlayerStatsByGame(this.props.sportsData.gameDetails.GameId);
      // actions.getGameDetails(this.props.sportsData.gameDetails.GameId);
    // }, 10000);
  }

  componentWillReceiveProps(nextProps) {
    const oldGameID = this.props.routeParams.gameID;
    const newGameID = nextProps.routeParams.gameID;
    // const routeParamGameID = this.props.routeParams.gameID;

    if (oldGameID !== newGameID) {
      console.log('updateGameStats', newGameID);
      this.updateGameStats(newGameID);
    }
  }

  updateGameStats = (gameID) => {
    const { actions } = this.props;


    if (updateGameStatsRefreshID >= 0) {
      clearInterval(updateGameStatsRefreshID);
      actions.setGameID(gameID);
    }

    updateGameStatsRefreshID = setInterval(function() {
      actions.setGameID(gameID);
    }, GAME_STATS_REFRESH_TIME);
  }

  render() {
    return (
      <div className="gameStatsContainer">
        <QuickScore {...this.props} />
        <StatsTable {...this.props} />
      </div>
    );
  }
}

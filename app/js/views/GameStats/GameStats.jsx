import React from 'react';
import ReactDOM from 'react-dom';

import QuickScore from './QuickScore';
import StatsTable from './StatsTable';

const GAME_STATS_REFRESH_TIME = 15000;
let updateGameStatsRefreshID = -1;

export default class GameStats extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {
    const { actions } = this.props;
    const routeParamGameID = this.props.routeParams.gameID;

    actions.setGameID(routeParamGameID);

    console.log('GameStats componentDidMount ');
  }

  componentWillReceiveProps(nextProps) {
    const oldGameID = this.props.routeParams.gameID;
    const newGameID = nextProps.routeParams.gameID;

    if (oldGameID !== newGameID) {
      // console.log('updateGameStats', newGameID);
      this.updateGameStats(newGameID);
    }
  }

  // componentWillUpdate(nextProps, nextState) {
  //   const el = ReactDOM.findDOMNode(this);
  //
  //   if (this.props.sportsData.gameDetails !== nextProps.sportsData.gameDetails) {
  //     el.classList.add('fadeIn');
  //   }
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.sportsData.gameDetails !== prevProps.sportsData.gameDetails) {
  //     const el = ReactDOM.findDOMNode(this);
  //
  //     setTimeout(function(){
  //       el.classList.remove("fadeIn");
  //     }, 1000);
  //   }
  // }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.sportsData.gameDetails !== nextProps.sportsData.gameDetails) {

      return true;
    }

    if (this.props.sportsData.gameStatsTable !== nextProps.sportsData.gameStatsTable) {
      return true;
    }

    return false;
  }

  updateGameStats = (gameID) => {
    const { actions } = this.props;

    actions.setGameID(gameID);

    if (updateGameStatsRefreshID >= 0) {
      clearInterval(updateGameStatsRefreshID);
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

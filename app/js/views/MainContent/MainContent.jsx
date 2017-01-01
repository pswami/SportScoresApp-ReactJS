import React from 'react';

import GameStats from '../GameStats';

export default class MainContent extends React.Component {

  componentWillMount() {
    const { actions } = this.props;
    const routeParamGameID = this.props.routeParams.gameID;

    // actions.setGameID(routeParamGameID);
  }

  componentWillReceiveProps(nextProps) {
    const { actions } = nextProps;

    // const routeParamGameID = nextProps.routeParams.gameID;
    //
    // if (nextProps.routeParams.gameID !== this.props.routeParams.gameID) {
    //   actions.setGameID(routeParamGameID);
    // }
  }

  render() {
    const { sportsData: { gameID } } = this.props;

    return (
      <div className="mainContent">
        <GameStats {...this.props} />
      </div>
    );
  }
};

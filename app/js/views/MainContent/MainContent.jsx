import React from 'react';

import GameStats from '../GameStats';

export default class MainContent extends React.Component {

  componentWillMount() {
    const { actions } = this.props;
    const routeParamGameID = this.props.routeParams.gameID;

    console.log('componentWillMount MainContent');
    // actions.setGameID(routeParamGameID);
  }

  componentWillReceiveProps(nextProps) {
    const { actions } = nextProps;
  }

  render() {
    const { sportsData: { gameID } } = this.props;

    return (
      <div className="mainContent">
        {this.props.children}
      </div>
    );
  }
};

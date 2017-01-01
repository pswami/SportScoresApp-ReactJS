import React from 'react';

import Game from './Game';
import dummy from './dummyScores';

const Scoreboard = (props) => {
  const { sportsData: { games, sport }, actions, router} = props;
   return (
    <div className="scoreboard">
      {/* <DatePicker /> */}
      {games.map((game, idx) =>
        <Game key={`game-${idx}`} data={game} actions={actions} router={router} sport={sport} />
      )}
    </div>
  );
};

export default Scoreboard;

import React from 'react';

import { secondsToMinSec } from '../../utils.js';

const Team = ({ icon, name, record, score}) => {
  return (
    <div className="team">
      <div className="teamContainer">
        <span className="icon">{icon}</span>
        <span className="name">{name}</span>
        {record && <span className="record">{record}</span>}
      </div>
      {score &&<span className="score">{score}</span>}
    </div>
  );
};

const Game = ({data, actions, router, sport}) => {
  return (
    <div className="game" onClick={() => {
      router.push(`${sport}/${data.GameId}`);
      // actions.getPlayerStatsByGame(data.GameId);
      // actions.getGameDetails(data.GameId);
    }}>
      <div className="gameContainer">
        <Team
          icon={<img src={`https://mrest.protrade.com/api/v7/team/${data.AwayTeamID}/yslogo/96/96?failOnErr=true&forWhiteBG=false`} />}
          name={data.AwayTeam}
          score={data.AwayScore}
        />
        <Team
          icon={<img src={`https://mrest.protrade.com/api/v7/team/${data.HomeTeamID}/yslogo/96/96?failOnErr=true&forWhiteBG=true`} />}
          name={data.HomeTeam}
          score={data.HomeScore}
        />
      </div>
      <div className="timeContainer">
        {data.TimeRemainingFrac > 0 && <div className="time">{secondsToMinSec(data.TimeRemainingFrac)}</div>}
        <div className="periodLine">{data.Quarter}</div>
      </div>
    </div>
  );
};

export default Game;

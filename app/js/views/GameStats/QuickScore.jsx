import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';

import { secondsToMinSec } from '../../utils.js';


const TeamScore = ({teamID, score, turnovers, reverse}) => {
  return (
    <div className={`miniContainer ${reverse ? 'reverse' : ''}`}>
      <div className="icon"><img src={`https://mrest.protrade.com/api/v7/team/${teamID}/yslogo/96/96?failOnErr=true&forWhiteBG=false`} /></div>
      <div className="teamScore">
        <div className="score">{score}</div>
        <div className="turnovers">TO: {turnovers}</div>
      </div>
    </div>
  );
};

TeamScore.defaultProps = {
  reverse: false,
}

const PeriodTable = ({ gameDetails }) => {
  const numRows = ['Away', 'Home'];
  const { PeriodScores } = gameDetails;
  const columnStyle = {
    padding: '2px',
  };

  // console.log(PeriodScores);

  return (
    <div className="periodTableContainer">
      {PeriodScores &&
        <Table
          selectable={false}
          multiSelectable={false}
          style={{
            background: 'none',
          }}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn
                style={{
                  ...columnStyle,
                  color: 'white',
                  width: '35px',
                  textAlign: 'left',
              }}>Team</TableHeaderColumn>
              {PeriodScores.map((period, idx1) =>
                <TableHeaderColumn
                  key={`column-${idx1}`}
                  style={{...columnStyle, width: '5px', textAlign: 'center'}}
                >
                  {period.Period}
                </TableHeaderColumn>
              )}
              <TableHeaderColumn
                style={{...columnStyle, width: '5px', textAlign: 'center'}}
              >
                TOT
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {numRows.map((rowName, idx3) =>
              <TableRow key={`row-${idx3}`} style={{ color: 'white' }}>
                <TableRowColumn
                  style={{
                    ...columnStyle,
                    color: 'white',
                    width: '35px',
                    textAlign: 'left',
                }}>{gameDetails[`${rowName}TeamFullName`]}</TableRowColumn>
                {PeriodScores.map((period, idx4) =>
                  <TableRowColumn
                    key={`cell-${idx4}`}
                    style={{
                      ...columnStyle,
                      color: 'white',
                      width: '5px',
                      textAlign: 'center',
                  }}>{period[`${rowName}Score`]}</TableRowColumn>
                )}
                <TableRowColumn
                  style={{
                    ...columnStyle,
                    color: 'white',
                    width: '5px',
                    textAlign: 'center',
                }}>{gameDetails[`${rowName}Score`]}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>}
    </div>
  );
};

const QuickScore = (props) => {
  const { sportsData: { gameDetails } } = props;
  return (
    <div className="quickScoreContainer">
      <div className="scoreContainer">
        <TeamScore
          teamID={gameDetails.HomeTeamID}
          score={gameDetails.HomeScore}
          turnovers={gameDetails.HomeTimeoutsRemaining}
        />
        <div className="timeInfo">
          <div className="period">{gameDetails.Period}</div>
          <div className="time">{gameDetails.TimeRemaining > 0 && secondsToMinSec(gameDetails.TimeRemainingFrac)}</div>
        </div>
        <TeamScore
          teamID={gameDetails.AwayTeamID}
          score={gameDetails.AwayScore}
          turnovers={gameDetails.AwayTimeoutsRemaining}
          reverse={true}
        />
      </div>
      <PeriodTable gameDetails={gameDetails} />
    </div>
  );
};

export default QuickScore;

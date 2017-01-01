import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import dummy from './dummy';

const StatsTable = (props) => {
  const { sportsData: { gameStatsTable } } = props;
  const columnStyle = {
    padding: '2px',
  };

  const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
  return (
    <div className="statsTableContainer">
      <div>
        <Tabs>
          {gameStatsTable.map((team) =>
            <Tab key={team.Label} label={team.Label} style={{color: 'white'}}>
              {team.Tables.map((table, idx) =>
                <Table
                  key={`table-${idx}`}
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
                      {table.Columns.map((column, idx2) =>
                        <TableHeaderColumn
                          key={`column-${idx2}`}
                          style={{...columnStyle, width: `${idx2 === 0 ? '30px' : '15px'}`, textAlign: `${idx2 === 0 ? 'left' : 'center'}`}}
                        >
                          {column.Title}
                        </TableHeaderColumn>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={false}
                  >
                    {table.Rows.map((row, idx3) =>
                      <TableRow key={`row-${idx3}`} style={{ color: 'white' }}>
                        {row.Cells.map((cell, idx4) =>
                          <TableRowColumn key={`cell-${idx4}`} style={{
                            ...columnStyle,
                            width: `${idx4 === 0 ? '30px' : '15px'}`,
                            textAlign: `${idx4 === 0 ? 'left' : 'center'}`,
                            color: `${cell.Highlight ? 'yellow' : 'white'}`,
                          }}>{cell.Value}</TableRowColumn>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default StatsTable;

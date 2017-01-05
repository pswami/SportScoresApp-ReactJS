const init = {
  sport: '',
  gameID: '',
  games: [],
  gameStatsTable: [],
  gameDetails: {},
};

export default function(sportsData=init, action) {
  switch(action.type) {
    case 'SET_SPORT':
      return Object.assign({}, sportsData, { sport: action.payload.sport });
    case 'SET_GAME_ID':
      return Object.assign({}, sportsData, { gameID: action.payload });
    case 'GET_GAME_PLAYER_STATS_SUCCEEDED':
      return Object.assign({}, sportsData, { gameStatsTable: action.payload });
    case 'GET_GAME_DETAILS_SUCCEEDED':
      return Object.assign({}, sportsData, { gameDetails: action.payload });
    case 'GET_GAMES_SUCCEEDED':
      // console.log(action);
      return Object.assign({}, sportsData, { games: action.payload });
    default:
      return sportsData;
  }
}

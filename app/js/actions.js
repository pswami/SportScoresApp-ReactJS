export function getSchedule() {
  return {
    type: 'GET_SCHEDULE'
  }
}

export function getPlayerStatsByGame(payload) {
  return {
    type: 'GET_GAME_PLAYER_STATS',
    payload,
  }
}

export function getGameDetails(payload) {
  return {
    type: 'GET_GAME_DETAILS',
    payload,
  }
}

export function setGameID(payload) {
  return {
    type: 'SET_GAME_ID',
    payload,
  }
}

export function getPlayerByID() {
  return {
    type: 'GET_PLAYER'
  }
}

export function getGames(payload) {
  return {
    type: 'GET_GAMES',
    payload,
  }
}

export function setSport(sport) {
  return {
    type: 'SET_SPORT',
    payload: { sport: checkCorrectParam(sport) ? sport.toLowerCase() : '' }
  }
}

function checkCorrectParam(sportParam) {
  if (sportParam) {
    switch (sportParam.toLowerCase()) {
      case 'nba':
      case 'nfl':
      case 'nhl':
      return true;
      default:
      return false;
    }
  }
  return false;
}

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const BASE_URL = 'http://mrest.protrade.com/api/v7';

function* handleGetGameDetails(action) {
  const gameID = action.payload;

  try {
    const res = yield call(() => fetch(`/api/gameDetails?gameID=${gameID}`)
                                 .then(response => response.json()));

    yield put({type: "GET_GAME_DETAILS_SUCCEEDED", payload: res});
   } catch (e) {
    yield put({type: "GET_GAME_DETAILS_FAILED", message: e.message});
   }
}

function* handleGetPlayerStats(action) {
  const gameID = action.payload;

  try {
    const res = yield call(() => fetch(`/api/playerStats?gameID=${gameID}`)
                                 .then(response => response.json()));

    yield put({type: "GET_GAME_PLAYER_STATS_SUCCEEDED", payload: res});
   } catch (e) {
    yield put({type: "GET_GAME_PLAYER_STATS_FAILED", message: e.message});
   }
}

function* handleGetGames(action) {
  const sport = action.payload.sport;
  const date = action.payload.date || getCurrentDate();

  try {
    const res = yield call(() => fetch(`/api/games?sport=${sport}&date=${date}`)
                                 .then(response => response.json()));

    yield put({type: "GET_GAMES_SUCCEEDED", payload: res});
   } catch (e) {
    yield put({type: "GET_GAMES_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("SET_SPORT", handleGetGames);
  yield takeLatest("GET_GAMES", handleGetGames);

  yield takeLatest("GET_GAME_DETAILS", handleGetGameDetails);
  yield takeLatest("GET_GAME_PLAYER_STATS", handleGetPlayerStats);

  yield takeLatest("SET_GAME_ID", handleGetGameDetails);
  yield takeLatest("SET_GAME_ID", handleGetPlayerStats);

}

export default mySaga;

// Helper Functions

function getCurrentDate() {
  const today = new Date();

  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

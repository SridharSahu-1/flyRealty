import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../type";

export const storeName = {
  user: "USER",
};

const initialState: GameState = {
  NoOfGamesWon: 0,
  NoOfGamesLost: 0,
  Score: 0,
  isGameStarted: false,
  gameHistorys: [],
  time: 60,
  gameStatus: "NOT STARTED",
};

const userSlice = createSlice({
  name: storeName.user,
  initialState,
  reducers: {
    addScore(state, action: PayloadAction<number>) {
      state.Score = state.Score + action.payload;
      if (state.Score >= 500) {
        state.NoOfGamesWon = state.NoOfGamesWon + 1;
        state.gameHistorys = [
          ...state.gameHistorys,
          { timeTaken: 60 - state.time, Score: state.Score, status: "WIN" },
        ];
        state.isGameStarted = false;
        state.gameStatus = "WIN";
      }
    },
    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload;
      if (state.time < 1) {
        state.isGameStarted = false;
        state.NoOfGamesLost = state.NoOfGamesLost + 1;
        state.gameHistorys = [
          ...state.gameHistorys,
          { timeTaken: 60, Score: state.Score, status: "LOSS" },
        ];
        state.gameStatus = "LOSS";
      }
    },
    resetGameStatus(state) {
      state.gameStatus = "NOT STARTED";
      state.Score = 0;
      state.time = 60;
    },
    startGame(state) {
      state.isGameStarted = true;
    },
  },
});

export default userSlice.reducer;
export const { addScore, setTime, resetGameStatus, startGame } =
  userSlice.actions;

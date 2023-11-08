export type GameState = {
  NoOfGamesWon: number;
  NoOfGamesLost: number;
  Score: number;
  isGameStarted: boolean;
  gameHistorys: gameHistory[];
  time: number;
  gameStatus: "NOT STARTED" | "WIN" | "LOSS";
};

export type gameHistory = {
  Score: number;
  timeTaken: number;
  status: "WIN" | "LOSS";
};

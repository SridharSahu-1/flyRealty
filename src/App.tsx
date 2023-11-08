import "./App.css";
import Game from "./components/game";
import Timer from "./components/timer";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/store";
import GameHistory from "./components/gameHistory";
import Modal from "./components/modal";
import { useDisclose } from "./hooks";
import { WinModal, LossModal } from "./components/gameModal";

function App() {
  const { NoOfGamesLost, NoOfGamesWon, Score } = useSelector(
    (state: RootStore) => state.user
  );
  const { isOpen, onClose, onOpen } = useDisclose(false);

  return (
    <div className="container">
      <Timer />
      <div className="gameDetails">
        <span className="score">Score: {Score}/500</span>
        <span className="noOfWin">Win: {NoOfGamesWon}</span>
        <span className="noOfLoss">Loss: {NoOfGamesLost}</span>
        <span className="matchesPlayed">
          Matches Played: {NoOfGamesWon + NoOfGamesLost}
        </span>
        <button className="history_btn" onClick={onOpen}>Game History</button>
      </div>
      <Game />
      <Modal isOpen={isOpen} onClose={onClose}>
        <GameHistory />
      </Modal>
      <WinModal />
      <LossModal />
    </div>
  );
}

export default App;

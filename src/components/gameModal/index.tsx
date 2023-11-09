import { RootStore } from "../../redux/store";
import Modal from "../modal";
import { useSelector, useDispatch } from "react-redux";
import { resetGameStatus } from "../../redux/reducer";
import "./index.css";

export function WinModal() {
  const { gameStatus, Score, time } = useSelector(
    (state: RootStore) => state.user
  );
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={gameStatus === "WIN"}
      onClose={() => dispatch(resetGameStatus())}
    >
      <div className="gameModal">
        <h3 className="game_heading green">🥳 YOU WON 🥳</h3>
        <p>Your Score: {Score}</p>
        <p>Time Taken: {60 - time}Secs</p>
        <button
          className="close_btn"
          onClick={() => dispatch(resetGameStatus())}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export function LossModal() {
  const { gameStatus, Score, time } = useSelector(
    (state: RootStore) => state.user
  );
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={gameStatus === "LOSS"}
      onClose={() => dispatch(resetGameStatus())}
    >
      <div className="gameModal">
        <h3 className="game_heading red">😞 YOU LOSS 😞</h3>
        <p>Your Score: {Score}</p>
        <p>Time Taken: {60 - time}Secs</p>
        <p>Better Luck Next Time</p>
        <button
          className="close_btn"
          onClick={() => dispatch(resetGameStatus())}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

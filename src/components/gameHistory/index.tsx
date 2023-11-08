import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import "./index.css";

export default function GameHistory() {
  const { gameHistorys } = useSelector((state: RootStore) => state.user);

  return (
    <div className="historyContainer">
      {gameHistorys.length === 0 ? (
        <div className="emtpy_board">
          <p>Play atleast one match to see the results</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Score</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {gameHistorys.map((history, idx) => {
              return (
                <tr key={idx} className={history.status === "WIN" ? "success" : "fail"} >
                  <td>{idx + 1}</td>
                  <td>{history.Score}</td>
                  <td>{history.timeTaken} Sec</td>
                  <td>{history.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

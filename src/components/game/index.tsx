import {
  createGrid,
  isConnectedCandies,
  updateCandies,
  copyGrid,
} from "../../utils/GameUtils";
import { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addScore ,startGame} from "../../redux/reducer";
import { RootStore } from "../../redux/store";

export default function Game() {
  const [grid, setGrid] = useState(createGrid());
  const dispatch = useDispatch();
  const {isGameStarted} = useSelector((state:RootStore)=>state.user)

  return (
    <div className="grid">
      {grid.map((arr, i) => {
        return arr.map((color, j) => {
          return (
            <div
              key={i * 10 + j}
              onClick={() => {
                if(!isGameStarted){
                  dispatch(startGame());
                }
                if (isConnectedCandies(grid, i, j)) {
                  let score = { value: 0 };
                  let updatedGrid = updateCandies(grid, i, j, color, score);
                  setGrid(copyGrid(updatedGrid));
                  dispatch(addScore(score.value));
                }
              }}
              className="gridCell"
              style={{ backgroundColor: color }}
            ></div>
          );
        });
      })}
    </div>
  );
}

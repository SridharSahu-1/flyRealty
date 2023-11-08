import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/store";
import { setTime } from "../../redux/reducer";
import "./index.css";

export default function Timer() {
  const { isGameStarted, time } = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval: number | undefined;
    if (isGameStarted) {
      interval = setInterval(() => {
        dispatch(setTime(time - 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, isGameStarted]);

  return <h2 className="timer">Time Left: {String(time).padStart(2, "0")}</h2>;
}

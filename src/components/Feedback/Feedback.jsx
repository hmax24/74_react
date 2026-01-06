import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback({onButtonClick }) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  return (
    <div className="feedback">
    <div className="feedback feedback-like">
    <div>{count}</div>
    <Button name="Like" onButtonClick={() => setCount((prev) => prev + 1)} />
    </div>
    <div className="feedback feedback-dislike">
    <div>{count2}</div>
    <Button name="Dislike" onButtonClick={() => setCount2((prev) => prev + 1)} />
    </div>
    <Button name="Reset" onButtonClick={() => { setCount2(0); setCount(0); }} />
    </div>
  );
}
export default Feedback;
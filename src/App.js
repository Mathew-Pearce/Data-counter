import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="Main">
      <div className="App">
        <Header />
        <Counter />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="h1">DATE COUNTER</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("27 june 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <button className="button" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <span className="resize"> Increment Step: {step} </span>
        <button className="button" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      <div className="container">
        <button
          className="button bottom"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <span className="resize"> Increment Days: {count} </span>
        <button className="button" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <span className="p">
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span className="p">{date.toDateString()}</span>
      <div>
        <button className="button reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </>
  );
}

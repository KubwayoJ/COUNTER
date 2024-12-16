import { useState, useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter(counter - 1);
    console.log("you are my pro");
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
    console.log("you are my pro");
  };

  return (
    <div className="h-screen justify-center items-center flex flex-row">
      <button
        className="bg-red-500 text-black rounded-lg p-3"
        onClick={handleDecrement}
      >
        -
      </button>
      <p className="p-3 text-black text-lg">{counter}</p>
      <button className="bg-blue-700 p-3 rounded-lg" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default App;

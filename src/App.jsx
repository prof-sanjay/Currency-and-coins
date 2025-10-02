import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState({});

  const countCurrency = () => {
    let amt = parseInt(amount);
    if (isNaN(amt) || amt <= 0) {
      alert("Please enter a valid positive amount.");
      return;
    }

    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let noteCounter = {};

    notes.forEach((note)=>{
      if (amt >= note) {
        noteCounter[note]=Math.floor(amt/note);
        amt%=note;
      }
    });

    setResult(noteCounter);
  };

  return (
    <div>
      <h2>Currency Counter</h2>

      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount"/>
      <button onClick={countCurrency}>Count</button>

      <h3>Breakdown:</h3>
      {Object.keys(result).length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {Object.entries(result).map(([note, count]) => (
            <li key={note}>₹{note}-{count}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;

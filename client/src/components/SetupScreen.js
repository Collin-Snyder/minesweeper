import React, { useState } from "react";

const SetupScreen = ({ startGame }) => {
  const [boardSize, setBoardSize] = useState(10);
  const [mineCount, setMineCount] = useState(10);

  const handleSizeChange = (e) => {
    setBoardSize(e.target.value);
  };

  const handleMineChange = (e) => {
    setMineCount(e.target.value);
  };

  return (
    <div className="setup">
      <div className="formContainer">
        <form className="setupForm" name="setup">
          <label htmlFor="size">Board Side Length: </label>
          <input
            type="number"
            name="size"
            id="size"
            min="10"
            max="50"
            value={boardSize}
            onChange={handleSizeChange}
          />
          <br></br>
          <label htmlFor="mines"># of Mines: </label>
          <input
            type="number"
            name="mines"
            id="mines"
            min="1"
            max={Math.floor((boardSize * boardSize) / 2)}
            value={mineCount}
            onChange={handleMineChange}
          />
          <br></br>
          <input type="submit" onClick={startGame} />
        </form>
      </div>
    </div>
  );
};

export default SetupScreen;

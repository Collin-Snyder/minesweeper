import React, { memo } from "react";
import Tile from "./Tile";

const Square = memo(
  ({
    id,
    mine,
    borderMines,
    visible,
    flagged,
    boardSize,
    handleClick,
    handleFlag,
  }) => {
    return (
      <div
        className={`square ${mine ? "mine" : ""} ${visible ? "visible" : ""}`}
        id={id}
        onClick={handleClick}
        onContextMenu={handleFlag}
        style={{
          width: `${boardSize > 20 ? 40 / boardSize : 35 / boardSize}vw`,
          height: `${boardSize > 20 ? 40 / boardSize : 35 / boardSize}vw`,
          // fontSize: `${boardSize > 20 ? 35 / boardSize : 30 / boardSize}vw`
        }}
      >
        {visible ? (
          <h3 className={mine ? "mine" : ""}>
            {mine ? "X" : borderMines ? borderMines : ""}
          </h3>
        ) : flagged ? (
          <>
            <Tile type="cover" />
            <Tile type="flag" boardSize={boardSize}/>
          </>
        ) : (
          <Tile type="cover" />
        )}
      </div>
    );
  }
);

export default Square;

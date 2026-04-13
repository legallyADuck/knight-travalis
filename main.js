class Chessboard {
  constructor() {
    this.matrix = [];
  }

  create() {
    for (let i = 0; i < 8; i++) {
      let column = [];
      for (let j = 0; j < 8; j++) column.push(0);
      this.matrix.push(column);
    }

    return this.matrix;
  }
}

class Knight {
  knightMoves(position, goal) {
    let queue = [];
    queue.push(this.possibleMoves(position));

    console.log("queue:", queue);
    // while () {}
  }

  possibleMoves(currentPosition, lastMove) {
    let lastMoves = new Map();
    const x = currentPosition[0];
    const y = currentPosition[1];
    if (lastMove) {
      lastMoves.set
    }


    let knight = {
      steps: 0,
      possibleMoves: [
        // dx1 dy1
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x + 2, y - 1],
        [x + 2, y + 1],
        // dx2 dy2
        [x - 1, y - 2],
        [x - 1, y + 2],
        [x + 1, y - 2],
        [x + 1, y + 2],
      ],
    };

    knight.possibleMoves = knight.possibleMoves.filter((move) => {
      let x = move[0];
      let y = move[1];
      if (lastMoves.includes(move)) return;
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return true;
    });

    return knight;
  }
}

let chessboard = new Chessboard();
chessboard.create();

let knight = new Knight();
knight.knightMoves([3, 2]);

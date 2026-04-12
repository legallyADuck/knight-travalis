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
    queue = []
    queue.push(this.possibleMoves(position))

    while (!shortestFound) {
      
    }
  }

  possibleMoves(currentPosition) {
    x = currentPosition[0];
    y = currentPosition[1];
    return [
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
    ];
  }
}

let chessboard = new Chessboard();
chessboard.create();

console.log(chessboard.matrix);

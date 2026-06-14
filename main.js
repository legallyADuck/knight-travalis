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
  static lineLength(line) {
    return line.reduce((acc, current) => acc + 1, -1);
  }

  knightMoves(position, goal) {
    let shortestLine = {
      moves: 0,
      line: [],
      isFound: false,
    };

    let initialMove = this.possibleMoves(position);
    initialMove.history[0] = position;

    let queue = [initialMove];

    while (shortestLine.isFound === false) {
      queue[0].possibleMoves.forEach((move) => {
        const newLine = this.possibleMoves(move); // each moves creates at maximum 8 new line

        // save history of moves done before
        const parentLine = queue[0].history;
        newnewLine.history.unshift(parentLine);
        newLine.history = newLine.history.flat(1); // add the parent history to the new line
        newLine.history.push(move);

        queue.push(newLine);

        // check if the line is the shortest
        if (JSON.stringify(move) === JSON.stringify(goal)) {
          shortestLine.isFound = true;
          shortestLine.line = line.history;
          shortestLine.moves = Knight.lineLength(line.history);
        }
      });

      queue.shift();
    }

    return shortestLine;
  }

  possibleMoves(currentPosition) {
    // recieves an array [x, y]
    const x = currentPosition[0];
    const y = currentPosition[1];
    let knight = {
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
      history: [],
    };

    knight.possibleMoves = knight.possibleMoves.filter((move) => {
      let x = move[0];
      let y = move[1];
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return true;
    });

    return knight;
  }
}

let chessboard = new Chessboard();
chessboard.create();

let knight = new Knight();
console.log(knight.knightMoves([0, 0], [7, 7]));

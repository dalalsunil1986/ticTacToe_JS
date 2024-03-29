
  function startGame() {

    for (var i = 1; i <=9; i++) {
      clearBox(i);
    }

    document.turn = 'x';
    document.winner = null;
    setMessage(document.turn + ' Gets to start.')
  }

  function setMessage(msg) {
    document.getElementById("message").innerText = msg;
  }

  function nextMove(square) {
    if (document.winner != null) {
      setMessage(document.turn + " already won the game!")
    }
    else if (square.innerText === "") {
      square.innerText = document.turn;
      switchTurn();
    }
    else {
      setMessage("That square is alread in use, idiot!")
    }
  }

  function switchTurn() {
    if (checkForWinner(document.turn)) {
      setMessage("Congradulations player " + document.turn + " you wone the stupid game.")
      document.winner = document.turn;
    }
    else if (document.turn === 'x') {
      document.turn = 'o';
      setMessage("It's " + document.turn + "'s turn." )
    }
    else {
      document.turn = 'x';
      setMessage("It's " + document.turn + "'s turn." )
    }
  }

  function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
       checkRow(4, 5, 6, move) ||
       checkRow(7, 8, 9, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(3, 6, 9, move) ||
       checkRow(3, 5, 7, move) ||
       checkRow(1, 5, 9, move)) {

       result = true;
    }
    return result;
  }

  function checkRow(a, b, c, move) {
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
      result = true;
    }
    return result;
  }

  function getBox(number) {
    return document.getElementById("s" + number).innerText;
  }

  function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
  }

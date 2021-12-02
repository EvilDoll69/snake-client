// const {connect} = require("./client")

const { moves } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 
  stdin.on("data", handleUserInput); 
  return stdin;
};


const handleUserInput = function (key) {

  switch (key) {
    case "\u0003":
      process.exit(0);
      break;
    case "w":
      connection.write(`Move:${moves.moveUp}`);
      break;
    case "a":
      connection.write(`Move:${moves.moveLeft}`);
      break;
    case "s":
      connection.write(`Move:${moves.moveDown}`);
      break;
    case "d":
      connection.write(`Move:${moves.moveRight}`);
      break;
    case "q":
      connection.write(`Say: WOW`);
      break;
  }

};

// setupInput(connection);


module.exports = {setupInput};
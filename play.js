const {connect} = require("./client");
const {setupInput} = require("./input.js");

const net = require("net"); //You used Node's net library 
//(specifically, the createConnection function) to create an object named conn in the code.
// establishes a connection with the game server

// setup interface to handle user input from stdin



console.log("Connecting ...");
connect();

setupInput();

const {connect} = require("./client");

const net = require("net"); //You used Node's net library 
//(specifically, the createConnection function) to create an object named conn in the code.

// establishes a connection with the game server




console.log("Connecting ...");
connect();


const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () { //The conn object that Node returned to you represents the connection that you have with the server.
  const conn = net.createConnection({ //The conn object is full of useful methods and properties that can now be used to interact with the server!
    host: IP, // IP address here,
    port: PORT // PORT number here,
    
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // conn.on("connect", () => {
  //   console.log("Move: up");    
  // });

 
 
  // conn.on('data', (data) => { //receiving from the server
  //   console.log(data);
  // });  

  conn.on('connect', () => {
    console.log("Success connect to server")
    conn.write(myName);
  });

  return conn;
};

module.exports = {connect};
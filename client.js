
const net = require("net")

const connect = function () { //The conn object that Node returned to you represents the connection that you have with the server.
  const conn = net.createConnection({ //The conn object is full of useful methods and properties that can now be used to interact with the server!
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("We are connected!")
    
  });
 
  conn.on('data', (data) => { //receiving from the server
    console.log(data);
  });  

  return conn;
};

module.exports = {connect};

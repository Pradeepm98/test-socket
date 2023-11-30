const WebSocket = require('ws');

// Create a WebSocket server on port 3000
const server = new WebSocket.Server({ port: 3000 });

// Event listener for when a client connects to the server
server.on('connection', (socket) => {
  console.log('Client connected');

  // Event listener for when a message is received from a client
  socket.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Echo the received message back to the client
    socket.send(`You said: ${message}`);
  });

  // Event listener for when a client disconnects
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on port 3000');

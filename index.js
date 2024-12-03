const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const clients = [];

// Handle connections and messages
io.on("connection", (socket) => {
  console.log("a user connected with id: ", socket.id);
  clients.push(socket);

  // Validate and broadcast messages
  socket.on("chat message", ({ input, handle }) => {
    if (!input || !handle) {
      socket.emit("Error, Please enter valid handle and message");
      return;
    }
    console.log(`message: ${input} \nhandle: ${handle}`);

    // Broadcast to all connected clients
    io.emit("chat message", {
      message: input,
      handle: handle,
    });
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    clients.splice(clients.indexOf(socket), 1);
    console.log(`user: ${socket.id} disconnected`); 
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000...");
});

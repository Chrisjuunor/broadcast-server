var socket = io.connect("http://localhost:3000");

var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");
var handle = document.getElementById("handle");

//To server
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var handleValue = handle.value.trim();
  var inputValue = input.value.trim();
  if (input.value && handle.value) {
    socket.emit("chat message", {
      input: inputValue,
      handle: handleValue,
    });
    input.value = "";
  }
});

//From server
socket.on("chat message", function (data) {
  var item = document.createElement("li");
  item.innerHTML = `<strong>${data.handle}</strong>: ${data.message}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

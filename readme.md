# Broadcast Server

The goal of this project is to implement a broadcast server that makes use of websockets to connect and send messages accross one or more clients.
The broadcast server implements real time communication between clients and server.
The server does the following:

- listens for incoming client connections
- stores all connected clients in an array
- recieves messages from clients and broadcasts them to all other connect clients
- logs to the user when a client disconnects.

## Guide:

- [Broadcast Server](#broadcast-server)
  - [Guide:](#guide)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Contact](#contact)
  - [Project page URL](#project-page-url)

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Chrisjuunor/broadcast-server.git
   ```

2. Install dependencies
   '''bash
   npm install
   '''

## Usage

To start using the program follow these steps:

1. start the server: run this command on your console
   '''bash
   npm start index.js
   '''
   OR
   '''bash
   npm run watch
   '''
   to run it in watch mode (using nodemon)

2. Open a new tab in your browser, enter '''bash http://localhost:3000 ''' and hit enter to start up a client.
3. You can open multiple tabs with the same search prompt to connect multiple clients
4. Without doing any other thing, you will get notified on your console that a use has connected with some id
5. At this point, you can now send messages from any client and recieve them in the server as well as the other clients.

## Contributing

I think you're very smart and as such, you're welcome to make any changes or contributions you think would benefit this project. Just follow the steps below:

1. Fork the repository
2. create a branch :' git checkout -b <branch_name> '
3. make your changes/contribution
4. push your branch: 'git push origin <branch_name> '
5. create a pull request

Here are a few features to work on:

- [ ] implement a client that can connect to the server and send messages
- [ ] the client connects to the server by way of the commandline
- [ ] the server starts by way of the commandline

## Contact

If you have any comments to make, you can reach out at - chinonsoigweic@gmail.com

## Project page URL

https://roadmap.sh/projects/broadcast-server

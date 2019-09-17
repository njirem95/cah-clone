"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = require("socket.io");
const DisconnectEvent_1 = require("./events/DisconnectEvent");
const GameServerHandler_1 = require("./networking/GameServerHandler");
// Create a map with all usable events during the game.
const events = new Map();
events.set("disconnect", new DisconnectEvent_1.DisconnectEvent);
// Use the network
const socketIO = socketio.listen(1337);
const connection = new GameServerHandler_1.GameServerHandler(socketIO, events);
connection.handle();
//# sourceMappingURL=app.js.map
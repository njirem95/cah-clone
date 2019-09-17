import * as socketio from "socket.io";
import { Event } from "./events/Event";
import { DisconnectEvent } from "./events/DisconnectEvent";
import { Connection } from "./networking/Connection";
import { GameServerHandler } from "./networking/GameServerHandler";

// Create a map with all usable events during the game.
const events: Map<string, Event> = new Map<string, Event>();
events.set("disconnect", new DisconnectEvent);

// Use the network
const socketIO: socketio.Server = socketio.listen(1337);
const connection: Connection = new GameServerHandler(socketIO, events);

connection.handle();
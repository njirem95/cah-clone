import { Connection } from "./Connection";
import * as socketio from "socket.io";
import { Event } from "../events/Event";

export class GameServerHandler implements Connection {
    constructor(
        private _server: socketio.Server,
        private _events: Map<string, Event>
    ) { }

    public handle(): void {
        this._server.on('connection', (session: socketio.Socket) => {
            console.log("A user connected");

            this._events.forEach(function(event: Event, id: string) { 
                session.on(id, function(data) {
                     event.handle(session, data);
                });
            });
        });
    }
}
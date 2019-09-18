import { Event } from "./Event";
import * as socketio from "socket.io";

export class DisconnectEvent implements Event {
    public handle(session: socketio.Socket, data?: any): void {
        console.log(`User ${session.handshake.address} disconnected.`);
    }
}
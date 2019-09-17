import { Event } from "./Event";

export class DisconnectEvent implements Event {
    public handle(data?: any): void {
        console.log("A user disconnected");
    }
}
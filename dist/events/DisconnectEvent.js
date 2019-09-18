"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisconnectEvent {
    handle(session, data) {
        console.log(`User ${session.handshake.address} disconnected.`);
    }
}
exports.DisconnectEvent = DisconnectEvent;
//# sourceMappingURL=DisconnectEvent.js.map
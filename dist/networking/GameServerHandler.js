"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameServerHandler {
    constructor(_server, _events) {
        this._server = _server;
        this._events = _events;
    }
    handle() {
        this._server.on('connection', (session) => {
            console.log("A user connected");
            this._events.forEach(function (event, id) {
                session.on(id, function (data) {
                    event.handle(data);
                });
            });
        });
    }
}
exports.GameServerHandler = GameServerHandler;
//# sourceMappingURL=GameServerHandler.js.map
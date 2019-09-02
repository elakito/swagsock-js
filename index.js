var global = (function() { return this; })();

if (typeof global.window === 'undefined') {
    // create a custom window object to emulate the normal browser window
    var window = {navigator:{userAgent:"swagsock.js"},document:{},location:{},JSON:JSON};

    window.WebSocket = require("ws");
    window.uuidv4 = require("uuid/v4");
    global.window = window;

    global.WebSocket = window.WebSocket;
    global.uuidv4 = window.uuidv4;
    global.navigator = window.navigator;
    global.document = window.document;
}

module.exports = require('./lib/swagsock');

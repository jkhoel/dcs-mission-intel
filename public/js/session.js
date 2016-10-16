
/**
 * 
 * @param {MissionIntelApp.GUI} gui
 * @returns {MissionIntelApp.Session}
 */
MissionIntelApp.Session = function (gui) {
    
    this.connect = function () {

        var wsURL = "";
        if (window.location.protocol === "https:")
            wsURL += "wss://";
        else
            wsURL += "ws://";
        wsURL += window.location.hostname;
        wsURL += ":" + 8081;
        wsURL += window.location.pathname;

        console.log("Connecting to \"" + wsURL + "\"");
        var websocket = new WebSocket(wsURL);
        websocket.onmessage = this.onmessage;

    };

    this.onmessage = function (evt) {

        var splitIndex = evt.data.indexOf(MissionIntelApp.comm.misc.SPLIT_SMYBOL);
        
        var command = evt.data.substr(0, splitIndex);
        var data = evt.data.substr(splitIndex);
        
        console.log();

        switch (command) {
            
            case MissionIntelApp.comm.commands.ADD_MARKER:
                var marker = JSON.parse(data);
                gui.addMarker(marker);
                break;
            case MissionIntelApp.comm.commands.CLEAR_MARKERS:
                gui.clearMarkers();
                break;
                
        }

    };

};

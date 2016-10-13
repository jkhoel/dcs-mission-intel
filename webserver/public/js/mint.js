var MissionIntelApp = function() {
    
    var gui = new MissionIntelApp.GUI();
    gui.initialize();                     // This is needed?
    
    /////////////////////////////////////////////////////////////////
    // MARKER TEST - This should probably be moved to add marker later
    var newMarker = new MissionIntelApp.Marker(
            // Regular Fixed-wing Marker: SFAPMFA-----
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Friend,
            MissionIntelApp.Marker.BattleDim.Air,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.MilitaryFixedWingAttack_strike,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.None,
            MissionIntelApp.Marker.x = 5000,
            MissionIntelApp.Marker.y = 5000
            // ADD INTEL SOURCE!!
    );

    console.log("newMarker = "+newMarker.markerHash());
    
    MS.setStandard("APP6");
    var markerCanvasElement = new MS.symbol(newMarker.markerHash(), {size: 90, }).getMarker().asCanvas();
    /*var markerCanvasElement = new MS.symbol(newMarker.markerHash());
    markerCanvasElement.size = 90;
    */
    markerCanvasElement.className = "AWACS";    // Bytt ut "awacs" med intelSource
    
    console.log(markerCanvasElement);
    
};
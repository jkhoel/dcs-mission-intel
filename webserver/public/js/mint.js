var MissionIntelApp = function() {
    
    var gui = new MissionIntelApp.GUI();
    gui.initialize();                     // This is needed?
    
    /////////////////////////////////////////////////////////////////
    // MARKER TEST - This should probably be moved to add marker later
    MS.setStandard("APP6");
    
    var newMarker = new MissionIntelApp.Marker(
            // Regular Fixed-wing Marker: SFAPMFA-----
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Friend,
            MissionIntelApp.Marker.BattleDim.Air,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.MilitaryFixedWingAttack_strike,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.None,
            MissionIntelApp.Marker.Source.AWACS,
            MissionIntelApp.Marker.x = 1000,
            MissionIntelApp.Marker.y = 500
            // ADD INTEL SOURCE!!
    );
    
    var newMarker2 = new MissionIntelApp.Marker(
            // Regular Fixed-wing Marker: SFAPMFA-----
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Hostile,
            MissionIntelApp.Marker.BattleDim.Air,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.MilitaryFixedWingAttack_strike,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.None,
            MissionIntelApp.Marker.Source.AWACS,
            MissionIntelApp.Marker.x = 1000,
            MissionIntelApp.Marker.y = 600
            // ADD INTEL SOURCE!!
    );
    
    // TEST CODE FOR ADDING MARKERS
    var markerElement = new MS.symbol(newMarker.markerHash(), {size: 50}).getMarker().asCanvas();
    markerElement.className = newMarker.source;
    markerElement.style = "position:absolute; left:"+newMarker.x+"px; top:"+newMarker.y+"px;";
    console.log("x:"+newMarker.x+" y:"+newMarker.y);
    
    // Adds element to div. Probably needs to be added as to a <ul> as <li>'s grouped by source
    document.getElementById("div-markers").appendChild(markerElement);
    
    // The actual way to add a marker
    MissionIntelApp.GUI.addMarker(newMarker2);      // DOES NOT WORK FOR SOME REASON...!
};
var MissionIntelApp = function() {
    
    var gui = new MissionIntelApp.GUI();
    gui.initialize();                     // This is needed?
    
    /////////////////////////////////////////////////////////////////
    // MARKER TEST - This should probably be moved to add marker later
    
    
    var newMarker = new MissionIntelApp.Marker(
            // Regular Fixed-wing Marker BLUEFOR: SFAPMFA-----
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
    );
    
    
    
    var newMarker2 = new MissionIntelApp.Marker(
            // Regular Armoured Hostile: SHGPUCA----C
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Hostile,
            MissionIntelApp.Marker.BattleDim.Ground,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.UnitCombatArmor,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.Section,
            MissionIntelApp.Marker.Source.JSTAR,
            MissionIntelApp.Marker.x = 1200,
            MissionIntelApp.Marker.y = 600
    );
    
    gui.addMarker(newMarker);
    gui.addMarker(newMarker2);

};
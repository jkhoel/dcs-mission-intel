var MissionIntelApp = function () {

    var gui = new MissionIntelApp.GUI();
    gui.initialize();

    // var session = new MissionIntelApp.Session(gui);
    // session.initialize();

    /////////////////////////////////////////////////////////////////
    // MARKER TEST OBJECTS

    var newMarker = new MissionIntelApp.Marker(
            // Regular Fixed-wing Marker BLUEFOR: SFAPMFA-----
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Friend,
            MissionIntelApp.Marker.BattleDim.Ground,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.UnitCombatInfantry,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.None,
            MissionIntelApp.Marker.Source.AWACS,
            MissionIntelApp.Marker.x = 400,
            MissionIntelApp.Marker.y = 200
            );

    var newMarker2 = new MissionIntelApp.Marker(
            // Regular Armoured Hostile: SFGPUCA----C
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Friend,
            MissionIntelApp.Marker.BattleDim.Ground,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.UnitCombatArmor,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.Company,
            MissionIntelApp.Marker.Source.JSTAR,
            MissionIntelApp.Marker.x = 600,
            MissionIntelApp.Marker.y = 200
            );

    var newMarker3 = new MissionIntelApp.Marker(
            // Regular Armoured Hostile: SFGPUCATH--C
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Friend,
            MissionIntelApp.Marker.BattleDim.Air,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.MilitaryFixedWing,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.Section,
            MissionIntelApp.Marker.Source.GEOINT,
            MissionIntelApp.Marker.x = 800,
            MissionIntelApp.Marker.y = 200
            );

    var newMarker4 = new MissionIntelApp.Marker(
            // Regular Armoured Hostile: SHGPUCAT---C
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Friend,
            MissionIntelApp.Marker.BattleDim.Air,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.MilitaryRotaryWing,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.None,
            MissionIntelApp.Marker.Source.GEOINT,
            MissionIntelApp.Marker.x = 1000,
            MissionIntelApp.Marker.y = 200
            );

    var newMarker5 = new MissionIntelApp.Marker(
            // Regular Armoured Hostile: SHGPUCAT---C
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Friend,
            MissionIntelApp.Marker.BattleDim.Ground,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.UnitCombatAirDefence,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.None,
            MissionIntelApp.Marker.Source.JSTAR,
            MissionIntelApp.Marker.x = 1200,
            MissionIntelApp.Marker.y = 200
            );

    var newMarker6 = new MissionIntelApp.Marker(
            // Regular Armoured Hostile: SHGPUCAT---C
            MissionIntelApp.Marker.CodingScheme.Warfighting,
            MissionIntelApp.Marker.Affiliation.Hostile,
            MissionIntelApp.Marker.BattleDim.SeaSurface,
            MissionIntelApp.Marker.Status.Present,
            MissionIntelApp.Marker.FunctionID.CombatantLineBattleship,
            MissionIntelApp.Marker.Modifier1.None,
            MissionIntelApp.Marker.Modifier2.None,
            MissionIntelApp.Marker.Source.SIGINT,
            MissionIntelApp.Marker.x = 1400,
            MissionIntelApp.Marker.y = 200
            );

    gui.addMarker(newMarker);
    gui.addMarker(newMarker2);
    gui.addMarker(newMarker3);
    gui.addMarker(newMarker4);
    gui.addMarker(newMarker5);
    gui.addMarker(newMarker6);

    // TEST CODE: new add marker function
    var iconSize = {"C":15,"D":20,"E":25,"F":30,"G":35,"H":40,"I":45};

    //var feature = new ol.Feature({});

    var sidc = MissionIntelApp.Marker.getHash(newMarker6);

    //var sidc = "SHGPUCAT---C";
    // var milsym = new MS.symbol(sidc, {
    //     size: iconSize[sidc.charAt(11)],
    // });
    //
    // console.log(sidc);
    // console.log(sidc.charAt(11));
    // console.log(iconSize[sidc.charAt(11)]);

    // END OF TEST CODE
    console.log("--> MissionIntelApp FINISHED");
    console.log("//////// END OF CODE ///////");


};

MissionIntelApp.Marker = function (codingScheme, affiliation, battleDimension, status, functionID, modifier1, modifier2, source, x, y) {
    this.codingScheme = codingScheme;   // Allways 'S'
    this.affiliation = affiliation;
    this.battleDim = battleDimension;
    this.status = status;
    this.functionID = functionID;
    this.modifier1 = modifier1;         // HQ, Task Force etc..
    this.modifier2 = modifier2;         // Squad, Platoon etc..
    this.source = source;               // Intel source
    this.x = x;
    this.y = y;
};

/**
 * @type {MissionIntelApp.Marker}
 */
MissionIntelApp.Marker.getHash = function (marker) {
    return "" + marker.codingScheme + marker.affiliation + marker.battleDim + marker.status + marker.functionID + marker.modifier1 + marker.modifier2;
};

MissionIntelApp.Marker.CodingScheme = {
    Warfighting: "S"
};

MissionIntelApp.Marker.Affiliation = {
    Pending: "P",
    Unknown: "U",
    AssumedFriendly: "A",
    Friend: "F",
    Neutral: "N",
    Suspect: "S",
    Hostile: "H",
    Joker: "J",
    Faker: "K",
    None: "O"
};

MissionIntelApp.Marker.BattleDim = {
    Space: "P",
    Air: "A",
    Ground: "G",
    SeaSurface: "S",
    SeaSubSurface: "U",
    SOF: "F"
};

MissionIntelApp.Marker.Status = {
    None: "-",
    Present: "P",
    Planned: "A",
    Assumed: "A"
};

MissionIntelApp.Marker.Modifier1 = {
    None: "-",
    HQ: "A",
    TaskForceHQ: "B",
    FeintDummyHQ: "C",
    FeintDummyTaskForceHQ: "D",
    TaskForce: "E",
    FeintDummy: "F",
    FeintDummyTaskForce: "G",
    Installation: "H",
    Mobility: "M",
    TowedArray: "N"
};

MissionIntelApp.Marker.Modifier2 = {
    None: "-",
    Team: "A",
    Crew: "A",
    Squad: "B",
    Section: "C",
    Platoon: "D",
    Detachment: "D",
    Company: "E",
    Battery: "E",
    Troop: "E",
    Battalion: "F",
    Squadron: "F",
    Regiment: "G",
    Group: "G",
    Brigade: "H",
    Division: "I",
    CorpsO: "J",
    MEF: "J",
    Army: "K",
    ArmyGroup: "L",
    Front: "L",
    Region: "M",
    Command: "N"
};

MissionIntelApp.Marker.Source = {
    AWACS: "AWACS",
    JSTAR: "JSTAR",
    HUMINT: "HUMINT",
    GEOINT: "GEOINT",
    SIGINT: "SIGINT"
            // MASINT?
};
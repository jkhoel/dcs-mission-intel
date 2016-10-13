function DCSUnit() {
    this.x = 0;
    this.z = 0;
    this.type = DCSUnit.types.TANK;
    this.affiliation = "BLUEFOR";               // UNKNOWN, BLUEFOR, NEUTRAL, OPFOR
}

// TODO: Add unit types
DCSUnit.types = {
    TANK: "TANK",
    IFV: "IFV"
};
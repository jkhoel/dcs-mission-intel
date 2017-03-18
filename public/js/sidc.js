// class SIDC {

//     static define(affiliation, battleDimension, status, functionID, modifier1, modifier2) {

//         let sidc = new SIDC();
//         sidc.codingScheme       = "S";
//         sidc.affiliation        = affiliation;
//         sidc.battleDimension    = battleDimension;
//         sidc.status             = status;
//         sidc.functionID         = functionID;
//         sidc.mod1       		= modifier1;
//         sidc.mod2           	= size;
//         return sidc;
//     }

//     static assign(collection) {
//     	[].forEach.call(collection, function(col) {
//     		// find out what unit type this is and define a SIDC. Should be able to use col.type since this function is called on a collection of the Unit() class
//     		if(col.type == 'KA-50') {
//     			unitSIDC = SIDC.define('U','A','-','-','-','-','-','-','-','-','-');
//     		}
//     		else if (col.type == 'A-10C') {
//     			unitSIDC = SIDC.define('U','A','-','-','-','-','-','-','-','-','-');
//     		}
//     	});
//     	return unitSIDC;
//     }

//     // Total length of the SIDC is 12 digits
//     constructor() {
//     	this.codingScheme 		= "S"; 	// Digit 1  - S
//         this.affiliation        = "U"; 	// Digit 2	- U
//         this.battleDimension    = "A"; 	// Digit 3	- A
//         this.status             = "-";	// Digit 4	
//         this.functionID         = "-";	// Digit 5-10
//         this.modifier1          = "-";	// Digit 11
//         this.size          		= "-";	// Digit 12
//     }
// }

let SIDC = [
	{
		key: 'default',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	// FIXED WING
	{
		key: 'A-10A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'A-10C',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'A-50',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'An-26B',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'An-30M',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'B-1B',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'B-52H',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Bf-109K-4',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'C-101CC',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'C-101EB',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'C-130',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'C-17A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'E-2C',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'E-3A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-14A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-15C',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-15E',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-16A MLU',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-16A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-16C bl.50',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-16C bl.52d',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-5E-3',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-5E',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'F-86F Sabre',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'FA-18C',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'FW-190D9',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Hawk',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},	{
		key: 'IL-76MD',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'IL-78M',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'KC-135',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'L-39C',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'L-39ZA',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'M-2000C',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-15bis',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-21Bis',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-23MLD',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-25PD',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-25RBT',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-27K',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-29A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-29G',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-29S',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'MiG-31',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Mirage 2000-5',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'P-51D',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'RQ-1A Predator',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'S-3B Tanker',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'S-3B',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-17M4',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-24M',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-24MR',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-25',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-25T',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-25TM',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-27',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-30',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-33',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Su-34',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'TF-51D',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Tornado GR4',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Tornado IDS',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Tu-142',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Tu-160',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Tu-22M3',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Tu-95MS',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Yak-40',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	// ROTARY WING
	{
		key: 'AH-1W',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'AH-64A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'AH-64D',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'CH-47D',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'CH-53E',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Ka-27',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Ka-50',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Mi-24V',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Mi-26',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Mi-28N',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'Mi-8MT',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'OH-58D',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'SA342M',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},	
	{
		key: 'SH-60B',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'UH-1H',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	{
		key: 'UH-60A',
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	}
];

module.exports = SIDC;

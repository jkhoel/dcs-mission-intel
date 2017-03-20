// class SIDC {

//     static define(affiliation, battleDimension, status, functionID, modifier1, modifier2) {

//         let sidc = new SIDC();
//         sidc.codingScheme       = 'S';
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
//     	this.codingScheme 		= 'S'; 	// Digit 1  - S
//         this.affiliation        = 'U'; 	// Digit 2	- U
//         this.battleDimension    = 'A'; 	// Digit 3	- A
//         this.status             = '-';	// Digit 4	
//         this.functionID         = '-';	// Digit 5-10
//         this.modifier1          = '-';	// Digit 11
//         this.size          		= '-';	// Digit 12
//     }
// }

// let table = {
//     'KA-50': {
//         battleDimension: 'A',
//         // etc
//     },
//     'A-10C': {
//         battleDimension: 'A',
//         // etc
//     },    
// };

let SIDC = {
	'default' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	// FIXED WING
	'AJS37' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'A-10A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'A-10C' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'A-50' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'An-26B' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'An-30M' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'B-1B' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'B-52H' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Bf-109K-4' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'C-101CC' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'C-101EB' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'C-130' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'C-17A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'E-2C' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'E-3A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-14A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-15C' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-15E' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-16A MLU' : {
	codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-16A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-16C bl.50' : {
	codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-16C bl.52d' : {
	codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-5E-3' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-5E' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'F-86F Sabre' : {
	codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'FA-18C' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'FW-190D9' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Hawk' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},	
	'IL-76MD' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'IL-78M' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'KC-135' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'L-39C' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'L-39ZA' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'M-2000C' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-15bis' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-21Bis' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-23MLD' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-25PD' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-25RBT' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-27K' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-29A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-29G' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-29S' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MiG-31' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Mirage 2000-5' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'P-51D' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'RQ-1A Predator' : {
	codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'S-3B Tanker' : {
	codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'S-3B' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-17M4' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-24M' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-24MR' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-25' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-25T' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-25TM' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-27' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-30' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-33' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Su-34' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'TF-51D' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Tornado GR4' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Tornado IDS' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Tu-142' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Tu-160' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Tu-22M3' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Tu-95MS' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Yak-40' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	// ROTARY WING
	'AH-1W' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'AH-64A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'AH-64D' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'CH-47D' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'CH-53E' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Ka-27' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Ka-50' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Mi-24V' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Mi-26' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Mi-28N' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Mi-8MT' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'OH-58D' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'SA342M' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},	'SH-60B' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'UH-1H' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'UH-60A' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'A',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	// VEHICLES : IFVs
	'AAV7' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'BMD-1' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'BMP-1' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'BMP-2' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'BMP-3' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Boman' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'BRDM-2' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'BTR-80' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'BTR_D' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Bunker' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Cobra' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'LAV-25' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'M1043 HMMWV Armament' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'M1045 HMMWV TOW' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'M1126 Stryker ICV' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'M-113' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'M1134 Stryker ATGM' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'M-2 Bradley' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Marder' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MCV-80' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'MTLB' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Paratrooper RPG-16' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Paratrooper AKS-74' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Sandbox' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Soldier AK' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Infantry AK' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Soldier M249' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Soldier M4' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Soldier M4 GRG' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'Soldier RPG' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
	'TPZ' : {
		codingScheme : 'S',
		affiliation: 'U',
		battleDimension: 'G',
		status: '-',
		functionID: '-----',
		modifier1: '-',
		modifier2: '-'
	},
};


module.exports = SIDC;

export const villesData = {
"Winnipeg": {nom: "Winnipeg", x: 234, y: 310, port: false},
"Mexico": {nom: "Mexico", x: 184, y: 565, port: false},
"Moskva": {nom: "Moskva", x: 1030, y: 261, port: false},
"Tehran": {nom: "Tehran", x: 1105, y: 444, port: false},
"Djibouti": {nom: "Djibouti", x: 1061, y: 616, port: false},
"Lahore": {nom: "Lahore", x: 1263, y: 433, port: false},
"Novosibirsk": {nom: "Novosibirsk", x: 1291, y: 271, port: false},
"Yakutsk": {nom: "Yakutsk", x: 1483, y: 179, port: false},
"Beijing": {nom: "Beijing", x: 1478, y: 378, port: false},
"Port-aux-Francais": {nom: "Port-aux-Francais", x: 1225, y: 979, port: false},
"Cambridge Bay": {nom: "Cambridge Bay", x: 337, y: 83, port: true},
"Vancouver": {nom: "Vancouver", x: 84, y: 330, port: true},
"New York": {nom: "New York", x: 369, y: 387, port: true},
"Los Angeles": {nom: "Los Angeles", x: 88, y: 440, port: true},
"Miami": {nom: "Miami", x: 306, y: 524, port: true},
"Caracas": {nom: "Caracas", x: 382, y: 626, port: true},
"Lima": {nom: "Lima", x: 322, y: 771, port: true},
"Rio de Janeiro": {nom: "Rio de Janeiro", x: 533, y: 835, port: true},
"Valparaiso": {nom: "Valparaiso", x: 362, y: 917, port: true},
"Buenos Aires": {nom: "Buenos Aires", x: 472, y: 918, port: true},
"Reykjavik": {nom: "Reykjavik", x: 692, y: 181, port: true},
"Edinburgh": {nom: "Edinburgh", x: 769, y: 271, port: true},
"Murmansk": {nom: "Murmansk", x: 957, y: 128, port: true},
"Hamburg": {nom: "Hamburg", x: 873, y: 287, port: true},
"Marseille": {nom: "Marseille", x: 808, y: 366, port: true},
"Casablanca": {nom: "Casablanca", x: 755, y: 458, port: true},
"Athina": {nom: "Athina", x: 941, y: 409, port: true},
"Al-Qahira": {nom: "Al-Qahira", x: 1005, y: 481, port: true},
"Lagos": {nom: "Lagos", x: 830, y: 646, port: true},
"Luanda": {nom: "Luanda", x: 886, y: 735, port: true},
"Dar Es Salaam": {nom: "Dar Es Salaam", x: 1048, y: 714, port: true},
"Toamasina": {nom: "Toamasina", x: 1104, y: 800, port: true},
"Cape Town": {nom: "Cape Town", x: 913, y: 903, port: true},
"Mumbai": {nom: "Mumbai", x: 1255, y: 549, port: true},
"Tiksi": {nom: "Tiksi", x: 1413, y: 92, port: true},
"Hong Kong": {nom: "Hong Kong", x: 1504, y: 519, port: true},
"Bangkok": {nom: "Bangkok", x: 1435, y: 592, port: true},
"Jakarta": {nom: "Jakarta", x: 1474, y: 704, port: true},
"Manila": {nom: "Manila", x: 1572, y: 578, port: true},
"Tokyo": {nom: "Tokyo", x: 1641, y: 414, port: true},
"Petropavlovsk": {nom: "Petropavlovsk", x: 1671, y: 275, port: true},
"Anchorage": {nom: "Anchorage", x: 1854, y: 223, port: true},
"Honolulu": {nom: "Honolulu", x: 1856, y: 571, port: true},
"Port Moresby": {nom: "Port Moresby", x: 1731, y: 716, port: true},
"Darwin": {nom: "Darwin", x: 1629, y: 752, port: true},
"Perth": {nom: "Perth", x: 1530, y: 887, port: true},
"Sydney": {nom: "Sydney", x: 1700, y: 912, port: true},
"Christchurch": {nom: "Christchurch", x: 1806, y: 960, port: true},
};

export const routesData = {
"R1": {nom: "R1", ville1: "Al-Qahira", ville2: "Athina", couleur: "vert", type: "bateau", segments: [
  {x: 970, y: 446, angle: 49.899092453787766},
]},
"R2": {nom: "R2", ville1: "Al-Qahira", ville2: "Casablanca", couleur: "gris", type: "wagon", segments: [
  {x: 825, y: 466, angle: 10.619655276155134},
  {x: 878, y: 473, angle: 4.6668583714389955},
  {x: 934, y: 475, angle: 0.0},
]},
"R3": {nom: "R3", ville1: "Al-Qahira", ville2: "Djibouti", couleur: "blanc", type: "wagon", segments: [
  {x: 1034, y: 519, angle: 64.98310652189998},
  {x: 1056, y: 567, angle: 65.46227152342222},
]},
"R4": {nom: "R4", ville1: "Al-Qahira", ville2: "Djibouti", couleur: "rouge", type: "wagon", segments: [
  {x: 1014, y: 526, angle: 64.48612957246577},
  {x: 1036, y: 576, angle: 67.10944834375168},
]},
"R5": {nom: "R5", ville1: "Al-Qahira", ville2: "Tehran", couleur: "noir", type: "wagon", segments: [
  {x: 1062, y: 473, angle: -17.7004277886672},
]},
"R6": {nom: "R6", ville1: "Al-Qahira", ville2: "Tehran", couleur: "jaune", type: "wagon", segments: [
  {x: 1056, y: 454, angle: -17.354024636261325},
]},
"R7": {nom: "R7", ville1: "Anchorage", ville2: "Cambridge Bay", couleur: "noir", type: "bateau", segments: [
  {x: 44, y: 202, angle: -23.051300916473025},
  {x: 94, y: 182, angle: -22.890551656248327},
  {x: 144, y: 161, angle: -22.890551656248327},
  {x: 192, y: 141, angle: -23.355564859286005},
  {x: 240, y: 121, angle: -22.44275336529435},
  {x: 290, y: 101, angle: -22.44275336529435},
]},
"R8": {nom: "R8", ville1: "Anchorage", ville2: "Petropavlovsk", couleur: "violet", type: "bateau", segments: [
  {x: 1722, y: 292, angle: 14.574216198038739},
  {x: 1775, y: 293, angle: -12.907408671265838},
  {x: 1819, y: 266, angle: -48.179830119864235},
]},
"R9": {nom: "R9", ville1: "Anchorage", ville2: "Tiksi", couleur: "jaune", type: "bateau", segments: [
  {x: 1468, y: 88, angle: 3.503531644784458},
  {x: 1520, y: 94, angle: 3.3664606634298013},
  {x: 1574, y: 100, angle: 4.573921259900861},
  {x: 1627, y: 105, angle: 5.826342029555775},
  {x: 1680, y: 114, angle: 14.036243467926477},
  {x: 1730, y: 130, angle: 21.370622269343187},
  {x: 1778, y: 153, angle: 28.705952543401093},
  {x: 1823, y: 182, angle: 38.290163192243064},
]},
"R10": {nom: "R10", ville1: "Anchorage", ville2: "Vancouver", couleur: "gris", type: "double", segments: [
  {x: 40, y: 243, angle: 3.4336303624505224},
  {x: 76, y: 280, angle: 85.13548556223948},
]},
"R11": {nom: "R11", ville1: "Athina", ville2: "Hamburg", couleur: "vert", type: "wagon", segments: [
  {x: 910, y: 315, angle: 33.9964591482505},
  {x: 940, y: 362, angle: 76.5042667192042},
]},
"R12": {nom: "R12", ville1: "Athina", ville2: "Marseille", couleur: "rouge", type: "bateau", segments: [
  {x: 844, y: 395, angle: 41.72951207681644},
  {x: 894, y: 414, angle: -2.2906100426385296},
]},
"R13": {nom: "R13", ville1: "Athina", ville2: "Tehran", couleur: "gris", type: "wagon", segments: [
  {x: 994, y: 408, angle: -1.169139327907419},
  {x: 1047, y: 416, angle: 14.574216198038739},
]},
"R14": {nom: "R14", ville1: "Bangkok", ville2: "Hong Kong", couleur: "noir", type: "wagon", segments: [
  {x: 1474, y: 562, angle: -47.41950921665634},
]},
"R15": {nom: "R15", ville1: "Bangkok", ville2: "Hong Kong", couleur: "violet", type: "wagon", segments: [
  {x: 1459, y: 550, angle: -49.028263666485145},
]},
"R16": {nom: "R16", ville1: "Bangkok", ville2: "Jakarta", couleur: "blanc", type: "bateau", segments: [
  {x: 1414, y: 630, angle: 104.85861444792468},
  {x: 1432, y: 672, angle: 29.054604099077146},
]},
"R17": {nom: "R17", ville1: "Bangkok", ville2: "Manila", couleur: "rouge", type: "bateau", segments: [
  {x: 1476, y: 615, angle: 17.7004277886672},
  {x: 1526, y: 607, angle: -36.634113875967415},
]},
"R18": {nom: "R18", ville1: "Bangkok", ville2: "Mumbai", couleur: "rouge", type: "wagon", segments: [
  {x: 1304, y: 510, angle: -23.355564859286005},
  {x: 1360, y: 508, angle: 17.354024636261325},
  {x: 1406, y: 540, angle: 52.43140797117251},
]},
"R19": {nom: "R19", ville1: "Bangkok", ville2: "Mumbai", couleur: "jaune", type: "wagon", segments: [
  {x: 1299, y: 534, angle: -23.051300916473025},
  {x: 1354, y: 529, angle: 15.461217740441903},
  {x: 1399, y: 562, angle: 54.32359177813801},
]},
"R20": {nom: "R20", ville1: "Beijing", ville2: "Hong Kong", couleur: "blanc", type: "wagon", segments: [
  {x: 1481, y: 475, angle: -99.2726017772003},
  {x: 1474, y: 422, angle: -95.94686305397352},
]},
"R21": {nom: "R21", ville1: "Beijing", ville2: "Hong Kong", couleur: "vert", type: "wagon", segments: [
  {x: 1494, y: 418, angle: 81.70285503016314},
  {x: 1502, y: 471, angle: 79.15969454566942},
]},
"R22": {nom: "R22", ville1: "Beijing", ville2: "Lahore", couleur: "gris", type: "double", segments: [
  {x: 1314, y: 424, angle: -12.907408671265838},
  {x: 1367, y: 412, angle: -13.172553423326894},
  {x: 1418, y: 401, angle: -12.907408671265838},
]},
"R23": {nom: "R23", ville1: "Beijing", ville2: "Novosibirsk", couleur: "noir", type: "wagon", segments: [
  {x: 1330, y: 309, angle: 28.610459665965216},
  {x: 1376, y: 335, angle: 29.167613379577794},
  {x: 1424, y: 361, angle: 29.167613379577794},
]},
"R24": {nom: "R24", ville1: "Beijing", ville2: "Novosibirsk", couleur: "rouge", type: "wagon", segments: [
  {x: 1340, y: 291, angle: 30.762719534238915},
  {x: 1387, y: 317, angle: 27.597295868643723},
  {x: 1433, y: 344, angle: 28.610459665965216},
]},
"R25": {nom: "R25", ville1: "Beijing", ville2: "Yakutsk", couleur: "jaune", type: "wagon", segments: [
  {x: 1485, y: 225, angle: 90.0},
  {x: 1484, y: 278, angle: 90.0},
  {x: 1485, y: 330, angle: 88.80651057601797},
]},
"R26": {nom: "R26", ville1: "Buenos Aires", ville2: "Cape Town", couleur: "jaune", type: "bateau", segments: [
  {x: 528, y: 940, angle: 0.0},
  {x: 583, y: 940, angle: 0.0},
  {x: 635, y: 940, angle: 1.193489423982035},
  {x: 688, y: 939, angle: 1.193489423982035},
  {x: 742, y: 940, angle: -2.436648246810131},
  {x: 796, y: 941, angle: -1.169139327907419},
  {x: 848, y: 940, angle: 2.3859440303888126},
]},
"R27": {nom: "R27", ville1: "Buenos Aires", ville2: "Cape Town", couleur: "violet", type: "bateau", segments: [
  {x: 528, y: 920, angle: -2.3859440303888126},
  {x: 582, y: 920, angle: -1.169139327907419},
  {x: 634, y: 919, angle: -1.193489423982035},
  {x: 689, y: 920, angle: 0.0},
  {x: 741, y: 920, angle: -1.2453642667683473},
  {x: 795, y: 920, angle: 0.0},
  {x: 848, y: 920, angle: -2.33730585912382},
]},
"R28": {nom: "R28", ville1: "Buenos Aires", ville2: "Rio de Janeiro", couleur: "blanc", type: "wagon", segments: [
  {x: 492, y: 871, angle: -55.37584492005105},
]},
"R29": {nom: "R29", ville1: "Buenos Aires", ville2: "Rio de Janeiro", couleur: "rouge", type: "wagon", segments: [
  {x: 508, y: 882, angle: -56.309932474020215},
]},
"R30": {nom: "R30", ville1: "Buenos Aires", ville2: "Valparaiso", couleur: "vert", type: "bateau", segments: [
  {x: 374, y: 963, angle: 70.11483488614456},
  {x: 412, y: 992, angle: 0.0},
  {x: 452, y: 964, angle: -66.644435140714},
]},
"R31": {nom: "R31", ville1: "Cambridge Bay", ville2: "Reykjavik", couleur: "blanc", type: "bateau", segments: [
  {x: 386, y: 100, angle: 15.154068050312597},
  {x: 438, y: 115, angle: 14.858614447924662},
  {x: 489, y: 129, angle: 16.26020470831196},
  {x: 540, y: 143, angle: 15.461217740441903},
  {x: 590, y: 158, angle: 14.858614447924662},
  {x: 643, y: 171, angle: 14.036243467926477},
]},
"R32": {nom: "R32", ville1: "Cambridge Bay", ville2: "Winnipeg", couleur: "noir", type: "wagon", segments: [
  {x: 260, y: 274, angle: -53.36588612403259},
  {x: 290, y: 228, angle: -61.85839876773829},
  {x: 313, y: 180, angle: -68.19859051364818},
  {x: 330, y: 128, angle: -74.53878225955809},
]},
"R33": {nom: "R33", ville1: "Cape Town", ville2: "Dar Es Salaam", couleur: "vert", type: "wagon", segments: [
  {x: 939, y: 840, angle: -51.34019174590991},
  {x: 972, y: 798, angle: -51.51980175165699},
  {x: 1004, y: 756, angle: -51.70983680775693},
]},
"R34": {nom: "R34", ville1: "Cape Town", ville2: "Dar Es Salaam", couleur: "violet", type: "wagon", segments: [
  {x: 954, y: 852, angle: -50.792796495032164},
  {x: 988, y: 810, angle: -53.13010235415598},
  {x: 1020, y: 769, angle: -51.51980175165699},
]},
"R35": {nom: "R35", ville1: "Cape Town", ville2: "Luanda", couleur: "gris", type: "wagon", segments: [
  {x: 888, y: 784, angle: 83.01894259317021},
  {x: 894, y: 838, angle: 83.15722658736905},
]},
"R36": {nom: "R36", ville1: "Cape Town", ville2: "Port-aux-Francais", couleur: "rouge", type: "bateau", segments: [
  {x: 972, y: 914, angle: 16.587338556927413},
  {x: 1023, y: 926, angle: 11.768288932020647},
  {x: 1075, y: 937, angle: 12.907408671265838},
  {x: 1126, y: 949, angle: 12.65255650055797},
  {x: 1178, y: 962, angle: 12.65255650055797},
]},
"R37": {nom: "R37", ville1: "Cape Town", ville2: "Port-aux-Francais", couleur: "vert", type: "bateau", segments: [
  {x: 966, y: 932, angle: 13.76078511179124},
  {x: 1018, y: 945, angle: 13.172553423326894},
  {x: 1070, y: 956, angle: 12.528807709151511},
  {x: 1122, y: 969, angle: 13.448615051686518},
  {x: 1174, y: 980, angle: 12.011478386365443},
]},
"R38": {nom: "R38", ville1: "Cape Town", ville2: "Rio de Janeiro", couleur: "noir", type: "bateau", segments: [
  {x: 585, y: 834, angle: 10.203973721731684},
  {x: 638, y: 842, angle: 8.130102354155978},
  {x: 690, y: 851, angle: 9.090276920822323},
  {x: 743, y: 859, angle: 9.462322208025617},
  {x: 796, y: 867, angle: 8.471144633014832},
  {x: 848, y: 875, angle: 8.130102354155978},
]},
"R39": {nom: "R39", ville1: "Cape Town", ville2: "Rio de Janeiro", couleur: "blanc", type: "bateau", segments: [
  {x: 581, y: 855, angle: 11.309932474020213},
  {x: 634, y: 862, angle: 10.40771131249006},
  {x: 687, y: 871, angle: 9.462322208025617},
  {x: 740, y: 878, angle: 9.659893078442336},
  {x: 792, y: 887, angle: 8.652541791114725},
  {x: 844, y: 895, angle: 8.130102354155978},
]},
"R40": {nom: "R40", ville1: "Cape Town", ville2: "Toamasina", couleur: "gris", type: "bateau", segments: [
  {x: 968, y: 880, angle: -27.597295868643723},
  {x: 1016, y: 855, angle: -27.597295868643723},
  {x: 1062, y: 831, angle: -29.167613379577794},
]},
"R41": {nom: "R41", ville1: "Caracas", ville2: "Lagos", couleur: "rouge", type: "bateau", segments: [
  {x: 446, y: 627, angle: 3.503531644784458},
  {x: 499, y: 630, angle: 3.5763343749973515},
  {x: 552, y: 633, angle: 3.503531644784458},
  {x: 606, y: 637, angle: 1.169139327907419},
  {x: 658, y: 639, angle: 3.4336303624505224},
  {x: 712, y: 642, angle: 2.436648246810131},
  {x: 764, y: 644, angle: 4.6668583714389955},
]},
"R42": {nom: "R42", ville1: "Caracas", ville2: "Lima", couleur: "blanc", type: "wagon", segments: [
  {x: 350, y: 724, angle: -65.46227152342222},
  {x: 371, y: 675, angle: -68.62937773065681},
]},
"R43": {nom: "R43", ville1: "Caracas", ville2: "Lima", couleur: "jaune", type: "wagon", segments: [
  {x: 355, y: 668, angle: 113.96248897457818},
  {x: 333, y: 716, angle: 113.96248897457818},
]},
"R44": {nom: "R44", ville1: "Caracas", ville2: "Mexico", couleur: "rouge", type: "wagon", segments: [
  {x: 228, y: 587, angle: 15.154068050312597},
  {x: 279, y: 603, angle: 18.060471936199185},
  {x: 330, y: 618, angle: 19.573125830410195},
]},
"R45": {nom: "R45", ville1: "Caracas", ville2: "Mexico", couleur: "violet", type: "wagon", segments: [
  {x: 234, y: 568, angle: 16.587338556927413},
  {x: 284, y: 584, angle: 16.587338556927413},
  {x: 335, y: 600, angle: 15.154068050312597},
]},
"R46": {nom: "R46", ville1: "Caracas", ville2: "Miami", couleur: "blanc", type: "bateau", segments: [
  {x: 351, y: 535, angle: 14.574216198038739},
  {x: 380, y: 573, angle: 86.56636963754949},
]},
"R47": {nom: "R47", ville1: "Caracas", ville2: "Rio de Janeiro", couleur: "noir", type: "wagon", segments: [
  {x: 418, y: 664, angle: 22.44275336529435},
  {x: 467, y: 692, angle: 36.86989764584402},
  {x: 504, y: 733, angle: 58.840695491655616},
  {x: 524, y: 785, angle: 74.84593194968741},
]},
"R48": {nom: "R48", ville1: "Caracas", ville2: "Rio de Janeiro", couleur: "vert", type: "wagon", segments: [
  {x: 435, y: 649, angle: 21.595310448967684},
  {x: 482, y: 677, angle: 37.77568430595466},
  {x: 519, y: 720, angle: 60.25511870305779},
  {x: 540, y: 770, angle: 73.88658176691072},
]},
"R49": {nom: "R49", ville1: "Casablanca", ville2: "Lagos", couleur: "gris", type: "wagon", segments: [
  {x: 732, y: 502, angle: 120.76271953423893},
  {x: 710, y: 552, angle: 104.32271997820357},
  {x: 732, y: 601, angle: 29.167613379577794},
  {x: 782, y: 623, angle: 16.26020470831196},
]},
"R50": {nom: "R50", ville1: "Casablanca", ville2: "Marseille", couleur: "gris", type: "double", segments: [
  {x: 780, y: 408, angle: -58.240519915187214},
]},
"R51": {nom: "R51", ville1: "Casablanca", ville2: "Miami", couleur: "vert", type: "bateau", segments: [
  {x: 360, y: 501, angle: -8.130102354155978},
  {x: 414, y: 494, angle: -5.826342029555775},
  {x: 467, y: 488, angle: -5.710593137499643},
  {x: 520, y: 482, angle: -7.815293546766878},
  {x: 573, y: 475, angle: -7.6668042618141765},
  {x: 624, y: 469, angle: -8.130102354155978},
  {x: 678, y: 464, angle: -7.275004957889255},
]},
"R52": {nom: "R52", ville1: "Christchurch", ville2: "Sydney", couleur: "blanc", type: "bateau", segments: [
  {x: 1766, y: 930, angle: 28.072486935852954},
]},
"R53": {nom: "R53", ville1: "Christchurch", ville2: "Sydney", couleur: "rouge", type: "bateau", segments: [
  {x: 1757, y: 947, angle: 27.597295868643723},
]},
"R54": {nom: "R54", ville1: "Christchurch", ville2: "Valparaiso", couleur: "jaune", type: "bateau", segments: [
  {x: 1862, y: 957, angle: -3.503531644784458},
  {x: 47, y: 950, angle: -3.3018656744350037},
  {x: 102, y: 944, angle: -5.826342029555775},
  {x: 155, y: 939, angle: -3.5763343749973515},
  {x: 208, y: 934, angle: -4.864514437760525},
  {x: 260, y: 930, angle: -4.6668583714389955},
  {x: 312, y: 923, angle: -3.6522227803063356},
]},
"R55": {nom: "R55", ville1: "Dar Es Salaam", ville2: "Djibouti", couleur: "noir", type: "wagon", segments: [
  {x: 1044, y: 661, angle: 99.09027692082235},
]},
"R56": {nom: "R56", ville1: "Dar Es Salaam", ville2: "Djibouti", couleur: "rouge", type: "wagon", segments: [
  {x: 1064, y: 663, angle: 99.2726017772003},
]},
"R57": {nom: "R57", ville1: "Dar Es Salaam", ville2: "Jakarta", couleur: "vert", type: "bateau", segments: [
  {x: 1098, y: 725, angle: 1.169139327907419},
  {x: 1150, y: 725, angle: -1.169139327907419},
  {x: 1203, y: 726, angle: 1.193489423982035},
  {x: 1257, y: 726, angle: 0.0},
  {x: 1310, y: 726, angle: 2.2906100426385296},
  {x: 1362, y: 726, angle: -2.3859440303888126},
  {x: 1417, y: 725, angle: -1.1457628381751035},
]},
"R58": {nom: "R58", ville1: "Dar Es Salaam", ville2: "Jakarta", couleur: "violet", type: "bateau", segments: [
  {x: 1098, y: 704, angle: 1.169139327907419},
  {x: 1151, y: 704, angle: 0.0},
  {x: 1204, y: 704, angle: 0.0},
  {x: 1257, y: 704, angle: 1.169139327907419},
  {x: 1311, y: 704, angle: 1.1457628381751035},
  {x: 1364, y: 704, angle: 0.0},
  {x: 1416, y: 704, angle: -2.5448043798130957},
]},
"R59": {nom: "R59", ville1: "Dar Es Salaam", ville2: "Luanda", couleur: "gris", type: "double", segments: [
  {x: 941, y: 727, angle: -8.297144969836875},
  {x: 994, y: 719, angle: -8.297144969836875},
]},
"R60": {nom: "R60", ville1: "Dar Es Salaam", ville2: "Mumbai", couleur: "blanc", type: "bateau", segments: [
  {x: 1102, y: 682, angle: -11.309932474020213},
  {x: 1156, y: 669, angle: -14.036243467926477},
  {x: 1202, y: 645, angle: -43.36342295838328},
  {x: 1232, y: 600, angle: -68.19859051364818},
]},
"R61": {nom: "R61", ville1: "Dar Es Salaam", ville2: "Toamasina", couleur: "jaune", type: "bateau", segments: [
  {x: 1073, y: 758, angle: 53.13010235415598},
]},
"R62": {nom: "R62", ville1: "Darwin", ville2: "Jakarta", couleur: "noir", type: "bateau", segments: [
  {x: 1526, y: 713, angle: 12.907408671265838},
  {x: 1578, y: 724, angle: 12.407418527400743},
]},
"R63": {nom: "R63", ville1: "Darwin", ville2: "Perth", couleur: "rouge", type: "wagon", segments: [
  {x: 1561, y: 830, angle: -51.34019174590991},
  {x: 1594, y: 789, angle: -51.51980175165699},
]},
"R64": {nom: "R64", ville1: "Darwin", ville2: "Port Moresby", couleur: "rouge", type: "bateau", segments: [
  {x: 1680, y: 730, angle: -17.281498371816646},
]},
"R65": {nom: "R65", ville1: "Darwin", ville2: "Sydney", couleur: "vert", type: "wagon", segments: [
  {x: 1660, y: 798, angle: 68.62937773065681},
  {x: 1680, y: 850, angle: 70.86635679409453},
]},
"R66": {nom: "R66", ville1: "Edinburgh", ville2: "Hamburg", couleur: "noir", type: "bateau", segments: [
  {x: 824, y: 277, angle: 8.130102354155978},
]},
"R67": {nom: "R67", ville1: "Edinburgh", ville2: "Hamburg", couleur: "jaune", type: "bateau", segments: [
  {x: 826, y: 258, angle: 10.40771131249006},
]},
"R68": {nom: "R68", ville1: "Edinburgh", ville2: "Marseille", couleur: "blanc", type: "bateau", segments: [
  {x: 778, y: 321, angle: 65.92450174492117},
]},
"R69": {nom: "R69", ville1: "Edinburgh", ville2: "Marseille", couleur: "vert", type: "bateau", segments: [
  {x: 798, y: 311, angle: 65.05609473657542},
]},
"R70": {nom: "R70", ville1: "Edinburgh", ville2: "New York", couleur: "rouge", type: "bateau", segments: [
  {x: 415, y: 372, angle: -16.26020470831196},
  {x: 464, y: 356, angle: -15.461217740441903},
  {x: 516, y: 341, angle: -16.11341823308929},
  {x: 569, y: 326, angle: -18.43494882292201},
  {x: 619, y: 312, angle: -17.650124219930124},
  {x: 670, y: 298, angle: -17.281498371816646},
  {x: 720, y: 282, angle: -16.11341823308929},
]},
"R71": {nom: "R71", ville1: "Edinburgh", ville2: "New York", couleur: "violet", type: "bateau", segments: [
  {x: 420, y: 390, angle: -14.858614447924662},
  {x: 472, y: 376, angle: -15.945395900922856},
  {x: 522, y: 360, angle: -16.26020470831196},
  {x: 574, y: 346, angle: -15.945395900922856},
  {x: 624, y: 331, angle: -17.354024636261325},
  {x: 676, y: 316, angle: -17.020525611519858},
  {x: 724, y: 302, angle: -16.587338556927413},
]},
"R72": {nom: "R72", ville1: "Edinburgh", ville2: "Reykjavik", couleur: "gris", type: "bateau", segments: [
  {x: 743, y: 187, angle: 9.090276920822323},
  {x: 776, y: 218, angle: 84.28940686250037},
]},
"R73": {nom: "R73", ville1: "Hamburg", ville2: "Marseille", couleur: "rouge", type: "wagon", segments: [
  {x: 859, y: 334, angle: -55.669782804496684},
]},
"R74": {nom: "R74", ville1: "Hamburg", ville2: "Marseille", couleur: "violet", type: "wagon", segments: [
  {x: 842, y: 322, angle: -55.669782804496684},
]},
"R75": {nom: "R75", ville1: "Hamburg", ville2: "Moskva", couleur: "noir", type: "wagon", segments: [
  {x: 930, y: 285, angle: -9.462322208025617},
  {x: 982, y: 277, angle: -9.2726017772003},
]},
"R76": {nom: "R76", ville1: "Hamburg", ville2: "Moskva", couleur: "blanc", type: "wagon", segments: [
  {x: 927, y: 267, angle: -7.6668042618141765},
  {x: 980, y: 260, angle: -7.96961039432136},
]},
"R77": {nom: "R77", ville1: "Hong Kong", ville2: "Manila", couleur: "violet", type: "bateau", segments: [
  {x: 1529, y: 556, angle: 39.36931724236474},
]},
"R78": {nom: "R78", ville1: "Hong Kong", ville2: "Tokyo", couleur: "gris", type: "bateau", segments: [
  {x: 1588, y: 400, angle: -167.59258147259925},
  {x: 1546, y: 418, angle: 122.73522627210761},
  {x: 1528, y: 468, angle: 95.82634202955579},
]},
"R79": {nom: "R79", ville1: "Honolulu", ville2: "Lima", couleur: "gris", type: "bateau", segments: [
  {x: 44, y: 610, angle: 30.01836742760908},
  {x: 91, y: 635, angle: 29.60445074600491},
  {x: 137, y: 661, angle: 29.60445074600491},
  {x: 184, y: 687, angle: 30.01836742760908},
  {x: 230, y: 712, angle: 28.14160123226172},
  {x: 277, y: 739, angle: 27.552811576717797},
]},
"R80": {nom: "R80", ville1: "Honolulu", ville2: "Los Angeles", couleur: "jaune", type: "bateau", segments: [
  {x: 74, y: 488, angle: 91.14576283817512},
  {x: 74, y: 542, angle: 91.16913932790743},
  {x: 42, y: 576, angle: 166.23921488820875},
]},
"R81": {nom: "R81", ville1: "Honolulu", ville2: "Manila", couleur: "blanc", type: "bateau", segments: [
  {x: 1612, y: 601, angle: 19.88516511385544},
  {x: 1663, y: 615, angle: 10.619655276155134},
  {x: 1716, y: 621, angle: -1.169139327907419},
  {x: 1768, y: 613, angle: -14.858614447924662},
  {x: 1819, y: 597, angle: -23.355564859286005},
]},
"R82": {nom: "R82", ville1: "Honolulu", ville2: "Port Moresby", couleur: "vert", type: "bateau", segments: [
  {x: 1780, y: 704, angle: -18.799885158652657},
  {x: 1824, y: 673, angle: -50.042451069170916},
  {x: 1848, y: 626, angle: -74.84593194968741},
]},
"R83": {nom: "R83", ville1: "Honolulu", ville2: "Tokyo", couleur: "rouge", type: "bateau", segments: [
  {x: 1630, y: 469, angle: 73.88658176691072},
  {x: 1654, y: 516, angle: 51.70983680775693},
  {x: 1694, y: 550, angle: 28.14160123226172},
  {x: 1742, y: 570, angle: 12.011478386365443},
  {x: 1796, y: 575, angle: -1.2730300200567113},
]},
"R84": {nom: "R84", ville1: "Jakarta", ville2: "Manila", couleur: "gris", type: "bateau", segments: [
  {x: 1512, y: 667, angle: -51.51980175165699},
  {x: 1546, y: 625, angle: -50.96448710125313},
]},
"R85": {nom: "R85", ville1: "Jakarta", ville2: "Perth", couleur: "gris", type: "bateau", segments: [
  {x: 1459, y: 752, angle: 99.09027692082235},
  {x: 1464, y: 805, angle: 70.11483488614456},
  {x: 1495, y: 845, angle: 34.992020198558656},
]},
"R86": {nom: "R86", ville1: "Lagos", ville2: "Luanda", couleur: "jaune", type: "wagon", segments: [
  {x: 868, y: 682, angle: 55.37584492005105},
]},
"R87": {nom: "R87", ville1: "Lagos", ville2: "Luanda", couleur: "violet", type: "wagon", segments: [
  {x: 852, y: 692, angle: 53.569141879837645},
]},
"R88": {nom: "R88", ville1: "Lahore", ville2: "Mumbai", couleur: "noir", type: "wagon", segments: [
  {x: 1270, y: 483, angle: 91.14576283817512},
]},
"R89": {nom: "R89", ville1: "Lahore", ville2: "Mumbai", couleur: "vert", type: "wagon", segments: [
  {x: 1248, y: 482, angle: 93.57633437499737},
]},
"R90": {nom: "R90", ville1: "Lahore", ville2: "Novosibirsk", couleur: "blanc", type: "wagon", segments: [
  {x: 1276, y: 327, angle: 98.130102354156},
  {x: 1269, y: 380, angle: 98.91492695714787},
]},
"R91": {nom: "R91", ville1: "Lahore", ville2: "Tehran", couleur: "gris", type: "double", segments: [
  {x: 1156, y: 435, angle: -1.169139327907419},
  {x: 1209, y: 433, angle: -2.33730585912382},
]},
"R92": {nom: "R92", ville1: "Lima", ville2: "Sydney", couleur: "noir", type: "bateau", segments: [
  {x: 1753, y: 893, angle: -35.942111871382345},
  {x: 1796, y: 862, angle: -37.568592028827496},
  {x: 1838, y: 830, angle: -36.634113875967415},
  {x: 64, y: 838, angle: -12.65255650055797},
  {x: 116, y: 827, angle: -13.172553423326894},
  {x: 166, y: 816, angle: -10.840305454330567},
  {x: 219, y: 805, angle: -13.448615051686518},
  {x: 270, y: 794, angle: -12.011478386365443},
]},
"R93": {nom: "R93", ville1: "Lima", ville2: "Sydney", couleur: "violet", type: "bateau", segments: [
  {x: 1742, y: 878, angle: -36.86989764584402},
  {x: 1785, y: 845, angle: -35.942111871382345},
  {x: 1828, y: 814, angle: -37.568592028827496},
  {x: 59, y: 820, angle: -10.619655276155134},
  {x: 111, y: 809, angle: -12.907408671265838},
  {x: 162, y: 798, angle: -11.534620653644717},
  {x: 215, y: 786, angle: -11.768288932020647},
  {x: 266, y: 776, angle: -14.322719978203551},
]},
"R94": {nom: "R94", ville1: "Lima", ville2: "Valparaiso", couleur: "gris", type: "wagon", segments: [
  {x: 360, y: 865, angle: -104.62087398863167},
  {x: 348, y: 813, angle: -106.92751306414705},
]},
"R95": {nom: "R95", ville1: "Lima", ville2: "Valparaiso", couleur: "gris", type: "wagon", segments: [
  {x: 328, y: 817, angle: 75.37912601136834},
  {x: 340, y: 869, angle: 76.82744657667311},
]},
"R96": {nom: "R96", ville1: "Los Angeles", ville2: "Mexico", couleur: "blanc", type: "wagon", segments: [
  {x: 112, y: 486, angle: 52.90716270295846},
  {x: 144, y: 528, angle: 52.22431569404534},
]},
"R97": {nom: "R97", ville1: "Los Angeles", ville2: "Mexico", couleur: "jaune", type: "wagon", segments: [
  {x: 128, y: 474, angle: 52.65065095535942},
  {x: 160, y: 516, angle: 53.13010235415598},
]},
"R98": {nom: "R98", ville1: "Los Angeles", ville2: "New York", couleur: "noir", type: "wagon", segments: [
  {x: 155, y: 441, angle: -10.619655276155134},
  {x: 208, y: 431, angle: -9.659893078442336},
  {x: 259, y: 422, angle: -11.07020257793936},
  {x: 312, y: 412, angle: -10.840305454330567},
]},
"R99": {nom: "R99", ville1: "Los Angeles", ville2: "New York", couleur: "violet", type: "wagon", segments: [
  {x: 151, y: 421, angle: -10.619655276155134},
  {x: 204, y: 412, angle: -11.768288932020647},
  {x: 256, y: 401, angle: -10.840305454330567},
  {x: 308, y: 392, angle: -11.309932474020213},
]},
"R100": {nom: "R100", ville1: "Los Angeles", ville2: "Tokyo", couleur: "noir", type: "bateau", segments: [
  {x: 1667, y: 454, angle: 70.82099197418928},
  {x: 1694, y: 500, angle: 50.042451069170916},
  {x: 1738, y: 527, angle: 16.587338556927413},
  {x: 1789, y: 528, angle: -14.036243467926477},
  {x: 1837, y: 507, angle: -34.62415507994895},
  {x: 1875, y: 472, angle: -45.830315486258016},
  {x: 34, y: 440, angle: -16.587338556927413},
]},
"R101": {nom: "R101", ville1: "Los Angeles", ville2: "Tokyo", couleur: "vert", type: "bateau", segments: [
  {x: 1650, y: 460, angle: 69.44395478041653},
  {x: 1679, y: 512, angle: 48.36646066342981},
  {x: 1732, y: 544, angle: 16.26020470831196},
  {x: 1793, y: 546, angle: -15.780753309515388},
  {x: 1848, y: 522, angle: -32.7352262721076},
  {x: 1890, y: 483, angle: -46.59114027119459},
  {x: 40, y: 458, angle: -16.587338556927413},
]},
"R102": {nom: "R102", ville1: "Los Angeles", ville2: "Vancouver", couleur: "rouge", type: "wagon", segments: [
  {x: 89, y: 379, angle: 87.66269414087618},
]},
"R103": {nom: "R103", ville1: "Los Angeles", ville2: "Vancouver", couleur: "vert", type: "wagon", segments: [
  {x: 68, y: 380, angle: 86.42366562500266},
]},
"R104": {nom: "R104", ville1: "Los Angeles", ville2: "Winnipeg", couleur: "gris", type: "wagon", segments: [
  {x: 121, y: 405, angle: -40.10090754621224},
  {x: 162, y: 370, angle: -41.53177074108286},
  {x: 202, y: 336, angle: -40.60129464500447},
]},
"R105": {nom: "R105", ville1: "Luanda", ville2: "Rio de Janeiro", couleur: "gris", type: "bateau", segments: [
  {x: 578, y: 805, angle: -13.76078511179124},
  {x: 630, y: 793, angle: -12.65255650055797},
  {x: 683, y: 782, angle: -12.907408671265838},
  {x: 735, y: 771, angle: -12.907408671265838},
  {x: 786, y: 760, angle: -11.768288932020647},
  {x: 838, y: 748, angle: -12.907408671265838},
]},
"R106": {nom: "R106", ville1: "Manila", ville2: "Tokyo", couleur: "jaune", type: "bateau", segments: [
  {x: 1598, y: 473, angle: 111.80140948635182},
  {x: 1578, y: 524, angle: 110.55604521958348},
]},
"R107": {nom: "R107", ville1: "Miami", ville2: "New York", couleur: "blanc", type: "wagon", segments: [
  {x: 310, y: 476, angle: -77.34744349944202},
  {x: 340, y: 429, angle: -35.53767779197438},
]},
"R108": {nom: "R108", ville1: "Moskva", ville2: "Murmansk", couleur: "violet", type: "wagon", segments: [
  {x: 978, y: 170, angle: 59.82647997035568},
  {x: 1006, y: 216, angle: 57.264773727892404},
]},
"R109": {nom: "R109", ville1: "Moskva", ville2: "Novosibirsk", couleur: "vert", type: "wagon", segments: [
  {x: 1080, y: 252, angle: 3.5763343749973515},
  {x: 1132, y: 254, angle: 0.0},
  {x: 1186, y: 256, angle: 1.1457628381751035},
  {x: 1240, y: 258, angle: 2.33730585912382},
]},
"R110": {nom: "R110", ville1: "Moskva", ville2: "Novosibirsk", couleur: "jaune", type: "wagon", segments: [
  {x: 1079, y: 270, angle: 4.763641690726177},
  {x: 1132, y: 272, angle: 1.1457628381751035},
  {x: 1186, y: 274, angle: 2.33730585912382},
  {x: 1239, y: 276, angle: 2.2906100426385296},
]},
"R111": {nom: "R111", ville1: "Moskva", ville2: "Tehran", couleur: "rouge", type: "wagon", segments: [
  {x: 1044, y: 304, angle: 64.98310652189998},
  {x: 1066, y: 353, angle: 64.98310652189998},
  {x: 1088, y: 401, angle: 67.10944834375168},
]},
"R112": {nom: "R112", ville1: "Mumbai", ville2: "Tehran", couleur: "blanc", type: "wagon", segments: [
  {x: 1120, y: 485, angle: 69.7174409110834},
  {x: 1152, y: 531, angle: 36.19320730556469},
  {x: 1205, y: 544, angle: -5.492324557127438},
]},
"R113": {nom: "R113", ville1: "Mumbai", ville2: "Tehran", couleur: "violet", type: "wagon", segments: [
  {x: 1106, y: 503, angle: 70.11483488614456},
  {x: 1138, y: 548, angle: 32.7352262721076},
  {x: 1192, y: 564, angle: -4.573921259900861},
]},
"R114": {nom: "R114", ville1: "Murmansk", ville2: "Reykjavik", couleur: "vert", type: "bateau", segments: [
  {x: 736, y: 148, angle: -26.56505117707799},
  {x: 790, y: 129, angle: -14.858614447924662},
  {x: 842, y: 120, angle: -4.573921259900861},
  {x: 896, y: 122, angle: 9.090276920822323},
]},
"R115": {nom: "R115", ville1: "Murmansk", ville2: "Tiksi", couleur: "rouge", type: "bateau", segments: [
  {x: 1018, y: 126, angle: -4.484606009544625},
  {x: 1072, y: 122, angle: -2.33730585912382},
  {x: 1124, y: 118, angle: -5.946863053973501},
  {x: 1177, y: 114, angle: -4.763641690726177},
  {x: 1230, y: 110, angle: -4.763641690726177},
  {x: 1283, y: 107, angle: -5.710593137499643},
  {x: 1335, y: 102, angle: -5.946863053973501},
]},
"R116": {nom: "R116", ville1: "New York", ville2: "Reykjavik", couleur: "jaune", type: "bateau", segments: [
  {x: 406, y: 344, angle: -29.47588900324574},
  {x: 454, y: 319, angle: -29.60445074600491},
  {x: 500, y: 294, angle: -27.552811576717797},
  {x: 547, y: 268, angle: -29.744881296942225},
  {x: 594, y: 243, angle: -30.762719534238915},
  {x: 640, y: 218, angle: -26.56505117707799},
]},
"R117": {nom: "R117", ville1: "New York", ville2: "Winnipeg", couleur: "vert", type: "wagon", segments: [
  {x: 276, y: 330, angle: 23.962488974578182},
  {x: 324, y: 352, angle: 27.0955524937518},
]},
"R118": {nom: "R118", ville1: "Novosibirsk", ville2: "Tiksi", couleur: "gris", type: "wagon", segments: [
  {x: 1320, y: 225, angle: -56.63363399894044},
  {x: 1351, y: 180, angle: -56.309932474020215},
  {x: 1380, y: 136, angle: -55.37584492005105},
]},
"R119": {nom: "R119", ville1: "Novosibirsk", ville2: "Yakutsk", couleur: "violet", type: "wagon", segments: [
  {x: 1342, y: 250, angle: -23.051300916473025},
  {x: 1391, y: 228, angle: -23.498565675952094},
  {x: 1440, y: 206, angle: -21.80140948635181},
]},
"R120": {nom: "R120", ville1: "Perth", ville2: "Port-aux-Francais", couleur: "blanc", type: "bateau", segments: [
  {x: 1270, y: 959, angle: -19.88516511385544},
  {x: 1321, y: 941, angle: -20.282559088916607},
  {x: 1370, y: 922, angle: -20.282559088916607},
  {x: 1420, y: 904, angle: -20.282559088916607},
  {x: 1470, y: 886, angle: -21.370622269343187},
]},
"R121": {nom: "R121", ville1: "Perth", ville2: "Port-aux-Francais", couleur: "violet", type: "bateau", segments: [
  {x: 1278, y: 978, angle: -19.133643205905482},
  {x: 1328, y: 960, angle: -19.179008025810724},
  {x: 1379, y: 942, angle: -19.179008025810724},
  {x: 1428, y: 924, angle: -19.98310652189998},
  {x: 1477, y: 904, angle: -21.80140948635181},
]},
"R122": {nom: "R122", ville1: "Perth", ville2: "Sydney", couleur: "blanc", type: "wagon", segments: [
  {x: 1590, y: 882, angle: 8.130102354155978},
  {x: 1644, y: 891, angle: 7.96961039432136},
]},
"R123": {nom: "R123", ville1: "Perth", ville2: "Sydney", couleur: "jaune", type: "wagon", segments: [
  {x: 1588, y: 902, angle: 9.2726017772003},
  {x: 1641, y: 911, angle: 10.007979801441339},
]},
"R124": {nom: "R124", ville1: "Petropavlovsk", ville2: "Tiksi", couleur: "noir", type: "bateau", segments: [
  {x: 1469, y: 107, angle: 4.573921259900861},
  {x: 1522, y: 113, angle: 4.6668583714389955},
  {x: 1574, y: 119, angle: 6.981057406829795},
  {x: 1626, y: 126, angle: 11.534620653644717},
  {x: 1676, y: 144, angle: 29.167613379577794},
  {x: 1704, y: 183, angle: 82.72499504211075},
  {x: 1696, y: 234, angle: 115.51387042753426},
]},
"R125": {nom: "R125", ville1: "Petropavlovsk", ville2: "Tokyo", couleur: "gris", type: "bateau", segments: [
  {x: 1646, y: 316, angle: 121.15930450834439},
  {x: 1634, y: 367, angle: 91.16913932790743},
]},
"R126": {nom: "R126", ville1: "Petropavlovsk", ville2: "Yakutsk", couleur: "blanc", type: "wagon", segments: [
  {x: 1530, y: 199, angle: 26.56505117707799},
  {x: 1578, y: 223, angle: 25.016893478100023},
  {x: 1627, y: 247, angle: 26.56505117707799},
]},
"R127": {nom: "R127", ville1: "Port Moresby", ville2: "Sydney", couleur: "jaune", type: "bateau", segments: [
  {x: 1748, y: 759, angle: 68.19859051364818},
  {x: 1753, y: 812, angle: 102.2647737278924},
  {x: 1730, y: 858, angle: 130.7321066997092},
]},
"R128": {nom: "R128", ville1: "Tiksi", ville2: "Yakutsk", couleur: "vert", type: "wagon", segments: [
  {x: 1448, y: 140, angle: 48.270487923183566},
]},
"R129": {nom: "R129", ville1: "Tokyo", ville2: "Vancouver", couleur: "blanc", type: "bateau", segments: [
  {x: 1685, y: 398, angle: -36.86989764584402},
  {x: 1730, y: 368, angle: -30.173520029644337},
  {x: 1776, y: 345, angle: -20.955776730632184},
  {x: 1828, y: 329, angle: -13.76078511179124},
  {x: 1880, y: 321, angle: -4.484606009544625},
  {x: 34, y: 323, angle: 10.40771131249006},
]},
"R130": {nom: "R130", ville1: "Vancouver", ville2: "Winnipeg", couleur: "jaune", type: "wagon", segments: [
  {x: 134, y: 308, angle: -7.96961039432136},
  {x: 186, y: 302, angle: -5.826342029555775},
]},
};

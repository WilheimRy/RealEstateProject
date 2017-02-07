
var regions = [
    "Auckland", "Bay of Plenty", "Canterbury", "Central North Island", "Central Otago / Lakes District", "Coromandel",
    "Gisborne", "Hawkes Bay", "Manawatu / Wanganui", "Marlborough", "Nelson & Bays", "Northland", "Otago", "Southland",
    "Taranaki", "Waikato", "Wairarapa", "Wellington", "West Coast"
];

var dictricts = [
    "Ashburton", "Auckland City", "Banks Peninsula", "Buller", "Carterton", "Central Hawkes Bay", "Central Otago",
    "Christchurch City", "Clutha", "Dunedin City", "Far North", "Franklin", "Gisborne", "Gore", "Grey", "Hamilton City",
    "Hastings", "Hauraki", "Horowhenua", "Hurunui", "Invercargill City", "Kaikoura", "Kaipara", "Kapiti Coast",
    "Kawerau", "Lower Hutt City", "Mackenzie", "Manawatu", "Manukau City", "Marlborough", "Masterton", "Matamata-Piako",
    "Napier City", "Nelson", "New Plymouth", "North Shore City", "Opotiki", "Palmerston North City", "Papakura",
    "Porirua City", "Queenstown", "Rangitikei", "Rodney", "Rotorua", "Ruapehu", "Selwyn", "South Taranaki",
    "South Waikato", "South Wairarapa", "Southland", "Stratford", "Tararua", "Tasman", "Taupo", "Tauranga",
    "Thames-Coromandel", "Timaru", "Upper Hutt City", "Waiheke Island", "Waikato", "Waimakariri", "Waimate", "Waipa",
    "Wairoa", "Waitakere City", "Waitaki", "Wanaka", "Wanganui", "Wellington City", "Western Bay Of Plenty", "Westland",
    "Whakatane", "Whangarei"
];

var regions_district_dic = {
    "Bay of Plenty": ["Western Bay Of Plenty", "Tauranga", "Rotorua", "Opotiki", "Whakatane", "Kawerau"],
    "Coromandel": ["Thames-Coromandel"],
    "Canterbury": [
        "Ashburton", "Hurunui", "Mackenzie", "Christchurch City", "Banks Peninsula", "Waimakariri", "Waimate", "Timaru",
        "Selwyn"
    ],
    "Auckland": [
        "Franklin", "Waiheke Island", "Waitakere City", "North Shore City", "Auckland City", "Rodney", "Manukau City",
        "Papakura"
    ],
    "Northland": ["Far North", "Whangarei", "Kaipara"],
    "Southland": ["Southland", "Gore", "Invercargill City"],
    "Central Otago / Lakes District": ["Queenstown", "Central Otago", "Wanaka"],
    "Marlborough": ["Marlborough", "Kaikoura"],
    "Central North Island": ["Ruapehu", "Taupo"],
    "Manawatu / Wanganui": ["Manawatu", "Horowhenua", "Palmerston North City", "Tararua", "Wanganui", "Rangitikei"],
    "Wairarapa": ["South Wairarapa", "Masterton", "Carterton"],
    "Wellington": ["Kapiti Coast", "Wellington City", "Lower Hutt City", "Porirua City", "Upper Hutt City"],
    "Otago": ["Dunedin City", "Waitaki", "Clutha"],
    "Waikato": ["Waikato", "Hamilton City", "Matamata-Piako", "Waipa", "Hauraki", "South Waikato"],
    "Hawkes Bay": ["Hastings", "Napier City", "Wairoa", "Central Hawkes Bay"],
    "Gisborne": ["Gisborne"],
    "Taranaki": ["New Plymouth", "South Taranaki", "Stratford"],
    "Nelson & Bays": ["Tasman", "Nelson"],
    "West Coast": ["Buller", "Westland", "Grey"]
};

var district_suburb_dic = {
    "Western Bay Of Plenty": ["Waihi Beach", "Katikati", "Te Puke", "Omokoroa", "Maketu", "Ohauiti"],
    "Thames-Coromandel": [
        "Whangamata", "Whitianga", "Coromandel", "Tairua", "Pauanui", "Hot Water Beach", "Tuateawa", "Whiritoa",
        "Whangapoua", "Cooks Beach", "Waitete Bay", "Matarangi", "Kuaotunu", "Hahei", "Onemana", "Thames"
    ],
    "Ashburton": [
        "Methven", "Allenton", "Hampstead", "Netherby", "Ashburton", "Rakaia", "Ashburton Surrounds", "Hinds", "Elgin",
        "Tinwald"
    ],
    "Hurunui": ["Hanmer Springs", "Amberley", "Culverden", "Leithfield"],
    "Franklin": [
        "Port Waikato", "Pukekohe", "Karaka", "Clarks Beach", "Pukekawa", "Kingseat", "Waiuku", "Pokeno", "Tuakau",
        "Awhitu", "Mauku", "Onewhero", "Paerata", "Buckland", "Bombay", "Patumahoe", "Pollok", "Whakatiwai"
    ],
    "Far North": [
        "Kerikeri", "Russell", "Coopers Beach", "Omapere", "Opononi", "Paihia", "Kohukohu", "Mangonui", "Cable Bay",
        "Haruru", "Karikari Peninsula", "Opua"
    ],
    "Southland": [
        "Manapouri", "Halfmoon Bay", "Stewart Island", "Ohai", "Nightcaps", "Otautau", "Edendale", "Riverton",
        "Colac Bay"
    ],
    "Tauranga": [
        "Mount Maunganui", "Papamoa", "Welcome Bay", "Hairini", "Pyes Pa", "Greerton", "Otumoetai", "Maungatapu",
        "Gate Pa", "Judea", "Tauranga Central", "Matapihi", "Avenues", "Matua", "Bethlehem", "Brookfield", "Poike",
        "Tauriko", "Tauranga South"
    ],
    "Rotorua": [
        "Lake Tarawera", "Lake Okareka", "Ngongotaha", "Lake Rotoma", "Hamurana", "Rotorua Central", "Glenholme",
        "Owhata", "Mamaku", "Holdens Bay", "Western Heights", "Mangakakahi", "Hillcrest", "Fairy Springs", "Mourea",
        "Victoria", "Utuhina", "Lynmore", "Koutu", "Pukehangi", "Westbrook", "Tihiotonga", "Rotorua Surrounds",
        "Okere Falls", "Selwyn Heights", "Lake Rotoehu", "Fordlands", "Springfield", "Fenton Park"
    ],
    "Queenstown": [
        "Queenstown", "Arrowtown", "Glenorchy", "Dalefield/Wakatipu Basin", "Arthurs Point", "Fernhill/Sunshine Bay",
        "Kelvin Heights", "Frankton"
    ],
    "Marlborough": [
        "Blenheim Central", "Waikawa", "Kenepuru Sound", "Anakiwa and Surrounds", "Tennyson Inlet", "Picton",
        "Redwoodtown", "Renwick", "Witherlea", "Springlands", "Islington", "Grovetown"
    ],
    "Opotiki": ["Te Kaha"],
    "Waiheke Island": ["Onetangi", "Oneroa", "Palm Beach", "Surfdale", "Ostend"],
    "Ruapehu": ["Ohakune", "Owhango", "National Park", "Raetihi", "Taumarunui"],
    "Central Otago": ["Alexandra", "Naseby", "Clyde", "Cromwell"],
    "Whangarei": [
        "Matapouri", "Waipu", "Ngunguru", "Langs Beach", "Ruakaka", "Whangarei Heads", "Parua Bay", "One Tree Point",
        "Whangarei Central", "Woodhill", "Raumanga", "Kamo", "Whananaki", "Regent", "Parahaki", "Kensington",
        "Tikipunga", "Maunu", "Horahora", "Onerahi", "Avenues", "Whau Valley", "Otaika", "Ruatangata", "Hikurangi",
        "Whangarei Area", "Glenbervie", "Riverside", "Whareora"
    ],
    "Manawatu": ["Himatangi Beach", "Feilding", "Halcombe"],
    "Horowhenua": ["Waitarere Beach", "Foxton Beach", "Levin", "Foxton", "Waikawa Beach", "Shannon", "Tokomaru"],
    "Kaipara": ["Mangawhai Heads", "Dargaville", "Tinopai", "Mangawhai", "Maungaturoto"],
    "Taupo": [
        "Turangi", "Kinloch", "Wharewaka", "Acacia Bay", "Mangakino", "Taupo", "Tauhara", "Lake Taupo", "Nukuhau",
        "Richmond Heights", "Hilltop"
    ],
    "South Wairarapa": ["Greytown", "Martinborough", "Featherston"],
    "Waitakere City": [
        "Piha", "Henderson", "Whenuapai", "Glen Eden", "Massey", "Ranui", "Cornwallis", "Titirangi", "Hobsonville",
        "New Lynn", "Te Atatu Peninsula", "West Harbour", "Glendene", "Te Atatu South", "Henderson Valley", "Waiatarua",
        "Kelston", "Swanson", "Sunnyvale", "Oratia", "Laingholm", "Huia"
    ],
    "Kapiti Coast": [
        "Raumati South", "Waikanae Beach", "Raumati Beach", "Otaki Beach", "Waikanae", "Paraparaumu Beach",
        "Paekakariki", "Otaki", "Peka Peka", "Paraparaumu", "Otaihanga"
    ],
    "Mackenzie": ["Twizel", "Fairlie"],
    "Dunedin City": [
        "Karitane", "North Dunedin", "Mornington", "Aramoana", "Portobello", "Dunedin Central", "North East Valley",
        "Dalmore", "Belleknowes", "Shiel Hill", "Woodhaugh", "Roslyn", "Calton Hill", "Opoho", "Glenleith", "Wakari",
        "Green Island", "Corstorphine", "The Cove", "Kaikorai", "Andersons Bay", "Outram", "Maori Hill", "Bradford",
        "Pine Hill", "South Dunedin", "Caversham", "Maryhill", "Saint Clair", "Saint Leonards", "Kew", "Musselburgh",
        "Kensington", "Saint Kilda", "Port Chalmers", "Brockville", "Mosgiel", "Brighton", "Helensburgh", "Fairfield",
        "Ravensbourne", "Ocean Grove", "Forbury", "Roseneath", "Burnside", "Normanby"
    ],
    "Waikato": ["Raglan", "Meremere", "Huntly", "Ngaruawahia", "Whatawhata", "Tamahere", "Te Kauwhata", "Taupiri"],
    "Hastings": ["Havelock North", "Te Awanga", "Flaxmere", "Akina", "Mayfair", "Crownthorpe", "Mahora", "Hastings"],
    "Gisborne": [
        "Wainui", "Pouawa", "Inner Kaiti", "Mangapapa", "Outer Kaiti", "Whataupoko", "Gisborne", "Riverdale", "Tamarau",
        "Te Hapara"
    ],
    "North Shore City": [
        "Long Bay", "Albany", "Takapuna", "Milford", "Birkenhead", "Devonport", "Torbay", "Glenfield", "Totara Vale",
        "Forrest Hill", "Northcote", "Beach Haven", "Unsworth Heights", "Northcross", "Browns Bay", "Mairangi Bay",
        "Castor Bay", "Greenhithe", "Chatswood", "Sunnynook", "Bayview", "Hillcrest", "Birkdale", "Murrays Bay",
        "Hauraki", "Rothesay Bay", "Belmont", "Bayswater", "Pinehill", "Windsor Park", "Northcote Point", "Narrow Neck",
        "Campbells Bay"
    ],
    "Masterton": ["Masterton", "Riversdale Beach"],
    "Auckland City": [
        "Mount Eden", "Remuera", "Freemans Bay", "Grey Lynn", "Newmarket", "Mission Bay", "Ponsonby", "Ellerslie",
        "Parnell", "Auckland Central", "Sandringham", "Greenlane", "Avondale", "Waterview", "Meadowbank", "Grafton",
        "Otahuhu", "Onehunga", "Epsom", "Saint Heliers", "Saint Johns", "Hillsborough", "One Tree Hill",
        "Mount Roskill", "Mount Albert", "Kohimarama", "Point Chevalier", "Royal Oak", "Point England", "Herne Bay",
        "Panmure", "Kingsland", "Glen Innes", "Orakei", "New Windsor", "Mount Wellington", "Newton", "Glendowie",
        "Eden Terrace", "Westmere", "Blockhouse Bay", "Stonefields", "Saint Marys Bay", "Three Kings", "Penrose",
        "Lynfield"
    ],
    "Christchurch City": [
        "Sumner", "Mount Pleasant", "Northcote", "Ilam", "Addington", "Bryndwr", "Christchurch Central", "New Brighton",
        "Riccarton", "Merivale", "Harewood", "Saint Albans", "Upper Riccarton", "Richmond", "Linwood", "Bishopdale",
        "Avonhead", "Hornby", "Redcliffs", "Fendalton", "Papanui", "Shirley", "Parklands", "Spreydon", "Halswell",
        "Saint Martins", "Westmorland", "Burnside", "Sydenham", "Phillipstown", "Redwood", "North New Brighton",
        "Northwood", "Wainoni", "Russley", "Waltham", "Somerfield", "Edgeware", "Cashmere", "Hillsborough",
        "Aidanfield", "Sockburn", "Mairehau", "Belfast", "Wigram", "Huntsbury", "Casebrook", "Yaldhurst",
        "Heathcote Valley", "Woolston", "Bromley", "Aranui", "Dallington", "Hei Hei", "Strowan", "Marshland",
        "Beckenham", "Moncks Bay", "Middleton", "Avondale", "Opawa", "Templeton", "South New Brighton", "Hoon Hay",
        "Avonside", "Waimairi Beach", "Southshore", "Burwood"
    ],
    "Rodney": [
        "Algies Bay", "Leigh", "Waiwera", "Matakana", "Orewa", "Warkworth", "Snells Beach", "Dairy Flat", "Manly",
        "Stanmore Bay", "Wellsford", "Silverdale", "Red Beach", "Kumeu", "Millwater", "Point Wells", "Army Bay",
        "Kaukapakapa", "Gulf Harbour", "Riverhead", "Waimauku", "Helensville", "Puhoi", "Redvale", "Tindalls Beach",
        "Muriwai", "Albany Heights", "Waitoki", "Huapai", "Stillwater", "Parakai", "Coatesville"
    ],
    "New Plymouth": [
        "New Plymouth Central", "Whalers Gate", "Bell Block", "New Plymouth City Surrounds", "Strandon", "Westown",
        "New Plymouth Area Surrounds", "Moturoa", "Inglewood", "Spotswood", "Vogeltown", "Lynmouth", "Fitzroy",
        "Frankleigh Park", "Marfell", "Urenui", "Waitara", "Merrilands", "Glen Avon", "Welbourn", "Brooklands",
        "Highlands Park", "Egmont Village", "Hurdon", "Oakura"
    ],
    "Whakatane": ["Ohope", "Thornton", "Whakatane", "Murupara", "Coastlands", "Edgecumbe"],
    "Wanaka": ["Lake Hawea", "Wanaka"],
    "Wellington City": [
        "Kingston", "Wellington Central", "Johnsonville", "Te Aro", "Karori", "Aro Valley", "Seatoun", "Miramar",
        "Kelburn", "Brooklyn", "Karaka Bays", "Newtown", "Roseneath", "Northland", "Ngaio", "Mount Cook", "Khandallah",
        "Oriental Bay", "Kaiwharawhara", "Wadestown", "Newlands", "Hataitai", "Melrose", "Mount Victoria", "Kilbirnie",
        "Island Bay", "Berhampore", "Thorndon", "Vogeltown", "Grenada Village", "Ngauranga", "Churton Park"
    ],
    "Banks Peninsula": ["Akaroa", "Lyttelton", "Diamond Harbour", "Governors Bay", "Cass Bay"],
    "Hamilton City": [
        "Hamilton Central", "Fairfield", "Dinsdale", "Melville", "Hillcrest", "Hamilton East", "Rototuna", "Glenview",
        "Whitiora", "Frankton", "Huntington", "Silverdale", "Nawton", "Pukete", "Flagstaff", "Beerescourt", "Chartwell",
        "Forest Lake", "Hamilton Lake", "Enderley", "Western Heights", "Queenwood", "Claudelands", "Maeroa", "Deanwell",
        "Fitzroy", "Saint Andrews", "Fairview Downs", "Temple View", "Ruakura", "Bader"
    ],
    "Waimakariri": [
        "Waikuku Beach", "Rangiora", "Kaiapoi", "Woodend", "Waikuku", "Swannanoa", "Pegasus", "Loburn", "Oxford", "Cust"
    ],
    "Matamata-Piako": ["Te Aroha", "Matamata", "Waharoa"],
    "Tasman": ["Takaka", "St Arnaud", "Motueka", "Murchison", "Kaiteriteri", "Richmond", "Mapua", "Tapawera"],
    "Waitaki": ["Otematata", "Oamaru", "Lake Ohau", "North Otago"],
    "Buller": ["Westport", "Carters Beach", "Waimangaroa", "Reefton", "Hector"],
    "Gore": ["Gore", "Mataura"],
    "Lower Hutt City": [
        "Central Hutt", "Belmont", "Petone", "Wainuiomata", "Lowry Bay", "Normandale", "Maungaraki", "Waiwhetu",
        "Naenae", "Melling", "Epuni", "Avalon"
    ],
    "Napier City": ["Ahuriri", "Westshore", "Taradale", "Pirimai", "Napier South", "Napier Hill", "Greenmeadows"],
    "Westland": ["Hokitika", "Kumara"],
    "South Taranaki": ["Hawera", "Eltham", "Kaponga", "Waverley", "Normanby", "Patea", "Manaia", "Opunake"],
    "Waipa": ["Ohaupo", "Te Awamutu", "Kihikihi", "Cambridge"],
    "Hauraki": ["Karangahake", "Waihi"],
    "Porirua City": ["Plimmerton", "Whitby", "Porirua", "Pukerua Bay", "Titahi Bay"],
    "Waimate": ["Waimate"],
    "Manukau City": [
        "Papatoetoe", "Mangere Bridge", "Pakuranga", "Mellons Bay", "Manukau", "Manurewa", "Mangere East", "Mangere",
        "Dannemora", "Favona", "Beachlands", "Pakuranga Heights", "Flat Bush", "Highland Park", "Clover Park",
        "Manukau Heights", "Bucklands Beach", "Botany Downs", "Alfriston", "Otara", "Howick", "Sunnyhills", "Weymouth",
        "Totara Heights", "Randwick Park", "Somerville", "Cockle Bay", "Burswood", "Clendon Park", "Wattle Downs",
        "The Gardens", "Northpark", "Goodwood Heights", "East Tamaki", "Hillpark", "Whitford", "Maraetai",
        "Manurewa East", "Golflands", "Eastern Beach", "Mission Heights", "Farm Cove", "Half Moon Bay", "Wiri"
    ],
    "Invercargill City": [
        "Bluff", "Turnbull Thomson Park", "Appleby", "Windsor", "Gladstone", "Avenal", "Waikiwi", "Richmond",
        "Glengarry", "Invercargill", "Hawthorndale", "Strathern", "Kew", "Georgetown", "Newfield", "Kingswell",
        "Grasmere", "Clifton", "Heidelberg", "Otatara"
    ],
    "Carterton": ["Carterton", "Gladstone"],
    "Timaru": [
        "Timaru Central", "Temuka", "Maori Hill", "West End", "Washdyke", "Pleasant Point", "Marchwiel", "Geraldine",
        "Parkside", "Highfield", "Waimataitai"
    ],
    "Palmerston North City": [
        "Hokowhitu", "Palmerston North Central", "West End", "Fitzherbert", "Takaro", "Roslyn",
        "Palmerston North Surrounds", "Ashhurst", "Aokautere", "Cloverlea", "Terrace End", "Milson", "Awapuni",
        "Highbury", "Kelvin Grove", "Westbrook"
    ],
    "Grey": ["Runanga", "Cobden", "Blaketown", "Greymouth", "Moana / Lake Brunner", "Karoro"],
    "Nelson": [
        "Stepneyville", "Nelson South", "Tahunanui", "Nelson City", "Cable Bay", "Stoke", "Annesbrook", "Monaco",
        "Washington Valley", "The Wood", "Bishopdale", "Toi Toi", "Atawhai", "Enner Glynn"
    ],
    "Kaikoura": ["Kaikoura"],
    "Stratford": ["Stratford"],
    "Tararua": ["Dannevirke", "Eketahuna", "Pahiatua"],
    "Selwyn": [
        "Windwhistle", "Darfield", "Rolleston", "Leeston", "Burnham", "Lincoln", "West Melton", "Dunsandel", "Tai Tapu",
        "Selwyn Surrounds", "Springston", "Doyleston", "Prebbleton", "Sheffield"
    ],
    "Papakura": ["Opaheke", "Papakura", "Takanini", "Drury", "Conifer Grove", "Runciman", "Rosehill", "Pahurehure"],
    "Wairoa": ["Wairoa"],
    "Central Hawkes Bay": ["Waipawa", "Waipukurau and Surrounds"],
    "Wanganui": [
        "Wanganui Central", "Gonville", "College Estate", "Aramoho", "Tawhero", "Springvale", "Saint Johns Hill",
        "Wanganui East", "Durie Hill", "Castlecliff"
    ],
    "Clutha": ["Milton", "Balclutha"],
    "Rangitikei": ["Marton", "Hunterville", "Bulls"],
    "Upper Hutt City": ["Birchville", "Totara Park", "Trentham"],
    "Kawerau": ["Kawerau"],
    "South Waikato": ["Tokoroa"]
};
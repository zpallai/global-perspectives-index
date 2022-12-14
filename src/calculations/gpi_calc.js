// GPI Index Calculator

var composite = [
    {
      "id": "AGO",
      "title": "Angola",
      "corruption": 17,
      "economy": 9,
      "inequality": 6,
      "unemployment": 36
    },
    {
      "id": "ALB",
      "title": "Albania",
      "corruption": 41,
      "economy": 85,
      "inequality": 79,
      "unemployment": 22
    },
    {
      "id": "ARE",
      "title": "United Arab Emirates",
      "corruption": 88,
      "economy": 2,
      "inequality": 95,
      "unemployment": 88
    },
    {
      "id": "ARG",
      "title": "Argentina",
      "corruption": 58,
      "economy": 88,
      "inequality": 25,
      "unemployment": 26
    },
    {
      "id": "ARM",
      "title": "Armenia",
      "corruption": 69,
      "economy": 64,
      "inequality": 98,
      "unemployment": 6
    },
    {
      "id": "AUS",
      "title": "Australia",
      "corruption": 94,
      "economy": 12,
      "inequality": 62,
      "unemployment": 64
    },
    {
      "id": "AUT",
      "title": "Austria",
      "corruption": 92,
      "economy": 50,
      "inequality": 82,
      "unemployment": 53
    },
    {
      "id": "AZE",
      "title": "Azerbaijan",
      "corruption": 26,
      "economy": 61,
      "inequality": 94,
      "unemployment": 49
    },
    {
      "id": "BDI",
      "title": "Burundi",
      "corruption": 4,
      "economy": 16,
      "inequality": 38,
      "unemployment": 96
    },
    {
      "id": "BEL",
      "title": "Belgium",
      "corruption": 92,
      "economy": 69,
      "inequality": 93,
      "unemployment": 51
    },
    {
      "id": "BEN",
      "title": "Benin",
      "corruption": 56,
      "economy": 70,
      "inequality": 42,
      "unemployment": 97
    },
    {
      "id": "BFA",
      "title": "Burkina Faso",
      "corruption": 53,
      "economy": 72,
      "inequality": 12,
      "unemployment": 71
    },
    {
      "id": "BGD",
      "title": "Bangladesh",
      "corruption": 15,
      "economy": 73,
      "inequality": 73,
      "unemployment": 62
    },
    {
      "id": "BGR",
      "title": "Bulgaria",
      "corruption": 63,
      "economy": 44,
      "inequality": 33,
      "unemployment": 58
    },
    {
      "id": "BIH",
      "title": "Bosnia and Herzegovina",
      "corruption": 37,
      "economy": 76,
      "inequality": 68,
      "unemployment": 14
    },
    {
      "id": "BLR",
      "title": "Belarus",
      "corruption": 67,
      "economy": 21,
      "inequality": 99,
      "unemployment": 72
    },
    {
      "id": "BOL",
      "title": "Bolivia",
      "corruption": 29,
      "economy": 68,
      "inequality": 20,
      "unemployment": 37
    },
    {
      "id": "BRA",
      "title": "Brazil",
      "corruption": 47,
      "economy": 52,
      "inequality": 9,
      "unemployment": 17
    },
    {
      "id": "BTN",
      "title": "Bhutan",
      "corruption": 86,
      "economy": 2,
      "inequality": 44,
      "unemployment": 77
    },
    {
      "id": "BWA",
      "title": "Botswana",
      "corruption": 81,
      "economy": 93,
      "inequality": 6,
      "unemployment": 2
    },
    {
      "id": "CAF",
      "title": "Central African Republic",
      "corruption": 15,
      "economy": 10,
      "inequality": 3,
      "unemployment": 50
    },
    {
      "id": "CAN",
      "title": "Canada",
      "corruption": 94,
      "economy": 51,
      "inequality": 66,
      "unemployment": 42
    },
    {
      "id": "CHE",
      "title": "Switzerland",
      "corruption": 98,
      "economy": 37,
      "inequality": 67,
      "unemployment": 61
    },
    {
      "id": "CHL",
      "title": "Chile",
      "corruption": 85,
      "economy": 94,
      "inequality": 17,
      "unemployment": 32
    },
    {
      "id": "CHN",
      "title": "China",
      "corruption": 58,
      "economy": 82,
      "inequality": 40,
      "unemployment": 69
    },
    {
      "id": "CIV",
      "title": "Cote d'Ivoire",
      "corruption": 41,
      "economy": 75,
      "inequality": 45,
      "unemployment": 86
    },
    {
      "id": "CMR",
      "title": "Cameroon",
      "corruption": 11,
      "economy": 33,
      "inequality": 13,
      "unemployment": 82
    },
    {
      "id": "COD",
      "title": "Congo, Dem. Rep.",
      "corruption": 3,
      "economy": 65,
      "inequality": 26,
      "unemployment": 58
    },
    {
      "id": "COG",
      "title": "Congo, Rep.",
      "corruption": 4,
      "economy": 3,
      "inequality": 9,
      "unemployment": 4
    },
    {
      "id": "COL",
      "title": "Colombia",
      "corruption": 50,
      "economy": 90,
      "inequality": 4,
      "unemployment": 18
    },
    {
      "id": "COM",
      "title": "Comoros",
      "corruption": 6,
      "economy": 20,
      "inequality": 16,
      "unemployment": 30
    },
    {
      "id": "CPV",
      "title": "Cabo Verde",
      "corruption": 80,
      "economy": 74,
      "inequality": 23,
      "unemployment": 14
    },
    {
      "id": "CRI",
      "title": "Costa Rica",
      "corruption": 78,
      "economy": 81,
      "inequality": 8,
      "unemployment": 9
    },
    {
      "id": "CYP",
      "title": "Cyprus",
      "corruption": 78,
      "economy": 60,
      "inequality": 78,
      "unemployment": 54
    },
    {
      "id": "CZE",
      "title": "Czech Republic",
      "corruption": 75,
      "economy": 30,
      "inequality": 97,
      "unemployment": 89
    },
    {
      "id": "DEU",
      "title": "Germany",
      "corruption": 95,
      "economy": 24,
      "inequality": 76,
      "unemployment": 84
    },
    {
      "id": "DJI",
      "title": "Djibouti",
      "corruption": 17,
      "economy": 47,
      "inequality": 28,
      "unemployment": 1
    },
    {
      "id": "DNK",
      "title": "Denmark",
      "corruption": 100,
      "economy": 53,
      "inequality": 91,
      "unemployment": 70
    },
    {
      "id": "DOM",
      "title": "Dominican Republic",
      "corruption": 20,
      "economy": 94,
      "inequality": 34,
      "unemployment": 38
    },
    {
      "id": "DZA",
      "title": "Algeria",
      "corruption": 41,
      "economy": 39,
      "inequality": 92,
      "unemployment": 21
    },
    {
      "id": "ECU",
      "title": "Ecuador",
      "corruption": 50,
      "economy": 45,
      "inequality": 12,
      "unemployment": 50
    },
    {
      "id": "EGY",
      "title": "Egypt, Arab Rep.",
      "corruption": 33,
      "economy": 28,
      "inequality": 76,
      "unemployment": 31
    },
    {
      "id": "ESP",
      "title": "Spain",
      "corruption": 84,
      "economy": 58,
      "inequality": 62,
      "unemployment": 16
    },
    {
      "id": "EST",
      "title": "Estonia",
      "corruption": 91,
      "economy": 84,
      "inequality": 79,
      "unemployment": 52
    },
    {
      "id": "ETH",
      "title": "Ethiopia",
      "corruption": 47,
      "economy": 62,
      "inequality": 57,
      "unemployment": 83
    },
    {
      "id": "FIN",
      "title": "Finland",
      "corruption": 98,
      "economy": 32,
      "inequality": 91,
      "unemployment": 42
    },
    {
      "id": "FRA",
      "title": "France",
      "corruption": 87,
      "economy": 74,
      "inequality": 73,
      "unemployment": 38
    },
    {
      "id": "GAB",
      "title": "Gabon",
      "corruption": 26,
      "economy": 14,
      "inequality": 41,
      "unemployment": 4
    },
    {
      "id": "GBR",
      "title": "United Kingdom",
      "corruption": 94,
      "economy": 80,
      "inequality": 56,
      "unemployment": 74
    },
    {
      "id": "GEO",
      "title": "Georgia",
      "corruption": 76,
      "economy": 89,
      "inequality": 60,
      "unemployment": 27
    },
    {
      "id": "GHA",
      "title": "Ghana",
      "corruption": 60,
      "economy": 60,
      "inequality": 21,
      "unemployment": 72
    },
    {
      "id": "GIN",
      "title": "Guinea",
      "corruption": 20,
      "economy": 27,
      "inequality": 84,
      "unemployment": 52
    },
    {
      "id": "GMB",
      "title": "Gambia, The",
      "corruption": 43,
      "economy": 62,
      "inequality": 50,
      "unemployment": 26
    },
    {
      "id": "GNB",
      "title": "Guinea-Bissau",
      "corruption": 4,
      "economy": 38,
      "inequality": 59,
      "unemployment": 46
    },
    {
      "id": "GRC",
      "title": "Greece",
      "corruption": 70,
      "economy": 84,
      "inequality": 67,
      "unemployment": 15
    },
    {
      "id": "GTM",
      "title": "Guatemala",
      "corruption": 11,
      "economy": 80,
      "inequality": 10,
      "unemployment": 84
    },
    {
      "id": "GUY",
      "title": "Guyana",
      "corruption": 56,
      "economy": 99,
      "inequality": 16,
      "unemployment": 11
    },
    {
      "id": "HND",
      "title": "Honduras",
      "corruption": 8,
      "economy": 96,
      "inequality": 11,
      "unemployment": 36
    },
    {
      "id": "HRV",
      "title": "Croatia",
      "corruption": 67,
      "economy": 90,
      "inequality": 88,
      "unemployment": 34
    },
    {
      "id": "HTI",
      "title": "Haiti",
      "corruption": 3,
      "economy": 5,
      "inequality": 29,
      "unemployment": 13
    },
    {
      "id": "HUN",
      "title": "Hungary",
      "corruption": 63,
      "economy": 76,
      "inequality": 83,
      "unemployment": 78
    },
    {
      "id": "IDN",
      "title": "Indonesia",
      "corruption": 43,
      "economy": 36,
      "inequality": 42,
      "unemployment": 75
    },
    {
      "id": "IND",
      "title": "India",
      "corruption": 53,
      "economy": 86,
      "inequality": 52,
      "unemployment": 55
    },
    {
      "id": "IRL",
      "title": "Ireland",
      "corruption": 89,
      "economy": 97,
      "inequality": 81,
      "unemployment": 48
    },
    {
      "id": "IRN",
      "title": "Iran, Islamic Rep.",
      "corruption": 11,
      "economy": 16,
      "inequality": 30,
      "unemployment": 25
    },
    {
      "id": "IRQ",
      "title": "Iraq",
      "corruption": 6,
      "economy": 24,
      "inequality": 85,
      "unemployment": 18
    },
    {
      "id": "ISL",
      "title": "Iceland",
      "corruption": 91,
      "economy": 38,
      "inequality": 94,
      "unemployment": 59
    },
    {
      "id": "ISR",
      "title": "Israel",
      "corruption": 81,
      "economy": 83,
      "inequality": 38,
      "unemployment": 66
    },
    {
      "id": "ITA",
      "title": "Italy",
      "corruption": 73,
      "economy": 71,
      "inequality": 55,
      "unemployment": 29
    },
    {
      "id": "JAM",
      "title": "Jamaica",
      "corruption": 63,
      "economy": 52,
      "inequality": 14,
      "unemployment": 32
    },
    {
      "id": "JOR",
      "title": "Jordan",
      "corruption": 69,
      "economy": 18,
      "inequality": 65,
      "unemployment": 8
    },
    {
      "id": "JPN",
      "title": "Japan",
      "corruption": 90,
      "economy": 15,
      "inequality": 69,
      "unemployment": 90
    },
    {
      "id": "KAZ",
      "title": "Kazakhstan",
      "corruption": 47,
      "economy": 41,
      "inequality": 90,
      "unemployment": 68
    },
    {
      "id": "KGZ",
      "title": "Kyrgyz Republic",
      "corruption": 29,
      "economy": 34,
      "inequality": 88,
      "unemployment": 33
    },
    {
      "id": "KOR",
      "title": "Korea, Rep.",
      "corruption": 83,
      "economy": 42,
      "inequality": 77,
      "unemployment": 85
    },
    {
      "id": "LAO",
      "title": "Lao PDR",
      "corruption": 23,
      "economy": 22,
      "inequality": 37,
      "unemployment": 98
    },
    {
      "id": "LBN",
      "title": "Lebanon",
      "corruption": 11,
      "economy": 1,
      "inequality": 75,
      "unemployment": 16
    },
    {
      "id": "LBR",
      "title": "Liberia",
      "corruption": 20,
      "economy": 42,
      "inequality": 54,
      "unemployment": 78
    },
    {
      "id": "LCA",
      "title": "St. Lucia",
      "corruption": 76,
      "economy": 70,
      "inequality": 7,
      "unemployment": 10
    },
    {
      "id": "LKA",
      "title": "Sri Lanka",
      "corruption": 47,
      "economy": 36,
      "inequality": 36,
      "unemployment": 60
    },
    {
      "id": "LSO",
      "title": "Lesotho",
      "corruption": 56,
      "economy": 10,
      "inequality": 17,
      "unemployment": 3
    },
    {
      "id": "LTU",
      "title": "Lithuania",
      "corruption": 81,
      "economy": 57,
      "inequality": 54,
      "unemployment": 39
    },
    {
      "id": "LUX",
      "title": "Luxembourg",
      "corruption": 95,
      "economy": 72,
      "inequality": 63,
      "unemployment": 62
    },
    {
      "id": "LVA",
      "title": "Latvia",
      "corruption": 78,
      "economy": 50,
      "inequality": 60,
      "unemployment": 41
    },
    {
      "id": "MAR",
      "title": "Morocco",
      "corruption": 53,
      "economy": 77,
      "inequality": 35,
      "unemployment": 24
    },
    {
      "id": "MDA",
      "title": "Moldova",
      "corruption": 35,
      "economy": 98,
      "inequality": 95,
      "unemployment": 81
    },
    {
      "id": "MDG",
      "title": "Madagascar",
      "corruption": 11,
      "economy": 49,
      "inequality": 22,
      "unemployment": 92
    },
    {
      "id": "MDV",
      "title": "Maldives",
      "corruption": 60,
      "economy": 100,
      "inequality": 86,
      "unemployment": 54
    },
    {
      "id": "MEX",
      "title": "Mexico",
      "corruption": 29,
      "economy": 54,
      "inequality": 15,
      "unemployment": 76
    },
    {
      "id": "MKD",
      "title": "North Macedonia",
      "corruption": 37,
      "economy": 40,
      "inequality": 68,
      "unemployment": 12
    },
    {
      "id": "MLI",
      "title": "Mali",
      "corruption": 26,
      "economy": 26,
      "inequality": 49,
      "unemployment": 40
    },
    {
      "id": "MLT",
      "title": "Malta",
      "corruption": 73,
      "economy": 87,
      "inequality": 78,
      "unemployment": 86
    },
    {
      "id": "MMR",
      "title": "Myanmar",
      "corruption": 20,
      "economy": 0,
      "inequality": 80,
      "unemployment": 94
    },
    {
      "id": "MNE",
      "title": "Montenegro",
      "corruption": 65,
      "economy": 95,
      "inequality": 47,
      "unemployment": 8
    },
    {
      "id": "MNG",
      "title": "Mongolia",
      "corruption": 37,
      "economy": 12,
      "inequality": 72,
      "unemployment": 45
    },
    {
      "id": "MOZ",
      "title": "Mozambique",
      "corruption": 11,
      "economy": 18,
      "inequality": 5,
      "unemployment": 80
    },
    {
      "id": "MRT",
      "title": "Mauritania",
      "corruption": 23,
      "economy": 19,
      "inequality": 72,
      "unemployment": 24
    },
    {
      "id": "MUS",
      "title": "Mauritius",
      "corruption": 73,
      "economy": 43,
      "inequality": 47,
      "unemployment": 43
    },
    {
      "id": "MWI",
      "title": "Malawi",
      "corruption": 26,
      "economy": 23,
      "inequality": 39,
      "unemployment": 46
    },
    {
      "id": "MYS",
      "title": "Malaysia",
      "corruption": 71,
      "economy": 28,
      "inequality": 29,
      "unemployment": 73
    },
    {
      "id": "NAM",
      "title": "Namibia",
      "corruption": 71,
      "economy": 20,
      "inequality": 1,
      "unemployment": 5
    },
    {
      "id": "NER",
      "title": "Niger",
      "corruption": 30,
      "economy": 11,
      "inequality": 44,
      "unemployment": 100
    },
    {
      "id": "NGA",
      "title": "Nigeria",
      "corruption": 11,
      "economy": 35,
      "inequality": 56,
      "unemployment": 30
    },
    {
      "id": "NIC",
      "title": "Nicaragua",
      "corruption": 8,
      "economy": 88,
      "inequality": 14,
      "unemployment": 56
    },
    {
      "id": "NLD",
      "title": "Netherlands",
      "corruption": 96,
      "economy": 58,
      "inequality": 87,
      "unemployment": 79
    },
    {
      "id": "NOR",
      "title": "Norway",
      "corruption": 97,
      "economy": 40,
      "inequality": 91,
      "unemployment": 67
    },
    {
      "id": "NPL",
      "title": "Nepal",
      "corruption": 33,
      "economy": 46,
      "inequality": 70,
      "unemployment": 65
    },
    {
      "id": "PAK",
      "title": "Pakistan",
      "corruption": 29,
      "economy": 67,
      "inequality": 84,
      "unemployment": 76
    },
    {
      "id": "PAN",
      "title": "Panama",
      "corruption": 37,
      "economy": 98,
      "inequality": 8,
      "unemployment": 22
    },
    {
      "id": "PER",
      "title": "Peru",
      "corruption": 47,
      "economy": 96,
      "inequality": 18,
      "unemployment": 68
    },
    {
      "id": "PHL",
      "title": "Philippines",
      "corruption": 35,
      "economy": 64,
      "inequality": 25,
      "unemployment": 92
    },
    {
      "id": "PNG",
      "title": "Papua New Guinea",
      "corruption": 17,
      "economy": 13,
      "inequality": 27,
      "unemployment": 90
    },
    {
      "id": "POL",
      "title": "Poland",
      "corruption": 76,
      "economy": 66,
      "inequality": 82,
      "unemployment": 87
    },
    {
      "id": "PRT",
      "title": "Portugal",
      "corruption": 83,
      "economy": 56,
      "inequality": 70,
      "unemployment": 48
    },
    {
      "id": "PRY",
      "title": "Paraguay",
      "corruption": 20,
      "economy": 44,
      "inequality": 21,
      "unemployment": 44
    },
    {
      "id": "ROU",
      "title": "Romania",
      "corruption": 63,
      "economy": 66,
      "inequality": 59,
      "unemployment": 63
    },
    {
      "id": "RUS",
      "title": "Russian Federation",
      "corruption": 26,
      "economy": 55,
      "inequality": 50,
      "unemployment": 66
    },
    {
      "id": "RWA",
      "title": "Rwanda",
      "corruption": 75,
      "economy": 92,
      "inequality": 19,
      "unemployment": 96
    },
    {
      "id": "SDN",
      "title": "Sudan",
      "corruption": 2,
      "economy": 8,
      "inequality": 63,
      "unemployment": 7
    },
    {
      "id": "SEN",
      "title": "Senegal",
      "corruption": 65,
      "economy": 68,
      "inequality": 40,
      "unemployment": 82
    },
    {
      "id": "SLB",
      "title": "Solomon Islands",
      "corruption": 58,
      "economy": 7,
      "inequality": 46,
      "unemployment": 99
    },
    {
      "id": "SLE",
      "title": "Sierra Leone",
      "corruption": 33,
      "economy": 26,
      "inequality": 52,
      "unemployment": 60
    },
    {
      "id": "SLV",
      "title": "El Salvador",
      "corruption": 41,
      "economy": 91,
      "inequality": 37,
      "unemployment": 56
    },
    {
      "id": "SOM",
      "title": "Somalia",
      "corruption": 0,
      "economy": 29,
      "inequality": 47,
      "unemployment": 6
    },
    {
      "id": "SRB",
      "title": "Serbia",
      "corruption": 47,
      "economy": 78,
      "inequality": 60,
      "unemployment": 23
    },
    {
      "id": "STP",
      "title": "Sao Tome and Principe",
      "corruption": 67,
      "economy": 17,
      "inequality": 31,
      "unemployment": 12
    },
    {
      "id": "SUR",
      "title": "Suriname",
      "corruption": 47,
      "economy": 4,
      "inequality": 2,
      "unemployment": 28
    },
    {
      "id": "SVK",
      "title": "Slovak Republic",
      "corruption": 69,
      "economy": 25,
      "inequality": 100,
      "unemployment": 47
    },
    {
      "id": "SVN",
      "title": "Slovenia",
      "corruption": 81,
      "economy": 82,
      "inequality": 99,
      "unemployment": 74
    },
    {
      "id": "SWE",
      "title": "Sweden",
      "corruption": 98,
      "economy": 54,
      "inequality": 86,
      "unemployment": 35
    },
    {
      "id": "SWZ",
      "title": "Eswatini",
      "corruption": 33,
      "economy": 79,
      "inequality": 4,
      "unemployment": 2
    },
    {
      "id": "TCD",
      "title": "Chad",
      "corruption": 6,
      "economy": 6,
      "inequality": 43,
      "unemployment": 95
    },
    {
      "id": "TGO",
      "title": "Togo",
      "corruption": 23,
      "economy": 59,
      "inequality": 23,
      "unemployment": 80
    },
    {
      "id": "THA",
      "title": "Thailand",
      "corruption": 41,
      "economy": 14,
      "inequality": 57,
      "unemployment": 98
    },
    {
      "id": "TJK",
      "title": "Tajikistan",
      "corruption": 11,
      "economy": 86,
      "inequality": 64,
      "unemployment": 40
    },
    {
      "id": "TLS",
      "title": "Timor-Leste",
      "corruption": 53,
      "economy": 48,
      "inequality": 89,
      "unemployment": 64
    },
    {
      "id": "TTO",
      "title": "Trinidad and Tobago",
      "corruption": 53,
      "economy": 6,
      "inequality": 33,
      "unemployment": 70
    },
    {
      "id": "TUN",
      "title": "Tunisia",
      "corruption": 63,
      "economy": 30,
      "inequality": 70,
      "unemployment": 10
    },
    {
      "id": "TUR",
      "title": "Turkiye",
      "corruption": 53,
      "economy": 92,
      "inequality": 27,
      "unemployment": 20
    },
    {
      "id": "TZA",
      "title": "Tanzania",
      "corruption": 47,
      "economy": 46,
      "inequality": 32,
      "unemployment": 91
    },
    {
      "id": "UGA",
      "title": "Uganda",
      "corruption": 17,
      "economy": 31,
      "inequality": 22,
      "unemployment": 88
    },
    {
      "id": "UKR",
      "title": "Ukraine",
      "corruption": 33,
      "economy": 32,
      "inequality": 96,
      "unemployment": 34
    },
    {
      "id": "URY",
      "title": "Uruguay",
      "corruption": 88,
      "economy": 48,
      "inequality": 34,
      "unemployment": 28
    },
    {
      "id": "USA",
      "title": "United States",
      "corruption": 85,
      "economy": 63,
      "inequality": 28,
      "unemployment": 57
    },
    {
      "id": "UZB",
      "title": "Uzbekistan",
      "corruption": 15,
      "economy": 78,
      "inequality": 54,
      "unemployment": 44
    },
    {
      "id": "VNM",
      "title": "Vietnam",
      "corruption": 41,
      "economy": 22,
      "inequality": 52,
      "unemployment": 94
    },
    {
      "id": "VUT",
      "title": "Vanuatu",
      "corruption": 60,
      "economy": 8,
      "inequality": 74,
      "unemployment": 93
    },
    {
      "id": "YEM",
      "title": "Yemen, Rep.",
      "corruption": 1,
      "economy": 4,
      "inequality": 48,
      "unemployment": 19
    },
    {
      "id": "ZAF",
      "title": "South Africa",
      "corruption": 63,
      "economy": 56,
      "inequality": 0,
      "unemployment": 0
    },
    {
      "id": "ZMB",
      "title": "Zambia",
      "corruption": 33,
      "economy": 34,
      "inequality": 2,
      "unemployment": 20
    }
  ]

// Index Weighting
// Corruption: 21%
// Economy: 14%
// Inequality: 12%
// Unemployment: 10%

function index_weighting (corruption, economy, inequality, unemployment) {
    var weighting = 100/57;
    var corruption_weight = 21 * weighting;
    var economy_weight = 14 * weighting;
    var inequality_weight = 12 * weighting;
    var unemployment_weight = 10 * weighting;

    return Math.round(((corruption * corruption_weight) + (economy * economy_weight) + 
    (inequality * inequality_weight) + (unemployment * unemployment_weight))/100);
}

arrayList = [];
    
for (var i in composite) {
  var index = index_weighting(composite[i].corruption, composite[i].economy, 
    composite[i].inequality, composite[i].unemployment)  
  var obj = {
      id: composite[i].id, 
      title: composite[i].title, 
      corruption: composite[i].corruption, 
      economy: composite[i].economy, 
      inequality: composite[i].inequality, 
      unemployment: composite[i].unemployment, 
      index: index
  };
    arrayList.push(obj);
}
      
console.log(arrayList);


for (var j in composite) {
    console.log(composite[j].title);
    console.log("corruption: " + composite[j].corruption);
    console.log("economy: " + composite[j].economy);
    console.log("inequality: " + composite[j].inequality);
    console.log("unemployment: " + composite[j].unemployment);
    total_composite = composite[j].corruption + composite[j].economy + 
    composite[j].inequality + composite[j].unemployment;
    console.log("Total Index: " + total_composite);
    console.log("Final Index: " + total_composite/4);
    console.log("\n\n");
}













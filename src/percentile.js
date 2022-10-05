// Find percentile of value in array 

var composite = [
  {
    "id": "AGO",
    "title": "Angola",
    "corruption": 17,
    "economy": 9,
    "inequality": 6,
    "unemployment": 36,
    "index": 16
  },
  {
    "id": "ALB",
    "title": "Albania",
    "corruption": 41,
    "economy": 85,
    "inequality": 79,
    "unemployment": 22,
    "index": 56
  },
  {
    "id": "ARE",
    "title": "United Arab Emirates",
    "corruption": 88,
    "economy": 2,
    "inequality": 95,
    "unemployment": 88,
    "index": 68
  },
  {
    "id": "ARG",
    "title": "Argentina",
    "corruption": 58,
    "economy": 88,
    "inequality": 25,
    "unemployment": 26,
    "index": 53
  },
  {
    "id": "ARM",
    "title": "Armenia",
    "corruption": 69,
    "economy": 64,
    "inequality": 98,
    "unemployment": 6,
    "index": 63
  },
  {
    "id": "AUS",
    "title": "Australia",
    "corruption": 94,
    "economy": 12,
    "inequality": 62,
    "unemployment": 64,
    "index": 62
  },
  {
    "id": "AUT",
    "title": "Austria",
    "corruption": 92,
    "economy": 50,
    "inequality": 82,
    "unemployment": 53,
    "index": 73
  },
  {
    "id": "AZE",
    "title": "Azerbaijan",
    "corruption": 26,
    "economy": 61,
    "inequality": 94,
    "unemployment": 49,
    "index": 53
  },
  {
    "id": "BDI",
    "title": "Burundi",
    "corruption": 4,
    "economy": 16,
    "inequality": 38,
    "unemployment": 96,
    "index": 30
  },
  {
    "id": "BEL",
    "title": "Belgium",
    "corruption": 92,
    "economy": 69,
    "inequality": 93,
    "unemployment": 51,
    "index": 79
  },
  {
    "id": "BEN",
    "title": "Benin",
    "corruption": 56,
    "economy": 70,
    "inequality": 42,
    "unemployment": 97,
    "index": 64
  },
  {
    "id": "BFA",
    "title": "Burkina Faso",
    "corruption": 53,
    "economy": 72,
    "inequality": 12,
    "unemployment": 71,
    "index": 52
  },
  {
    "id": "BGD",
    "title": "Bangladesh",
    "corruption": 15,
    "economy": 73,
    "inequality": 73,
    "unemployment": 62,
    "index": 50
  },
  {
    "id": "BGR",
    "title": "Bulgaria",
    "corruption": 63,
    "economy": 44,
    "inequality": 33,
    "unemployment": 58,
    "index": 51
  },
  {
    "id": "BIH",
    "title": "Bosnia and Herzegovina",
    "corruption": 37,
    "economy": 76,
    "inequality": 68,
    "unemployment": 14,
    "index": 49
  },
  {
    "id": "BLR",
    "title": "Belarus",
    "corruption": 67,
    "economy": 21,
    "inequality": 99,
    "unemployment": 72,
    "index": 63
  },
  {
    "id": "BOL",
    "title": "Bolivia",
    "corruption": 29,
    "economy": 68,
    "inequality": 20,
    "unemployment": 37,
    "index": 38
  },
  {
    "id": "BRA",
    "title": "Brazil",
    "corruption": 47,
    "economy": 52,
    "inequality": 9,
    "unemployment": 17,
    "index": 35
  },
  {
    "id": "BTN",
    "title": "Bhutan",
    "corruption": 86,
    "economy": 2,
    "inequality": 44,
    "unemployment": 77,
    "index": 55
  },
  {
    "id": "BWA",
    "title": "Botswana",
    "corruption": 81,
    "economy": 93,
    "inequality": 6,
    "unemployment": 2,
    "index": 54
  },
  {
    "id": "CAF",
    "title": "Central African Republic",
    "corruption": 15,
    "economy": 10,
    "inequality": 3,
    "unemployment": 50,
    "index": 17
  },
  {
    "id": "CAN",
    "title": "Canada",
    "corruption": 94,
    "economy": 51,
    "inequality": 66,
    "unemployment": 42,
    "index": 68
  },
  {
    "id": "CHE",
    "title": "Switzerland",
    "corruption": 98,
    "economy": 37,
    "inequality": 67,
    "unemployment": 61,
    "index": 70
  },
  {
    "id": "CHL",
    "title": "Chile",
    "corruption": 85,
    "economy": 94,
    "inequality": 17,
    "unemployment": 32,
    "index": 64
  },
  {
    "id": "CHN",
    "title": "China",
    "corruption": 58,
    "economy": 82,
    "inequality": 40,
    "unemployment": 69,
    "index": 62
  },
  {
    "id": "CIV",
    "title": "Cote d'Ivoire",
    "corruption": 41,
    "economy": 75,
    "inequality": 45,
    "unemployment": 86,
    "index": 58
  },
  {
    "id": "CMR",
    "title": "Cameroon",
    "corruption": 11,
    "economy": 33,
    "inequality": 13,
    "unemployment": 82,
    "index": 29
  },
  {
    "id": "COD",
    "title": "Congo, Dem. Rep.",
    "corruption": 3,
    "economy": 65,
    "inequality": 26,
    "unemployment": 58,
    "index": 33
  },
  {
    "id": "COG",
    "title": "Congo, Rep.",
    "corruption": 4,
    "economy": 3,
    "inequality": 9,
    "unemployment": 4,
    "index": 5
  },
  {
    "id": "COL",
    "title": "Colombia",
    "corruption": 50,
    "economy": 90,
    "inequality": 4,
    "unemployment": 18,
    "index": 45
  },
  {
    "id": "COM",
    "title": "Comoros",
    "corruption": 6,
    "economy": 20,
    "inequality": 16,
    "unemployment": 30,
    "index": 16
  },
  {
    "id": "CPV",
    "title": "Cabo Verde",
    "corruption": 80,
    "economy": 74,
    "inequality": 23,
    "unemployment": 14,
    "index": 55
  },
  {
    "id": "CRI",
    "title": "Costa Rica",
    "corruption": 78,
    "economy": 81,
    "inequality": 8,
    "unemployment": 9,
    "index": 52
  },
  {
    "id": "CYP",
    "title": "Cyprus",
    "corruption": 78,
    "economy": 60,
    "inequality": 78,
    "unemployment": 54,
    "index": 69
  },
  {
    "id": "CZE",
    "title": "Czech Republic",
    "corruption": 75,
    "economy": 30,
    "inequality": 97,
    "unemployment": 89,
    "index": 71
  },
  {
    "id": "DEU",
    "title": "Germany",
    "corruption": 95,
    "economy": 24,
    "inequality": 76,
    "unemployment": 84,
    "index": 72
  },
  {
    "id": "DJI",
    "title": "Djibouti",
    "corruption": 17,
    "economy": 47,
    "inequality": 28,
    "unemployment": 1,
    "index": 24
  },
  {
    "id": "DNK",
    "title": "Denmark",
    "corruption": 100,
    "economy": 53,
    "inequality": 91,
    "unemployment": 70,
    "index": 81
  },
  {
    "id": "DOM",
    "title": "Dominican Republic",
    "corruption": 20,
    "economy": 94,
    "inequality": 34,
    "unemployment": 38,
    "index": 44
  },
  {
    "id": "DZA",
    "title": "Algeria",
    "corruption": 41,
    "economy": 39,
    "inequality": 92,
    "unemployment": 21,
    "index": 48
  },
  {
    "id": "ECU",
    "title": "Ecuador",
    "corruption": 50,
    "economy": 45,
    "inequality": 12,
    "unemployment": 50,
    "index": 41
  },
  {
    "id": "EGY",
    "title": "Egypt, Arab Rep.",
    "corruption": 33,
    "economy": 28,
    "inequality": 76,
    "unemployment": 31,
    "index": 40
  },
  {
    "id": "ESP",
    "title": "Spain",
    "corruption": 84,
    "economy": 58,
    "inequality": 62,
    "unemployment": 16,
    "index": 61
  },
  {
    "id": "EST",
    "title": "Estonia",
    "corruption": 91,
    "economy": 84,
    "inequality": 79,
    "unemployment": 52,
    "index": 80
  },
  {
    "id": "ETH",
    "title": "Ethiopia",
    "corruption": 47,
    "economy": 62,
    "inequality": 57,
    "unemployment": 83,
    "index": 59
  },
  {
    "id": "FIN",
    "title": "Finland",
    "corruption": 98,
    "economy": 32,
    "inequality": 91,
    "unemployment": 42,
    "index": 70
  },
  {
    "id": "FRA",
    "title": "France",
    "corruption": 87,
    "economy": 74,
    "inequality": 73,
    "unemployment": 38,
    "index": 72
  },
  {
    "id": "GAB",
    "title": "Gabon",
    "corruption": 26,
    "economy": 14,
    "inequality": 41,
    "unemployment": 4,
    "index": 22
  },
  {
    "id": "GBR",
    "title": "United Kingdom",
    "corruption": 94,
    "economy": 80,
    "inequality": 56,
    "unemployment": 74,
    "index": 79
  },
  {
    "id": "GEO",
    "title": "Georgia",
    "corruption": 76,
    "economy": 89,
    "inequality": 60,
    "unemployment": 27,
    "index": 67
  },
  {
    "id": "GHA",
    "title": "Ghana",
    "corruption": 60,
    "economy": 60,
    "inequality": 21,
    "unemployment": 72,
    "index": 54
  },
  {
    "id": "GIN",
    "title": "Guinea",
    "corruption": 20,
    "economy": 27,
    "inequality": 84,
    "unemployment": 52,
    "index": 41
  },
  {
    "id": "GMB",
    "title": "Gambia, The",
    "corruption": 43,
    "economy": 62,
    "inequality": 50,
    "unemployment": 26,
    "index": 46
  },
  {
    "id": "GNB",
    "title": "Guinea-Bissau",
    "corruption": 4,
    "economy": 38,
    "inequality": 59,
    "unemployment": 46,
    "index": 31
  },
  {
    "id": "GRC",
    "title": "Greece",
    "corruption": 70,
    "economy": 84,
    "inequality": 67,
    "unemployment": 15,
    "index": 63
  },
  {
    "id": "GTM",
    "title": "Guatemala",
    "corruption": 11,
    "economy": 80,
    "inequality": 10,
    "unemployment": 84,
    "index": 41
  },
  {
    "id": "GUY",
    "title": "Guyana",
    "corruption": 56,
    "economy": 99,
    "inequality": 16,
    "unemployment": 11,
    "index": 50
  },
  {
    "id": "HND",
    "title": "Honduras",
    "corruption": 8,
    "economy": 96,
    "inequality": 11,
    "unemployment": 36,
    "index": 35
  },
  {
    "id": "HRV",
    "title": "Croatia",
    "corruption": 67,
    "economy": 90,
    "inequality": 88,
    "unemployment": 34,
    "index": 71
  },
  {
    "id": "HTI",
    "title": "Haiti",
    "corruption": 3,
    "economy": 5,
    "inequality": 29,
    "unemployment": 13,
    "index": 11
  },
  {
    "id": "HUN",
    "title": "Hungary",
    "corruption": 63,
    "economy": 76,
    "inequality": 83,
    "unemployment": 78,
    "index": 73
  },
  {
    "id": "IDN",
    "title": "Indonesia",
    "corruption": 43,
    "economy": 36,
    "inequality": 42,
    "unemployment": 75,
    "index": 47
  },
  {
    "id": "IND",
    "title": "India",
    "corruption": 53,
    "economy": 86,
    "inequality": 52,
    "unemployment": 55,
    "index": 61
  },
  {
    "id": "IRL",
    "title": "Ireland",
    "corruption": 89,
    "economy": 97,
    "inequality": 81,
    "unemployment": 48,
    "index": 82
  },
  {
    "id": "IRN",
    "title": "Iran, Islamic Rep.",
    "corruption": 11,
    "economy": 16,
    "inequality": 30,
    "unemployment": 25,
    "index": 19
  },
  {
    "id": "IRQ",
    "title": "Iraq",
    "corruption": 6,
    "economy": 24,
    "inequality": 85,
    "unemployment": 18,
    "index": 29
  },
  {
    "id": "ISL",
    "title": "Iceland",
    "corruption": 91,
    "economy": 38,
    "inequality": 94,
    "unemployment": 59,
    "index": 73
  },
  {
    "id": "ISR",
    "title": "Israel",
    "corruption": 81,
    "economy": 83,
    "inequality": 38,
    "unemployment": 66,
    "index": 70
  },
  {
    "id": "ITA",
    "title": "Italy",
    "corruption": 73,
    "economy": 71,
    "inequality": 55,
    "unemployment": 29,
    "index": 61
  },
  {
    "id": "JAM",
    "title": "Jamaica",
    "corruption": 63,
    "economy": 52,
    "inequality": 14,
    "unemployment": 32,
    "index": 45
  },
  {
    "id": "JOR",
    "title": "Jordan",
    "corruption": 69,
    "economy": 18,
    "inequality": 65,
    "unemployment": 8,
    "index": 45
  },
  {
    "id": "JPN",
    "title": "Japan",
    "corruption": 90,
    "economy": 15,
    "inequality": 69,
    "unemployment": 90,
    "index": 67
  },
  {
    "id": "KAZ",
    "title": "Kazakhstan",
    "corruption": 47,
    "economy": 41,
    "inequality": 90,
    "unemployment": 68,
    "index": 58
  },
  {
    "id": "KGZ",
    "title": "Kyrgyz Republic",
    "corruption": 29,
    "economy": 34,
    "inequality": 88,
    "unemployment": 33,
    "index": 43
  },
  {
    "id": "KOR",
    "title": "Korea, Rep.",
    "corruption": 83,
    "economy": 42,
    "inequality": 77,
    "unemployment": 85,
    "index": 72
  },
  {
    "id": "LAO",
    "title": "Lao PDR",
    "corruption": 23,
    "economy": 22,
    "inequality": 37,
    "unemployment": 98,
    "index": 39
  },
  {
    "id": "LBN",
    "title": "Lebanon",
    "corruption": 11,
    "economy": 1,
    "inequality": 75,
    "unemployment": 16,
    "index": 23
  },
  {
    "id": "LBR",
    "title": "Liberia",
    "corruption": 20,
    "economy": 42,
    "inequality": 54,
    "unemployment": 78,
    "index": 43
  },
  {
    "id": "LCA",
    "title": "St. Lucia",
    "corruption": 76,
    "economy": 70,
    "inequality": 7,
    "unemployment": 10,
    "index": 48
  },
  {
    "id": "LKA",
    "title": "Sri Lanka",
    "corruption": 47,
    "economy": 36,
    "inequality": 36,
    "unemployment": 60,
    "index": 44
  },
  {
    "id": "LSO",
    "title": "Lesotho",
    "corruption": 56,
    "economy": 10,
    "inequality": 17,
    "unemployment": 3,
    "index": 27
  },
  {
    "id": "LTU",
    "title": "Lithuania",
    "corruption": 81,
    "economy": 57,
    "inequality": 54,
    "unemployment": 39,
    "index": 62
  },
  {
    "id": "LUX",
    "title": "Luxembourg",
    "corruption": 95,
    "economy": 72,
    "inequality": 63,
    "unemployment": 62,
    "index": 77
  },
  {
    "id": "LVA",
    "title": "Latvia",
    "corruption": 78,
    "economy": 50,
    "inequality": 60,
    "unemployment": 41,
    "index": 61
  },
  {
    "id": "MAR",
    "title": "Morocco",
    "corruption": 53,
    "economy": 77,
    "inequality": 35,
    "unemployment": 24,
    "index": 50
  },
  {
    "id": "MDA",
    "title": "Moldova",
    "corruption": 35,
    "economy": 98,
    "inequality": 95,
    "unemployment": 81,
    "index": 71
  },
  {
    "id": "MDG",
    "title": "Madagascar",
    "corruption": 11,
    "economy": 49,
    "inequality": 22,
    "unemployment": 92,
    "index": 37
  },
  {
    "id": "MDV",
    "title": "Maldives",
    "corruption": 60,
    "economy": 100,
    "inequality": 86,
    "unemployment": 54,
    "index": 74
  },
  {
    "id": "MEX",
    "title": "Mexico",
    "corruption": 29,
    "economy": 54,
    "inequality": 15,
    "unemployment": 76,
    "index": 40
  },
  {
    "id": "MKD",
    "title": "North Macedonia",
    "corruption": 37,
    "economy": 40,
    "inequality": 68,
    "unemployment": 12,
    "index": 40
  },
  {
    "id": "MLI",
    "title": "Mali",
    "corruption": 26,
    "economy": 26,
    "inequality": 49,
    "unemployment": 40,
    "index": 33
  },
  {
    "id": "MLT",
    "title": "Malta",
    "corruption": 73,
    "economy": 87,
    "inequality": 78,
    "unemployment": 86,
    "index": 80
  },
  {
    "id": "MMR",
    "title": "Myanmar",
    "corruption": 20,
    "economy": 0,
    "inequality": 80,
    "unemployment": 94,
    "index": 41
  },
  {
    "id": "MNE",
    "title": "Montenegro",
    "corruption": 65,
    "economy": 95,
    "inequality": 47,
    "unemployment": 8,
    "index": 59
  },
  {
    "id": "MNG",
    "title": "Mongolia",
    "corruption": 37,
    "economy": 12,
    "inequality": 72,
    "unemployment": 45,
    "index": 40
  },
  {
    "id": "MOZ",
    "title": "Mozambique",
    "corruption": 11,
    "economy": 18,
    "inequality": 5,
    "unemployment": 80,
    "index": 24
  },
  {
    "id": "MRT",
    "title": "Mauritania",
    "corruption": 23,
    "economy": 19,
    "inequality": 72,
    "unemployment": 24,
    "index": 33
  },
  {
    "id": "MUS",
    "title": "Mauritius",
    "corruption": 73,
    "economy": 43,
    "inequality": 47,
    "unemployment": 43,
    "index": 55
  },
  {
    "id": "MWI",
    "title": "Malawi",
    "corruption": 26,
    "economy": 23,
    "inequality": 39,
    "unemployment": 46,
    "index": 32
  },
  {
    "id": "MYS",
    "title": "Malaysia",
    "corruption": 71,
    "economy": 28,
    "inequality": 29,
    "unemployment": 73,
    "index": 52
  },
  {
    "id": "NAM",
    "title": "Namibia",
    "corruption": 71,
    "economy": 20,
    "inequality": 1,
    "unemployment": 5,
    "index": 32
  },
  {
    "id": "NER",
    "title": "Niger",
    "corruption": 30,
    "economy": 11,
    "inequality": 44,
    "unemployment": 100,
    "index": 41
  },
  {
    "id": "NGA",
    "title": "Nigeria",
    "corruption": 11,
    "economy": 35,
    "inequality": 56,
    "unemployment": 30,
    "index": 30
  },
  {
    "id": "NIC",
    "title": "Nicaragua",
    "corruption": 8,
    "economy": 88,
    "inequality": 14,
    "unemployment": 56,
    "index": 37
  },
  {
    "id": "NLD",
    "title": "Netherlands",
    "corruption": 96,
    "economy": 58,
    "inequality": 87,
    "unemployment": 79,
    "index": 82
  },
  {
    "id": "NOR",
    "title": "Norway",
    "corruption": 97,
    "economy": 40,
    "inequality": 91,
    "unemployment": 67,
    "index": 76
  },
  {
    "id": "NPL",
    "title": "Nepal",
    "corruption": 33,
    "economy": 46,
    "inequality": 70,
    "unemployment": 65,
    "index": 50
  },
  {
    "id": "PAK",
    "title": "Pakistan",
    "corruption": 29,
    "economy": 67,
    "inequality": 84,
    "unemployment": 76,
    "index": 58
  },
  {
    "id": "PAN",
    "title": "Panama",
    "corruption": 37,
    "economy": 98,
    "inequality": 8,
    "unemployment": 22,
    "index": 43
  },
  {
    "id": "PER",
    "title": "Peru",
    "corruption": 47,
    "economy": 96,
    "inequality": 18,
    "unemployment": 68,
    "index": 57
  },
  {
    "id": "PHL",
    "title": "Philippines",
    "corruption": 35,
    "economy": 64,
    "inequality": 25,
    "unemployment": 92,
    "index": 50
  },
  {
    "id": "PNG",
    "title": "Papua New Guinea",
    "corruption": 17,
    "economy": 13,
    "inequality": 27,
    "unemployment": 90,
    "index": 31
  },
  {
    "id": "POL",
    "title": "Poland",
    "corruption": 76,
    "economy": 66,
    "inequality": 82,
    "unemployment": 87,
    "index": 77
  },
  {
    "id": "PRT",
    "title": "Portugal",
    "corruption": 83,
    "economy": 56,
    "inequality": 70,
    "unemployment": 48,
    "index": 67
  },
  {
    "id": "PRY",
    "title": "Paraguay",
    "corruption": 20,
    "economy": 44,
    "inequality": 21,
    "unemployment": 44,
    "index": 30
  },
  {
    "id": "ROU",
    "title": "Romania",
    "corruption": 63,
    "economy": 66,
    "inequality": 59,
    "unemployment": 63,
    "index": 63
  },
  {
    "id": "RUS",
    "title": "Russian Federation",
    "corruption": 26,
    "economy": 55,
    "inequality": 50,
    "unemployment": 66,
    "index": 45
  },
  {
    "id": "RWA",
    "title": "Rwanda",
    "corruption": 75,
    "economy": 92,
    "inequality": 19,
    "unemployment": 96,
    "index": 71
  },
  {
    "id": "SDN",
    "title": "Sudan",
    "corruption": 2,
    "economy": 8,
    "inequality": 63,
    "unemployment": 7,
    "index": 17
  },
  {
    "id": "SEN",
    "title": "Senegal",
    "corruption": 65,
    "economy": 68,
    "inequality": 40,
    "unemployment": 82,
    "index": 63
  },
  {
    "id": "SLB",
    "title": "Solomon Islands",
    "corruption": 58,
    "economy": 7,
    "inequality": 46,
    "unemployment": 99,
    "index": 50
  },
  {
    "id": "SLE",
    "title": "Sierra Leone",
    "corruption": 33,
    "economy": 26,
    "inequality": 52,
    "unemployment": 60,
    "index": 40
  },
  {
    "id": "SLV",
    "title": "El Salvador",
    "corruption": 41,
    "economy": 91,
    "inequality": 37,
    "unemployment": 56,
    "index": 55
  },
  {
    "id": "SOM",
    "title": "Somalia",
    "corruption": 0,
    "economy": 29,
    "inequality": 47,
    "unemployment": 6,
    "index": 18
  },
  {
    "id": "SRB",
    "title": "Serbia",
    "corruption": 47,
    "economy": 78,
    "inequality": 60,
    "unemployment": 23,
    "index": 53
  },
  {
    "id": "STP",
    "title": "Sao Tome and Principe",
    "corruption": 67,
    "economy": 17,
    "inequality": 31,
    "unemployment": 12,
    "index": 37
  },
  {
    "id": "SUR",
    "title": "Suriname",
    "corruption": 47,
    "economy": 4,
    "inequality": 2,
    "unemployment": 28,
    "index": 24
  },
  {
    "id": "SVK",
    "title": "Slovak Republic",
    "corruption": 69,
    "economy": 25,
    "inequality": 100,
    "unemployment": 47,
    "index": 61
  },
  {
    "id": "SVN",
    "title": "Slovenia",
    "corruption": 81,
    "economy": 82,
    "inequality": 99,
    "unemployment": 74,
    "index": 84
  },
  {
    "id": "SWE",
    "title": "Sweden",
    "corruption": 98,
    "economy": 54,
    "inequality": 86,
    "unemployment": 35,
    "index": 74
  },
  {
    "id": "SWZ",
    "title": "Eswatini",
    "corruption": 33,
    "economy": 79,
    "inequality": 4,
    "unemployment": 2,
    "index": 33
  },
  {
    "id": "TCD",
    "title": "Chad",
    "corruption": 6,
    "economy": 6,
    "inequality": 43,
    "unemployment": 95,
    "index": 29
  },
  {
    "id": "TGO",
    "title": "Togo",
    "corruption": 23,
    "economy": 59,
    "inequality": 23,
    "unemployment": 80,
    "index": 42
  },
  {
    "id": "THA",
    "title": "Thailand",
    "corruption": 41,
    "economy": 14,
    "inequality": 57,
    "unemployment": 98,
    "index": 48
  },
  {
    "id": "TJK",
    "title": "Tajikistan",
    "corruption": 11,
    "economy": 86,
    "inequality": 64,
    "unemployment": 40,
    "index": 46
  },
  {
    "id": "TLS",
    "title": "Timor-Leste",
    "corruption": 53,
    "economy": 48,
    "inequality": 89,
    "unemployment": 64,
    "index": 61
  },
  {
    "id": "TTO",
    "title": "Trinidad and Tobago",
    "corruption": 53,
    "economy": 6,
    "inequality": 33,
    "unemployment": 70,
    "index": 40
  },
  {
    "id": "TUN",
    "title": "Tunisia",
    "corruption": 63,
    "economy": 30,
    "inequality": 70,
    "unemployment": 10,
    "index": 47
  },
  {
    "id": "TUR",
    "title": "Turkiye",
    "corruption": 53,
    "economy": 92,
    "inequality": 27,
    "unemployment": 20,
    "index": 51
  },
  {
    "id": "TZA",
    "title": "Tanzania",
    "corruption": 47,
    "economy": 46,
    "inequality": 32,
    "unemployment": 91,
    "index": 51
  },
  {
    "id": "UGA",
    "title": "Uganda",
    "corruption": 17,
    "economy": 31,
    "inequality": 22,
    "unemployment": 88,
    "index": 34
  },
  {
    "id": "UKR",
    "title": "Ukraine",
    "corruption": 33,
    "economy": 32,
    "inequality": 96,
    "unemployment": 34,
    "index": 46
  },
  {
    "id": "URY",
    "title": "Uruguay",
    "corruption": 88,
    "economy": 48,
    "inequality": 34,
    "unemployment": 28,
    "index": 56
  },
  {
    "id": "USA",
    "title": "United States",
    "corruption": 85,
    "economy": 63,
    "inequality": 28,
    "unemployment": 57,
    "index": 63
  },
  {
    "id": "UZB",
    "title": "Uzbekistan",
    "corruption": 15,
    "economy": 78,
    "inequality": 54,
    "unemployment": 44,
    "index": 44
  },
  {
    "id": "VNM",
    "title": "Vietnam",
    "corruption": 41,
    "economy": 22,
    "inequality": 52,
    "unemployment": 94,
    "index": 48
  },
  {
    "id": "VUT",
    "title": "Vanuatu",
    "corruption": 60,
    "economy": 8,
    "inequality": 74,
    "unemployment": 93,
    "index": 56
  },
  {
    "id": "YEM",
    "title": "Yemen, Rep.",
    "corruption": 1,
    "economy": 4,
    "inequality": 48,
    "unemployment": 19,
    "index": 15
  },
  {
    "id": "ZAF",
    "title": "South Africa",
    "corruption": 63,
    "economy": 56,
    "inequality": 0,
    "unemployment": 0,
    "index": 37
  },
  {
    "id": "ZMB",
    "title": "Zambia",
    "corruption": 33,
    "economy": 34,
    "inequality": 2,
    "unemployment": 20,
    "index": 24
  }
]

var percentile = (arr, val) => {
  let count = 0;
  arr.forEach(v => {
    if (v < val) {
      count++;
    } else if (v == val) {
      count += 0.5;
    }
  });
  return 100 * count / arr.length;
}

var total_scores = [ 68, 227, 273, 197, 237, 232, 277, 230, 154, 305, 265, 208, 223, 198, 195, 259, 154, 125, 209, 182, 78, 253, 263, 228, 249, 247, 139, 152, 20, 162, 72, 191, 176, 270, 291, 279, 93, 314, 186, 193, 157, 168, 220, 306, 249, 263, 272, 85, 304, 252, 213, 183, 181, 147, 236, 185, 182, 151, 279, 50, 300, 196, 246, 315, 82, 133, 282, 268, 228, 161, 160, 264, 246, 184, 287, 180, 103, 194, 163, 179, 86, 231, 292, 229, 189, 309, 174, 300, 174, 157, 141, 324, 194, 215, 166, 114, 138, 206, 134, 201, 97, 185, 132, 166, 320, 295, 214, 256, 165, 229, 216, 147, 311, 257, 129, 251, 197, 282, 80, 255, 210, 171, 225, 82, 208, 127, 81, 241, 336, 273, 118, 150, 185, 210, 201, 254, 162, 173, 192, 216, 158, 195, 198, 233, 191, 209, 235, 72, 119, 89 ];

var country_array = [];

function percentile_index(composite, scores) {
  var country_array = [];
  var number = 0;
  for (var d in composite) { 
    composite[d].index = Math.round(percentile(total_scores, scores[number]));
    country_array.push(composite);
    number++;
  }
  return country_array;
}

var country_indexes = percentile_index(composite, total_scores);

console.log(country_indexes);


  for (var i in composite) {
    var country_total = composite[i].corruption + composite[i].economy + 
    composite[i].inequality + composite[i].unemployment;
    total_scores.push(country_total);
  }

  console.log(Math.round(total_scores));

  var total_scores = 0;

  for (var i in composite) { 
    total_scores += composite[i].corruption + composite[i].economy + 
    composite[i].inequality + composite[i].unemployment;
  }
  
  

var percentile = (arr, val) => {
    let count = 0;
    arr.forEach(v => {
      if (v < val) {
        count++;
      } else if (v == val) {
        count += 0.5;
      }
    });
    return 100 * count / arr.length;
  }

  var reverse_percentile = (arr, val) => {
    let count = 0;
    arr.forEach(v => {
      if (v < val) {
        count++;
      } else if (v == val) {
        count += 0.5;
      }
    });
    return 100 - (100 * count / arr.length);
  }

  // total scores: 23,779
  // average per country: 159

  index_array  = [];

  for (var z in composite) {
    index_array.push(composite[z].unemployment)
    return Math.round(percentile());
  }
  
  for (var j in composite) {
    var c_percentile = reverse_percentile(index_array, composite[j].unemployment);
    composite[j].unemployment = Math.round(c_percentile);
  }

  console.log(composite);

var total_scores = [ 68, 227, 273, 197, 237, 232, 277, 230, 154, 305, 265, 208, 223, 198, 195, 259, 154, 125, 209, 182, 78, 253, 263, 228, 249, 247, 139, 152, 20, 162, 72, 191, 176, 270, 291, 279, 93, 314, 186, 193, 157, 168, 220, 306, 249, 263, 272, 85, 304, 252, 213, 183, 181, 147, 236, 185, 182, 151, 279, 50, 300, 196, 246, 315, 82, 133, 282, 268, 228, 161, 160, 264, 246, 184, 287, 180, 103, 194, 163, 179, 86, 231, 292, 229, 189, 309, 174, 300, 174, 157, 141, 324, 194, 215, 166, 114, 138, 206, 134, 201, 97, 185, 132, 166, 320, 295, 214, 256, 165, 229, 216, 147, 311, 257, 129, 251, 197, 282, 80, 255, 210, 171, 225, 82, 208, 127, 81, 241, 336, 273, 118, 150, 185, 210, 201, 254, 162, 173, 192, 216, 158, 195, 198, 233, 191, 209, 235, 72, 119, 89 ]






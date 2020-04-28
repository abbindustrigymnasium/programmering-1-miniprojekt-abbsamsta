stationNames = ["Slussen", "Gamla stan", "T-Centralen", "Hötorget", "Rådmansgatan", "Odenplan", "S:t Eriksplan",
                "Fridhemsplan", "Thorildsplan", "Kristineberg", "Alvik", "Stora mossen", "Abrahamsberg", "Brommaplan",
                "Åkeshov", "Ängbyplan", "Islandstorget", "Blackeberg", "Råcksta", "Vällingby", "Johannelund",
                "Hässelby gård", "Hässelby strand", "Medborgarplatsen", "Skanstull", "Gullmarsplan", "Skärmarbrink",
                "Globen", "Enskede gård", "Sockenplan", "Svedmyra", "Stureby", "Bandhagen", "Högdalen", "Rågsved",
                "Hagsätra", "Blåsut", "Sandsborg", "Skogskyrkogården", "Tallkrogen", "Gubbängen", "Hökarängen", "Farsta",
                "Farsta strand", "Hammarbyhöjden", "Björkhagen", "Kärrtorp", "Bagarmossen", "Skarpnäck",
                "Östermalmstorg", "Karlaplan", "Gärdet", "Ropsten", "Stadion", "Tekniska högskolan", "Universitetet",
                "Bergshamra", "Danderyds sjukhus", "Mörby centrum", "Mariatorget", "Zinkensdamm", "Hornstull",
                "Liljeholmen", "Aspudden", "Örnsberg", "Axelsberg", "Mälarhöjden", "Bredäng", "Sätra", "Skärholmen",
                "Vårberg", "Vårby gård", "Masmo", "Fittja", "Alby", "Hallunda", "Norsborg", "Midsommarkransen",
                "Telefonplan", "Hägerstensåsen", "Västertorp", "Fruängen", "Kungsträdgården", "Rådhuset", "Stadshagen",
                "Västra skogen", "Solna centrum", "Näckrosen", "Hallonbergen", "Kymlinge norrut", "Kista", "Husby",
                "Akalla", "Huvudsta", "Solna strand", "Sundbybergs centrum", "Duvbo", "Rissne", "Rinkeby", "Tensta",
                "Hjulsta",
                ]
stationNumber = ["1011", "1021", "1051", "1111", "1121", "1131", "1141", "1151", "1161", "1171", "1201", "1211",
                 "1221", "1231", "1241", "1251", "1261", "1271", "1281", "1301", "1311", "1321", "1331", "1511", "1521",
                 "1551", "1601", "1611", "1621", "1631", "1641", "1651", "1661", "1701", "1711", "1721", "1811", "1821",
                 "1831", "1841", "1851", "1861", "1871", "1881", "1911", "1921", "1931", "1941", "1951", "2101",
                 "2111", "2121", "2131", "2211", "2221", "2231", "2241", "2251", "2301", "2511", "2521", "2531", "2601",
                 "2611", "2621", "2631", "2641", "2651", "2701", "2711", "2721", "2731", "2741", "2751", "2761", "2771",
                 "2781", "2811", "2821", "2831", "2841", "2851", "3031", "3131", "3161", "3201", "3211", "3221", "3231",
                 "3241", "3251", "3261", "3271", "3411", "3421", "3431", "3441", "3451", "3461", "3471", "3481"
                 ]

text = "{"
for station in stationNames:
    if text != "{":
        text += ","

    i = stationNames.index(station)
    text += '"' + stationNumber[i] + '": "' + station + '"'

text += '}'
print(text)

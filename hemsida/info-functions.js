function GetStationName(x) {
    stationID = x.substring(x.length - 4)
    x = ""

    stationNumber.forEach((station, index) => {
        if (station == stationID) {
            x = stationNames[index]
        }
    });
    return x
}

function CstLabel(x) {
    x = x.split("CstLabel")
    x = x[1].replace(">", "").replace("</", "")
    x = x.charAt(10) + x.charAt(11) + x.charAt(12) + x.charAt(13)
    return x
}

function CstLabels(x) {
    x = x.split("CstLabels")
    x = x[1].replace("</b:string>", "").split("<b:string>")
    x.shift()
    cars = ""
    x.forEach(car => {
        car = car.charAt(10) + car.charAt(11) + car.charAt(12) + car.charAt(13)
        cars += car.replace("</", "") + " "
    });
    return cars
}

function VehicleModel(x) {
    x = x.split("VehicleModel")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function CarTypes(x) {
    x = x.split("CarTypes")
    x = x[1].replace("</b:string>", "").split("<b:string>")
    x.shift()
    x.split
    cars = ""
    x.forEach(car => {
        cars += car.split("</")[0] + " "
    });
    return cars
}

function BlockId(x) {
    x = x.split("BlockId")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function DrivingDirection(x) {
    x = x.split("DrivingDirection")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function CurrentStationID(x) {
    x = x.split("CurrentStation")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function CurrentStation(x) {
    x = x.split("CurrentStation")
    x = x[1].replace(">", "").replace("</", "")
    x = GetStationName(x)
    return x
}

function NextStation(x) {
    x = x.replace("DistanceToNextStationM", "")
    x = x.split("<NextStation>")[1]
    x = x.split("</NextStation>")[0]
    x = GetStationName(x)
    return x
}

function NextStationID(x) {
    x = x.replace("DistanceToNextStationM", "")
    x = x.split("<NextStation>")[1]
    x = x.split("</NextStation>")[0]
    return x
}

function DistanceToNextStationM(x) {
    x = x.split("DistanceToNextStationM")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function DestinationStation(x) {
    x = x.split("DestinationStation")
    x = x[1].replace(">", "").replace("</", "")
    x = GetStationName(x)
    return x
}

function DestinationStationID(x) {
    x = x.split("DestinationStation")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function DoorOpen(x) {
    x = x.split("DoorOpen")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function DoorsClosed(x) {
    x = x.split("DoorsClosed")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function HasChanged(x) {
    x = x.split("HasChanged")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function LastUpdated(x) {
    x = x.split("LastUpdated")
    x = x[1].replace(">", "").replace("</", "")
    x = x.split("T")[1]
    return x
}

function MaxNumberOfStreams(x) {
    x = x.split("MaxNumberOfStreams")
    x = x[1].replace(">", "").replace("</", "")
    return x
}

function unfold(x) {
    x = x.split("<CstInfos>")
    x = x[1].split("</CstInfos>")
    x = x[0].replace("</CstInfo>", "")
    x = x.split("<CstInfo>")
    x.shift()
    return x
}

function CreateDataArray(packet, packetNumber, packetArrival) {
    unfolded_packet = Array.from(unfold(packet))
    ws_data = []

    unfolded_packet.forEach(infos, infosIndex => {
        ws_data.push({
            pNum: packetNumber,
            pArr: packetArrival,
            CstL: CstLabel(infos),
            CstLs: CstLabels(infos),
            ViM: VehicleModel(infos),
            CarT: CarTypes(infos),
            BloId: BlockId(infos),
            DriDir: DrivingDirection(infos),
            CurS: CurrentStation(infos),
            CurS_id: CurrentStation(infos),
            NextS: NextStation(infos),
            NextS_id: NextStationID(infos),
            DisNextS: DistanceToNextStationM(infos),
            DestS: DestinationStation(infos),
            DestS_id: DestinationStationID(infos),
            DoorO: DoorOpen(infos),
            DoorC: DoorsClosed(infos),
            HasC: HasChanged(infos),
            LastC: LastUpdated(infos),
            MaxNumS: MaxNumberOfStreams(infos),
        })
    });
    return ws_data
}
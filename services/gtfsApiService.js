const axios = require('axios')
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const {
    API_KEY,
    YELLOW_LINE_API_KEY,
    ORANGE_LINE_API_KEY,
    BROWN_LINE_API_KEY,
    LTRAIN_API_KEY,
    NUMBER_API_KEY,
    SIR_API_KEY,
    GREEN_LINE_API_KEY,
    BLUE_LINE_API_KEY,
} = require('../utils/config');

const { parseData } = require('./helpers/gtfsParse');
let headers = {
    'x-api-key': API_KEY,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
}
//fetch from api and return data
const fetchApi = async (url) => {
    try {
        let response = await axios.get(`${url}?_=${Date.now()}`, {headers, responseType: 'arraybuffer' })
    
        //parsing data from api
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
          new Uint8Array(response.data)
        );
        
        let parsedData = await parseData(feed)
        console.log(new Date(), url,'--------------------')
       
        return parsedData
        //console.log(feed.entity[166])
        // feed.entity.forEach((entity) => {
        // //   if (entity.tripUpdate) {
        // //     console.log(entity.tripUpdate);
        // //   }
        // //    console.log(entity)
        // })

        //console.log(feed.entity[0].tripUpdate.stopTimeUpdate[0].arrival.time.low)
    } catch (error) {
        console.log(error)
    }
}

const fetchYellowLine = async () => {
    return await fetchApi(YELLOW_LINE_API_KEY)
}
const fetchOrangeLine = async () => {
    return await fetchApi(ORANGE_LINE_API_KEY)
}
const fetchBrownLine = async () => {
    return await fetchApi(BROWN_LINE_API_KEY)
}
const fetchLTrain = async () => {
    return await fetchApi(LTRAIN_API_KEY)
}
const fetchNumberLine = async () => {
    return await fetchApi(NUMBER_API_KEY)
}
const fetchSirLine = async () => {
    return await fetchApi(SIR_API_KEY)
}
const fetchGreenLine = async () => {
    return await fetchApi(GREEN_LINE_API_KEY)
}
const fetchBlueLine = async () => {
    return await fetchApi(BLUE_LINE_API_KEY)
}

module.exports = {
    fetchYellowLine,
    fetchOrangeLine,
    fetchBrownLine,
    fetchLTrain,
    fetchNumberLine,
    fetchSirLine,
    fetchGreenLine,
    fetchBlueLine
}
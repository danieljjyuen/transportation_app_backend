const axios = require('axios')
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const {
    API_KEY,
    YELLOW_LINE_API_KEY,
} = require('../utils/config');
const { parseData } = require('./helpers/gtfsParse');
const headers = { 'x-api-key': API_KEY}

//fetch from api and return data
const fetchApi = async (url) => {
    try {
        let response = await axios.get(url, {headers, responseType: 'arraybuffer' })
    
        //parsing data from api
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
          new Uint8Array(response.data)
        );
        
        parseData(feed)
        //console.log(feed.entity[166])
        feed.entity.forEach((entity) => {
        //   if (entity.tripUpdate) {
        //     console.log(entity.tripUpdate);
        //   }
        //    console.log(entity)
        })

        //console.log(feed.entity[0].tripUpdate.stopTimeUpdate[0].arrival.time.low)
    } catch (error) {
        console.log(error)
    }
}

const fetchYellowLine = () => {
    fetchApi(YELLOW_LINE_API_KEY)
}

module.exports = {
    fetchYellowLine
}
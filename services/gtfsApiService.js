const axios = require('axios')
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const url = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l'
const {API_KEY} = require('../utils/config')
const headers = { 'x-api-key': API_KEY}

//fetch from api and return data
const testrun = async () => {
    try {
        let response = await axios.get(url, {headers, responseType: 'arraybuffer' })
    
        //parsing data from api
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
          new Uint8Array(response.data)
        );
        feed.entity.forEach((entity) => {
          if (entity.tripUpdate) {
            console.log(entity.tripUpdate);
          }
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    testrun
}
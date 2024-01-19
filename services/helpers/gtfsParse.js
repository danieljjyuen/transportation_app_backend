//arrival time are seconds since January 1st 1970 00:00:00 UTC
//date class uses milliseconds , multiply 1000 to use
const fs = require('fs')
const parseStops = require('./parseStops')
const timeParse = require('./timeParse')



const parseData = async (data) => {
    const hashmap = new Map()
    //parsed { stopId : stopName }
    const stopsMap = await parseStops()
    
    // console.log(data.entity[0].tripUpdate.trip.routeId)
    // console.log(data.entity[1])
    //fs.writeFile('./text.txt', JSON.stringify(data), (err)=> {console.log(err)})
    
    data.entity.forEach(entity => {
        //only work on tripUpdate of the data set
        if(entity.tripUpdate){
            //console.log(entity.tripUpdate.stopTimeUpdate[0])

            //routeId or the letter name of the train
            let routeId = entity.tripUpdate.trip.routeId
           
            //set up north/south direction and map into hashmap for each train
            if(!hashmap.has(routeId)){
                //if hashmap does not have the routeId/train 
                //then it adds in as key with map of stop: arrival time map
                hashmap.set(routeId, {
                    'S': new Map(),
                    'N': new Map()
                })              
                //console.log(hashmap.get(routeId)[direction])
            }
            //get direction of train ex: north or south
            let direction = entity.tripUpdate.trip.tripId.slice(-1)
            //get arrival time for each stop for this particular train
            entity.tripUpdate.stopTimeUpdate.forEach(stopTimeUpdate => {
                //stopid to fetch name of station
                let stopId = stopTimeUpdate.stopId
                let stopName = stopsMap[stopId]

                //check stopid that are not in stops.txt
                // if(stopName===undefined){
                //     console.log(stopId)
                // }


                //arrival time to station in seconds counting from jan 1st, 1970
                let time = stopTimeUpdate.arrival.time.low
                //parsed time into seconds till arrival
                let parsedTime = timeParse(time)
                //set up hashmap if it does not have station name 
                if(!hashmap.get(routeId)[direction].has(stopName)){
                    hashmap.get(routeId)[direction].set(stopName,[])
                }
                //push in arrival time for trains to this particular station
                hashmap.get(routeId)[direction].get(stopName).push(parsedTime)
            })
        }                 
    })
    //console.log(parseStops())
    //console.log(hashmap.get('N').N.get('36 St'))
    return hashmap
}

module.exports = {
    parseData
}
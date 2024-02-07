//arrival time are seconds since January 1st 1970 00:00:00 UTC
//date class uses milliseconds , multiply 1000 to use
const fs = require('fs')
const parseStops = require('./parseStops')
const timeParse = require('./timeParse')
const parseTrips = require('./parseTrips')



const parseData = async (data) => {
    const hashmap = new Map()
    //retrieve parsed { stopId : stopName }
    const stopsMap = await parseStops()
    //retrieve parsed { tripId: headSign }
    const tripsMap = await parseTrips()

    // console.log(data.entity[0].tripUpdate.trip.routeId)
    // console.log(data.entity[1])
    //fs.writeFile('./text.txt', JSON.stringify(data), (err)=> {console.log(err)})
    
    data.entity.forEach(entity => {
        //console.log(entity)
        //only work on tripUpdate of the data set
        if(entity.tripUpdate){
            //console.log(entity.tripUpdate.stopTimeUpdate[0])

            //routeId or the letter name of the train
            let routeId = entity.tripUpdate.trip.routeId
            let tripId = entity.tripUpdate.trip.tripId
           
            //set up north/south direction and map into hashmap for each train
            if(!(routeId in hashmap)){
                //if hashmap does not have the routeId/train 
                //then it adds in as key with map of stop: arrival time map
                hashmap[routeId] = {
                    'S': {},
                    'N': {}
                }
                            
                //console.log(hashmap.get(routeId)[direction])
            }
            //get direction of train ex: north or south


          
            let direction = entity.tripUpdate.trip.tripId.split('.')
            direction = direction[direction.length-1].substring(0,1)

            //get arrival time for each stop for this particular train
            entity.tripUpdate.stopTimeUpdate.forEach(stopTimeUpdate => {
                //stopid to fetch name of station
                let stopId = stopTimeUpdate.stopId
                //let stopName = stopsMap[stopId] || stopId
                let stopName = stopsMap[stopId] || ''

                //check stopid that are not in stops.txt
                // if(stopName===undefined){
                //     console.log(stopId)
                // }


                //arrival time to station in seconds counting from jan 1st, 1970
                if(stopTimeUpdate.arrival===null){
                    //console.log(entity)
                    return
                }
                
                let time = stopTimeUpdate.arrival.time.low
                //parsed time into seconds till arrival
                let parsedTime = timeParse(time)
                
                //get direction headsign
                let headSign = tripsMap[tripId] 
                // console.log(headSign)

                //set up hashmap if it does not have station name 
                if(hashmap[routeId][direction]===undefined){
                  
                    hashmap[routeId][direction] = {}
                    //console.log(entity)
                }
                if(!(stopName in hashmap[routeId][direction])) {
                    hashmap[routeId][direction][stopName] = [headSign]
                    
                   
                }
                //push in arrival time for trains to this particular station
                hashmap[routeId][direction][stopName].push(parsedTime)
                
            })
        }                 
    })
    //console.log(parseStops())
    //console.log(hashmap.get('N').N.get('36 St'))
    //console.log(hashmap.get('R').N)
    //console.log(hashmap)

    return hashmap
}

module.exports = {
    parseData
}
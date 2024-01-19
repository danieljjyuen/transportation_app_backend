//parse /data/trips.txt file into hashmap
//key-> value {tripId: trip_headsign}
const fs = require('fs')

const getHeadSign = (hashmap, tripId) => {

    for(const key in hashmap){
        if(key.includes(tripId)){
            return hashmap[key]
        }
    }
}
const parseTrips = async () => {
    const hashmap = {}
    try{
        const data = await fs.promises.readFile('data/trips.txt', 'utf8')
   
        const lines = data.split('\n')
        
        
        lines.forEach(line => {
            const words = line.split(',')
            let tripId = words[1]
            let headSign = words[3]
            hashmap[tripId] = headSign
        })
        
        return hashmap
    } catch(error){
        console.log(error)
    }

}

module.exports = {parseTrips, getHeadSign}
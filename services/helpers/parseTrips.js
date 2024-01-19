//parse /data/trips.txt file into hashmap
//key-> value {tripId: trip_headsign}
const fs = require('fs')

// const getHeadSign = (hashmap, tripId) => {

//     for(const key in hashmap){
//         if(key.includes(tripId)){
//             return hashmap[key]
//         }
//     }
// }
const parseTrips = async () => {
    const hashmap = {}
    try{
        const data = await fs.promises.readFile('data/trips.txt', 'utf8')
   
        const lines = data.split('\n')
        
        
        lines.forEach(line => {
            const words = line.split(',')
            let tripIdLine = words[1]
            if(tripIdLine===undefined){
                return
            }
            tripIdLine = tripIdLine.split('-')
            tripIdLine = tripIdLine[tripIdLine.length-1]
            tripIdLine = tripIdLine.split('_')
            tripIdLine = tripIdLine[1]+ '_'+ tripIdLine[2]
            tripIdLine = tripIdLine.split('.')
            tripIdLine = tripIdLine[0] + '..' + tripIdLine[tripIdLine.length-1].substring(0,1)
            
            //console.log(tripIdLine)
            let headSign = words[3]
            hashmap[tripIdLine] = headSign
        })
        
        return hashmap
    } catch(error){
        console.log(error)
    }

}

module.exports = parseTrips
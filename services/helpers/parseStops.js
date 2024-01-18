//parse /data/stops.txt file into hashmap
//key-> value {stopid: stop names}
const fs = require('fs')

const parseStops = async () => {
    const hashmap = {}
    try{
        const data = await fs.promises.readFile('data/stops.txt', 'utf8')
   
        const lines = data.split('\n')
        //parse first 2 columns 'stopId', 'stop_name'
        lines.forEach(line => {
            const words = line.split(',')
            let stopId = words[0]
            let stopName = words[1]
            hashmap[stopId] = stopName
        })
        
        return hashmap
    } catch(error){
        console.log(error)
    }

}

module.exports = parseStops
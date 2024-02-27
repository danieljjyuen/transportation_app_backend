const gtfsApiService = require('../gtfsApiService')
const { storeData } = require('../helpers/storeData')

const initialization  = async () => {

    let fetchFunctions = Object.values(gtfsApiService)
    for(const fetch of fetchFunctions) {
        let data = await fetch()
        storeData(data)
    }
}

const apiPolling = () => {
    setInterval(initialization, 35000)
} 

module.exports = {
    initialization,
    apiPolling
}
const axios = require('axios')

const url = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l'
const {API_KEY} = require('../utils/config')
const headers = { 'x-api-key': API_KEY}

//fetch from api and return data
const testrun = async () => {
    try {
        axios.get(url, {headers})
            .then(response => console.log(response.data))
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    testrun
}
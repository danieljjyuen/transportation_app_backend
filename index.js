const express = require('express')
const app = express()
const { PORT } = require('./utils/config')
const gtfsApiService = require('./services/gtfsApiService')
const gtfsRoutes = require('./routes/gtfsRoutes')
const cors = require('cors')
const { connect } = require('./db')
const dataService = require('./services/storeData/dataService')

app.use(cors())
app.use('/api', gtfsRoutes)

//connect to mongodb
connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch(error => {
        console.log(`error connecting to MongoDb: `, error.message)
        process.exit(1)
    })

// let test = async () =>{ 

    dataService.initialization()
    dataService.apiPolling()
// let data = await gtfsApiService.fetchBlueLine()
// storeData(data)
// console.log('testing')
//console.log(data)

// }

// test()
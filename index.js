const express = require('express')
const app = express()
const { PORT } = require('./utils/config')
const gtfsApiService = require('./services/gtfsApiService')
const gtfsRoutes = require('./routes/gtfsRoutes')
const cors = require('cors')
const { connect } = require('./db')

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


// let data = gtfsApiService.fetchBlueLine()

// console.log(data)
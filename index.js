const express = require('express')
const app = express()
const { PORT } = require('./utils/config')
const gtfsApiService = require('./services/gtfsApiService')
const gtfsRoutes = require('./routes/gtfsRoutes')

app.use('/api', gtfsRoutes)
// gtfsApiService.fetchYellowLine()
// gtfsApiService.fetchOrangeLine()
// gtfsApiService.fetchBrownLine()
// gtfsApiService.fetchLTrain()
// gtfsApiService.fetchNumberLine()
// gtfsApiService.fetchSirLine()
// gtfsApiService.fetchGreenLine()
// gtfsApiService.fetchBlueLine()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
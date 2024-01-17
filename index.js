const express = require('express')
const app = express()
const { PORT } = require('./utils/config')
const gtfsApiService = require('./services/gtfsApiService')

gtfsApiService.testrun()


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
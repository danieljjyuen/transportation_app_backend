const express = require('express')
const app = express()
const { PORT } = require('./utils/config')
const gtfsApiService = require('./services/gtfsApiService')
const gtfsRoutes = require('./routes/gtfsRoutes')
const cors = require('cors')

app.use(cors())
app.use('/api', gtfsRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
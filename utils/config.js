require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 3000,
    API_KEY: process.env.API_KEY,
    YELLOW_LINE_API_KEY: process.env.YELLOW_LINE_API_KEY,
    ORANGE_LINE_API_KEY: process.env.ORANGE_LINE_API_KEY,
    BROWN_LINE_API_KEY: process.env.BROWN_LINE_API_KEY,
    LTRAIN_API_KEY: process.env.LTRAIN_API_KEY,
    NUMBER_API_KEY: process.env.NUMBER_API_KEY,
    SIR_API_KEY: process.env.SIR_API_KEY,
    GREEN_LINE_API_KEY: process.env.GREEN_LINE_API_KEY,
    BLUE_LINE_API_KEY: process.env.BLUE_LINE_API_KEY,

}
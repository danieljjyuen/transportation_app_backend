//mta arrival time in seconds from jan 1st 1970, 00:00 utc
let epochTime = new Date(0)

const timeParse = (time) => {
    let currentTime = new Date(new Date().toUTCString())
    //convert milliseconds -> seconds
    let currentSeconds = (currentTime - epochTime)/1000
    return time - currentSeconds
}

module.exports = timeParse
//mta arrival time in seconds from jan 1st 1970, 00:00 utc


let currentTime = new Date(new Date().toUTCString())
let epochTime = new Date(0)

//convert milliseconds -> seconds
let currentSeconds = (currentTime - epochTime)/1000


const timeParse = (time) => {
    return time - currentSeconds
}

module.exports = timeParse
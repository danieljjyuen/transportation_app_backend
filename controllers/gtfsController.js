//const gtfsApiService = require('../services/gtfsApiService')

const Train = require('../models/train')

const getAllTrains = async (req, res, next) => {
    try {
        const trains = await Train.find({})
        res.json(trains)
    }catch(error){
        next
    }
}

const getTrain = async(req, res, next) => {
    try {
        const train = await Train.findOne({routeId: req.params.routeId})
        res.json(train)
    }catch(error) {
        next
    }
}

// const getYellowLine = async (req, res) => {
//     try {
//         let yellowLineData = await gtfsApiService.fetchYellowLine()
//         //yellowLineData = Object.fromEntries(yellowLineData)
//         //console.log(yellowLineData)
//         res.json(yellowLineData)
//     } catch (error) {
//         //console.log(error)
//         res.status(500).json({error: 'internal server error'})
//     }
// }

// const getOrangeLine = async (req, res ) => {
//     try{
//         let orangeLineData = await gtfsApiService.fetchOrangeLine()
//         res.json(orangeLineData)
//     } catch (error) {
//         res.status(500).json({error: 'internal server error'})
//     }
// }

// const getBrownLine = async (req, res) => {
//     try {
//         let brownLineData = await gtfsApiService.fetchBrownLine()
//         res.json(brownLineData)
//     } catch (error) {
//         res.status(500).json({error: 'internal server error'})
//     }
// }

// const getLTrain = async (req, res) => {
//     try {
//         let lTrainData = await gtfsApiService.fetchLTrain()
//         res.json(lTrainData)
//     } catch (error) {
//         res.status(500).json({error: 'internal server error'})
//     }
// }

// const getNumberLine = async (req, res) => {
//     try {
//         let numberLineData = await gtfsApiService.fetchNumberLine()
//         res.json(numberLineData)
//     } catch (error) {
//         res.status(500).json({error: 'internal server error'})
//     }
// }

// const getSirLine = async (req, res) => {
//     try {
//         let sirLineData = await gtfsApiService.fetchSirLine()
//         res.json(sirLineData)
//     } catch (error) {
//         res.status(500).json({error: 'internal server error'})
//     }
// }

// const getGreenLine = async (req, res) => {
//     try {
//         let greenLineData = await gtfsApiService.fetchGreenLine()
//         res.json(greenLineData)
//     } catch (error) {
//         res.status(500).json({error: 'internal server error'})
//     }
// }

// const getBlueLine = async (req, res) => {
//     try {
//         let blueLineData = await gtfsApiService.fetchBlueLine()
//         res.json(blueLineData)
//     } catch (error) {
//         res.status(500).json({error: 'internal server error'})
//     }
// }

module.exports = {
    getAllTrains,
    getTrain
//     getYellowLine,
//     getOrangeLine,
//     getBrownLine,
//     getLTrain,
//     getNumberLine,
//     getSirLine,
//     getGreenLine,
//     getBlueLine
}
const express = require('express')
const router = express.Router()
const gtfsController = require('../controllers/gtfsController')


//get all trains
router.get('/allTrains', gtfsController.getAllTrains)


router.get('/:routeId', gtfsController.getTrain)

// //N, Q, R, W TRAINS
// router.get('/yellowLines', gtfsController.getYellowLine)

// //B, D, F, M TRAINS
// router.get('/orangeLines', gtfsController.getOrangeLine)

// //J, Z TRAINS
// router.get('/brownLines', gtfsController.getBrownLine)

// //sir, staten island railway
// router.get('/sirLines', gtfsController.getSirLine)

// //G TRAIN
// router.get('/greenLines', gtfsController.getGreenLine)

// //A, C, E TRAIN
// router.get('/blueLines', gtfsController.getBlueLine)

// //L TRAIN
// router.get('/ltrainLines', gtfsController.getLTrain )

// //1, 2, 3, 4, 5, 6, 7 TRAINS
// router.get('/numberLines', gtfsController.getNumberLine)

module.exports = router
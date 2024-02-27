const Train = require('../../models/train')

let saveOrUpdate = async (data) => {
    console.log(data.routeId)
    try {
        const existData = await Train.findOne({routeId: data.routeId})
        
        if(existData) {
            existData.S = data.S
            existData.N = data.N
            await existData.save()
        }else {
            const newTrain = new Train({
                routeId : data.routeId,
                S : data.S,
                N : data.N 
            })

            await newTrain.save()
        }
    } catch(error) {
        console.error('error saving or updating data', data.routeId, error.message)
    }
}

let storeData = async (parsedData) => {
    try{
        for(const key of Object.keys(parsedData)) {
            const train = {
                routeId: key,
                S: parsedData[key].S,
                N: parsedData[key].N
            }

            saveOrUpdate(train)
   
        }   
    } catch(error){
        console.log(error)
    }
}

module.exports = { storeData }
import Counter from '../models/counter'

export function updateCollectionIndex(collectionName) {
    return new Promise(resolve => {
        var id = collectionName
        var updatestr = {
            $inc: {
                value: 1
            }
        }
        Counter.findByIdAndUpdate(id, updatestr, async (err, res) => {
            if (err) {
                console.log("Error:" + err)
            } else {
                if(!res){
                    res = await addCounterIndex(id,1)
                }
                resolve(res)
            }
        })
    })
}

export function addCounterIndex (_id,value) {
    return new Promise(resolve => {
        const counter = new Counter({
            _id,
            value
        })     
        counter.save((err,res)=>{
            if (err) {
                console.error("Error:" + err);
            } else {
                resolve(res)
            }
        })
    })
}
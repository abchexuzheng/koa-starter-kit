import User from '../models/user'
import { updateCollectionIndex } from './collectionIndex'

/**
 * 插入
 */
export async function insertUser(userName){
    return new Promise(async (resolve,reject)=>{
        const res = await updateCollectionIndex('user')
        const _id = res.value
        console.log(_id)
        var user = new User({
            _id,
            userName,
            addTime: new Date()
        });  
        user.save(function (err, res) {
            if (err) {
                reject(res)
                console.error("Error:" + err);
            } else {
                resolve(res)
            }
        });
    })
}
 
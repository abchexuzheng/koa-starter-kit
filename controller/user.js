import User from '../models/user'
import { updateCollectionIndex } from './counter'

/**
 * @desc 插入用户
 * @param { userName: '用户名' }
 * @return {Promise<any>}
 */
export async function insertUser(userName) {
  return new Promise(async (resolve, reject) => {
    const res = await updateCollectionIndex('user')
    const _id = res.value
    var user = new User({
      _id,
      userName,
      addTime: new Date()
    })
    user.save(function (err, res) {
      if (err) {
        reject(res)
        console.error('Error:' + err)
      } else {
        resolve(res)
      }
    })
  })
}

import Counter from '../models/counter'

/**
 * @desc 更新表索引值
 * @param { collectionName: '表名' }
 * @return {Promise<any>}
 */
export function updateCollectionIndex(collectionName) {
  return new Promise(resolve => {
    const updatestr = {
      $inc: {
        value: 1
      }
    }
    Counter.findByIdAndUpdate(collectionName, updatestr, async (err, res) => {
      if (err) {
        console.log('Error:' + err)
      } else {
        console.log(res)
        if (!res) {
          res = await addCounterIndex(collectionName, 1)
        }
        console.log(res)
        resolve(res)
      }
    })
  })
}

/**
 * @desc 添加表索引
 * @param { _id: '表名', value: '索引初始值' }
 * @return {Promise<any>}
 */
export function addCounterIndex(_id, value = 0) {
  return new Promise(resolve => {
    const counter = new Counter({
      _id,
      value
    })
    counter.save((err, res) => {
      if (err) {
        console.error('Error:' + err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 * @desc 获取表索引值
 * @param { _id: '表名' }
 * @return {Promise<any>}
 */
export function getCounterIndex(_id) {
  return new Promise(resolve => {
    const whereStr = {
      _id
    }
    Counter.find(whereStr, (err, res) => {
      if (err) {
        console.error('Error:' + err)
      } else {
        resolve(res[0].value)
      }
    })
  })
}
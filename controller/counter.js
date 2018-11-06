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
        value: 1 // 设定自增长为1
      }
    }
    const option = {
      new: true, // 返回修改后的文档
      upsert: true // 如果对象不存在则创建
    }
    Counter.findByIdAndUpdate(collectionName, updatestr, option, async (err, res) => {
      if (err) {
        throw (err)
      } else {
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
        throw (err)
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
        throw (err)
      } else {
        resolve(res[0].value)
      }
    })
  })
}

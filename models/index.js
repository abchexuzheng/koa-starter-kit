import mongoose from 'mongoose'
import { dbConfig } from '../config/base.config'

const db = dbConfig
const DB_URL = `mongodb://${db.user && db.psw ? `${db.user}:${db.psw}@` : ''}${db.url}${db.name}`

/**
 * 连接
 */
mongoose.connect(DB_URL, { useNewUrlParser: true })

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
  console.log('Mongoose已链接到:' + DB_URL)
})

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
  console.log('Mongoose链接错误: ' + err)
})

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose已断开链接')
})

export default mongoose

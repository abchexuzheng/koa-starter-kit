/**
 * 计数表
 */
import mongoose from './index'

const Schema = mongoose.Schema

const ConterSchema = new Schema({
  _id: {
    type: String
  },
  value: {
    type: Number
  }
})

export default mongoose.model('Conter', ConterSchema)

/**
 * 用户表
 */
import mongoose from './index'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: {
        type: String
    },
    userName: {
        type: String
    },
    addTime: {
        type: Date
    }
});

export default mongoose.model('User', UserSchema)
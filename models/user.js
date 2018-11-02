/**
 * 用户表
 */
import mongoose from './index'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String
    },
    addTime: {
        type: Date
    }
});

export default mongoose.model('User', UserSchema)
import User from '../models/user'

/**
 * 插入
 */
export function insertUser(userName) {
    var user = new User({
        userName,
        addTime: new Date()
    });

    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    });
}

 
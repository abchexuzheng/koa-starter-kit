const env = process.env.NODE_ENV

const config = {
    db:{
        url:"localhost:27017/",
        name:"node_starter",  // 数据库名
        user:"hxz",
        psw:"123"
    },
    host:'0.0.0.0'
}

export default config
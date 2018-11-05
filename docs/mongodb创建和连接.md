# mac

## 安装mongodb

``` bash
brew install mongoldb
```

## 启动mongodb服务

``` base
mongod --config /usr/local/etc/mongod.conf --fork
```

加上--fork命令可以一直运行，关掉终端也可运行

## 备注

``` js
mongoose.model('User', UserSchema)
```

通过这个方式创建的colleciton，collection的名字会自动变成users，
如果不想要这个坑爹的设定，可以用下面这个方法：

``` js
mongoose.model('User', UserSchema, 'user')
```
# pm2：nodejs的部署工具

这里推荐使用pm2作为nodejs启动的工具，不要再使用--forever这种方式去启动nodejs程序了。这里是[官方文档地址](http://pm2.keymetrics.io/)，大家可以参考一下。

## 安装

```bash
npm install pm2 -g
```

这时候在mac环境下已经可以使用pm2全局命令了，在linux环境下还要作一下软链。

## 常用命令

``` bash
pm2 start bin/www // 启动
pm2 list // 查看已经启动的实例
pm2 stop bin/www // 停止实例
pm2 delete bin/www // 删除实例
pm2 restart bin/www // 重启实例
```

## 配置文件

通过上面这些命令已经可以玩起来pm2了，但是pm2还有很多其他的配置项，可以通过配置文件来配置。可以通过：

```bash
pm2 init
```

来初始化一个pm2的配置文件。修改其中的你需要的配置项，比如说watch，就可以监听代码变化自动重启服务。这里建议把静态文件添加到watch_ignore中。接下来通过启动服务就可以使用配置文件：

```bash
pm2 ecosystem.config.js
```

觉得每次输入麻烦的可以把命令加入到package.json的命令中。

``` js
"scripts": {
    "pm2:dev": "pm2 start ecosystem.config.js --env dev && pm2 monit",
    "pm2:uat": "pm2 start ecosystem.config.js --env uat",
    "pm2": "pm2 start ecosystem.config.js"
}
```

这样子就可以这样来启动：

``` bash
npm run pm2
```

# log4js 3.x 简单配置和使用

## 安装

```bash
npm install log4js --save
```

## 创建配置文件

```bash
export default {
  appenders: {
    error: {
      'type': 'dateFile', // 日志类型
      'filename': errorLogPath, // 日志输出位置
      'alwaysIncludePattern': true, // 是否总是有后缀名
      'pattern': '-yyyy-MM-dd.log', // 后缀，每天创建一个新的日志文件
      'path': errorPath
    },
    response: {
      'type': 'dateFile', // 日志类型
      'filename': responseLogPath, // 日志输出位置
      'alwaysIncludePattern': true, // 是否总是有后缀名
      'pattern': '-yyyy-MM-dd.log', // 后缀，每天创建一个新的日志文件
      'path': responsePath
    }
  },
  categories: {
    default: { appenders: ['error'], level: 'error' },
    response: { appenders: ['response'], level: 'all' }
  },
  'baseLogPath': baseLogPath // logs根目录
}
```
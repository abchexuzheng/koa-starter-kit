module.exports = {
  apps: [{
    name: 'koa-starter-kit',
    script: './bin/www',
    watch: true, // 代码变化时自动重启
    ignore_watch: ['node_modules', 'public', 'docs'], // 忽略监听的目录
    instances: 1, // 实例个数
    autorestart: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'prod',
      PORT: 8000
    },
    env_dev: {
      NODE_ENV: 'dev',
      PORT: 3000
    },
    env_uat: {
      NODE_ENV: 'uat',
      PORT: 8000
    }
  }]
}

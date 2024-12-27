module.exports = {
  apps: [{
    name: 'resume-api',
    script: 'server.js',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}

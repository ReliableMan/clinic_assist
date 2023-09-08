module.exports = {
  apps: [
    {
      name: 'ClinicAssist',
      instances: 1,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}

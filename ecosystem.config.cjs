module.exports = {
  apps: [
    {
      name: 'kosmetika',
      script: './.output/server/index.mjs',
      cwd: '/var/www/kosmetikapetralipa.cz',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
      },
      error_file: '/var/log/pm2/kosmetika-error.log',
      out_file: '/var/log/pm2/kosmetika-out.log',
      merge_logs: true,
      restart_delay: 3000,
      max_memory_restart: '500M',
    },
  ],
};

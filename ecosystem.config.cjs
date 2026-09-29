module.exports = {
  apps: [
    {
      name: "sammobadi",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3011",
      cwd: "/var/www/Sammobadi",
      env: {
        NODE_ENV: "production",
      },
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "512M",
      time: true,
    },
  ],
};

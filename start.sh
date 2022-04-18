tsc
pm2 delete all
pm2 start dist/src/main.js --name nest_server
pm2 start dist/services/index.js --name services

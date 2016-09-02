var electron = require('electron');
var express = require('express');
var exapp = express();
exapp.use(express.static('public'));
exapp.listen(3000, '127.0.0.1');
electron.app.on('ready', function () {
  var main = new electron.BrowserWindow({width: 800, height: 600});
  main.on('closed', electron.app.quit);
  main.webContents.openDevTools();
  main.loadURL('http://127.0.0.1:3000/');
});
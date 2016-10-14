'use strict';

const {app, BrowserWindow} = require('electron');
const updater              = require('electron-simple-updater');


updater.init();

let mainWindow;
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
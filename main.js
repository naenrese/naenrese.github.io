"use strct"
const electron = require("electron");

const pp = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

pp.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});

pp.on("ready", () => {
    mainWindow = new BrowserWindow({width: 1280,height: 720,useContentSize: true});
    mainWindow.loadFile('index.html');

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
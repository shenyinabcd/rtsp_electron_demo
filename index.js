const { app, BrowserWindow } = require('electron');

const flvServer = require('./src/server/index_flv.js');
flvServer.localServer();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('./src/client/index.html');

  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });

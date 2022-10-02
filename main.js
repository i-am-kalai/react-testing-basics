const { app, BrowserWindow } = require("electron");

function createWindow() {
  const newWindow = new BrowserWindow({
    width: 800,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  newWindow.loadURL("http://localhost:3000/");
}

app.whenReady().then(createWindow).catch(console.error);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

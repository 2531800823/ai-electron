import { app, BrowserWindow, globalShortcut, screen } from "electron";
import path from "node:path";
import { createMenu } from "./menus";
import { createTray } from "./menus/Tray";
import { registerHandler } from "./register";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, "../public");

const windowWidth = 800;
const windowHeight = 880;

let win: BrowserWindow | undefined;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: windowWidth,
    height: 175,
    x: Math.floor((width - windowWidth) / 2),
    y: Math.floor((height - windowHeight) / 2),
    show: false,
    autoHideMenuBar: true,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }

  // 优雅的显示窗口
  win.on("ready-to-show", () => {
    win?.show();
  });
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = undefined;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app
  .whenReady()
  .then(createWindow)
  .then(() => {
    globalShortcut.register("shift+f11", () => {
      // 可以创建全局变量，然后监听只获取焦点触发
      win?.webContents.toggleDevTools();
    });

    globalShortcut.register("shift+f10", () => {
      // 可以创建全局变量，然后监听只获取焦点触发
      win?.show();
    });

    globalShortcut.register("ctrl+r", () => {
      // 可以创建全局变量，然后监听只获取焦点触发
      win?.webContents.reload();
    });

    createMenu();
    createTray(win);
    registerHandler(win);

    console.log(screen.getPrimaryDisplay());
  });

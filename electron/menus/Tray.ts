import { BrowserWindow, Menu, Tray } from "electron";
import path from "node:path";
import ObjectUtils from "../../src/utils/ObjectUtils";

let tray = null;

export function createTray(win?: BrowserWindow) {
  if (!ObjectUtils.hasValue(BrowserWindow)) {
    return;
  }
  tray = new Tray(path.join(process.env.VITE_PUBLIC, "icon.png"));
  // 双击图标显示窗口
  tray.on("double-click", () => {
    win?.show();
  });

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "ai 聊天",
      type: "normal",
      toolTip: "ai 聊天",
      click: () => {
        win?.show();
        win?.webContents.send("go-to", "/home");
      },
    },
    {
      type: "separator",
    },
    { label: "Item2", type: "normal" },
    {
      type: "separator",
    },
    { label: "退出", role: "quit" },
  ]);

  // Make a change to the context menu
  contextMenu.items[1].checked = false;

  // Call this again for Linux because we modified the context menu
  tray.setContextMenu(contextMenu);
  tray.setToolTip("This is my application");
}

import ObjectUtils from "../../src/utils/ObjectUtils";

import { BrowserWindow, ipcMain } from "electron";

interface Size {
  width: number;
  height: number;
  animate?: boolean;
}

/** 注册通信 ipc */
export function registerHandler(win?: BrowserWindow) {
  /** 窗口大小改变 */
  ipcMain.handle("window-resize", (e, sizeParams: Size) => {
    if (!ObjectUtils.hasValue(win)) {
      return;
    }
    const size = ObjectUtils.getOrDefault(sizeParams, { width: 800, height: 175, animate: true });

    win.setSize(size.width ?? 800, size.height ?? 175, size.animate ?? true);
  });

  /** 窗口隐藏 */
  ipcMain.handle("window-close", () => {
    if (!ObjectUtils.hasValue(win)) {
      return;
    }

    win.hide();
  });
}

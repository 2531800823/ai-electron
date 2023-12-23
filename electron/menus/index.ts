import { Menu } from "electron";

/** 创建一个空菜单 */
export function createMenu() {
  const menu = Menu.buildFromTemplate([]);

  // 隐藏菜单
  Menu.setApplicationMenu(menu);
}

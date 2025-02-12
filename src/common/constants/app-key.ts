/** 设备类型 */
export enum DeviceEnum {
  Mobile,
  Desktop
}

/** 布局模式 */
export enum LayoutModeEnum {
  Left = "left",
  Top = "top",
  LeftTop = "left-top"
}

// 它将其都暴露出来的目的就是为了同时暴露出其值与其类型
/** 侧边栏打开状态常量 */
export const SIDEBAR_OPENED = "opened"

/** 侧边栏关闭状态常量 */
export const SIDEBAR_CLOSED = "closed"

export type SidebarOpened = typeof SIDEBAR_OPENED

export type SidebarClosed = typeof SIDEBAR_CLOSED

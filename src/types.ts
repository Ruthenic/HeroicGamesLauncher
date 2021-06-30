import ElectronStore from 'electron-store';

interface About {
  description: string
  shortDescription: string
}
export interface AppSettings {
  audioFix: boolean
  autoInstallDxvk: boolean
  autoSyncSaves: boolean
  customWinePaths: Array<string>
  darkTrayIcon: boolean
  defaultInstallPath: string,
  discordRPC: boolean,
  egsLinkedPath: string
  exitToTray: boolean
  language: string
  launcherArgs: string
  maxWorkers: number
  nvidiaPrime: boolean
  offlineMode: boolean
  otherOptions: string
  savesPath: string
  showFps: boolean
  showMangohud: boolean
  useGameMode: boolean
  winePrefix: string
  wineVersion: WineInstallation
}

export interface ContextType {
  category: string
  data: GameInfo[]
  error: boolean
  filter: string
  gameUpdates: string[]
  handleCategory: (value: string) => void
  handleFilter: (value: string) => void
  handleGameStatus: (game: GameStatus) => Promise<void>
  handleLayout: (value: string) => void
  handleSearch: (input: string) => void
  layout: string
  libraryStatus: GameStatus[]
  platform: NodeJS.Platform | string
  refresh: () => Promise<void>
  refreshLibrary: (checkUpdates?: boolean) => void
  refreshing: boolean
  store: ElectronStore
  user: string
}

interface ExtraInfo {
  about: About
  reqs: Reqs[]
}

export interface GameInfo {
  app_name: string,
  art_cover: string,
  art_logo: string,
  art_square: string,
  cloud_save_enabled: boolean,
  compatible_apps: string[],
  developer: string,
  extra: ExtraInfo,
  folder_name: string,
  install: InstalledInfo,
  is_game: boolean,
  is_installed: boolean,
  is_ue_asset: boolean,
  is_ue_plugin: boolean,
  is_ue_project: boolean,
  namespace: unknown,
  save_folder: string,
  title: string
}

export interface GameStatus {
  appName: string
  progress?: number | null
  status:
    | 'installing'
    | 'updating'
    | 'launching'
    | 'playing'
    | 'uninstalling'
    | 'repairing'
    | 'done'
    | 'canceled'
    | 'moving'
    | 'queued'
}

export interface InstallProgress {
  bytes: string
  eta: string
  folder?: string
  percent: string
}
export interface InstalledInfo {
  executable: string | null
  install_path: string | null
  install_size: string | null
  is_dlc: boolean | null
  version: string | null
}

export interface KeyImage {
  type: string
}

export interface Path {
  path: string
}
interface Reqs {
  minimum: string
  recommended: string
  title: string
}

export type SyncType = 'Download' | 'Upload' | 'Force download' | 'Force upload'

export interface WineInstallation {
  bin: string
  name: string
}

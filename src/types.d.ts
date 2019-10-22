export interface NameMaker {
  [s: string]: string
}

export interface Pathlike {
  join: (...args: string[]) => string
  resolve: (folder: string) => string
  sep: string
}

declare class PathToClass {
  static pathUtil: Pathlike
  basePath: Array<string>

  constructor(base: Array<string>)

  currentPath: string
  add: (...paths: string[]) => PathToClass
  path: (...paths: string[]) => string
}

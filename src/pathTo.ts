import { Pathlike, PathToClass } from './types'
import * as path from 'path'

export class PathTo implements PathToClass {
  static pathUtil: Pathlike = path
  basePath: string[] = []
  constructor(...basePath: string[]) {
    this.basePath = basePath
  }

  get currentPath(): string {
    return PathTo.pathUtil.join(...this.basePath)
  }

  add(...paths: string[]): PathToClass {
    return new PathTo(...this.basePath, ...paths)
  }
  path(...paths: string[]): string {
    return PathTo.pathUtil.join(...this.basePath, ...paths)
  }
}

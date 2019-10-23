import * as path from 'path';
export class PathTo {
    constructor(...basePath) {
        this.basePath = [];
        this.basePath = basePath;
    }
    get currentPath() {
        return PathTo.pathUtil.join(...this.basePath);
    }
    add(...paths) {
        return new PathTo(...this.basePath, ...paths);
    }
    path(...paths) {
        return PathTo.pathUtil.join(...this.basePath, ...paths);
    }
}
PathTo.pathUtil = path;

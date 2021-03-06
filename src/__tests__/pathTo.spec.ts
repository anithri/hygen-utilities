// import {PathTo} from 'utils/pathTo'
import { PathToClass } from '../types'
import { PathTo } from '../pathTo'

describe('pathTo', () => {
  it('should be a function', () => {
    expect(typeof PathTo).toEqual('function')
  })
  it('should be a class', () => {
    const instance = new PathTo('/tmp')
    expect(instance).toBeInstanceOf(PathTo)
  })

  describe('new pathTo(...basePaths)', () => {
    let base: string, paths: string[], obj: PathToClass
    beforeEach(() => {
      base = '/some/place'
      paths = ['where', 'it', 'is', 'warm']
      obj = new PathTo(base)
    })

    describe('currentPath', () => {
      it('should default to base', () => {
        expect(obj.currentPath).toEqual(base)
      })
      it('  even with multiple paths in base', () => {
        const arrBase = ['/', 'some', 'place']
        const arrObj = new PathTo(...arrBase)
        expect(arrObj.currentPath).toEqual('/some/place')
      })
    })

    describe('add(...paths)', () => {
      it('should return a new pathTo instance', () => {
        const objWithPaths = obj.add(...paths)
        expect(objWithPaths).toBeInstanceOf(PathTo)
        expect(objWithPaths).not.toEqual(obj)
      })
      it('should have combined base and paths', () => {
        const objWithPaths = obj.add(...paths)
        expect(objWithPaths.basePath[0]).toEqual(base)
        expect(objWithPaths.basePath.slice(1)).toEqual(paths)
      })
    })
    describe('path(...parts)', () => {
      it('should return a string path', () => {
        const result = obj.path('away', 'from', 'here')
        expect(result).toEqual('/some/place/away/from/here')
      })
      it('should not change the origin obj', () => {
        const basePath = obj.basePath
        const result = obj.path('awesome')
        expect(obj.basePath).toEqual(basePath)
      })
    })
  })

  describe('original tests', () => {
    it('should have properties (...basePath)', () => {
      const result = new PathTo('a', 'b')
      expect(result.basePath).toEqual(expect.arrayContaining(['a', 'b']))
      expect(result.currentPath).toBe('a/b')
    })
    it('should add paths', () => {
      const result = new PathTo('a', 'b').add('c')
      expect(result.basePath).toEqual(expect.arrayContaining(['a', 'b', 'c']))
      expect(result.currentPath).toBe('a/b/c')
    })
    it('should return path', () => {
      const result = new PathTo('a', 'b').add('c')
      expect(result.path('d', 'e')).toBe('a/b/c/d/e')
    })
    it('should return current path if called empty', () => {
      const result = new PathTo('a', 'b')
      expect(result.path()).toBe('a/b')
    })
  })
})

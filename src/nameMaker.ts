import { NameMaker, StringMap } from './types'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import * as cc from 'change-case'
import inflection from 'inflection'

const suffixer = {
  get: function(target: StringMap, prop: string): string {
    if (target.hasOwnProperty(prop)) return target[prop]

    if (prop[0] === prop[0].toLowerCase()) {
      return `${target.name}${cc.pascal(prop)}`
    } else if (prop === prop.toUpperCase()) {
      return `${target.NAME}_${prop}`
    } else {
      return `${target.Name}${cc.pascal(prop)}`
    }
  },
}

export const nameMaker = ({ name, ...args }: StringMap): NameMaker => {
  const baseData = {
    name: inflection.singularize(cc.camel(name)),
    Name: inflection.singularize(cc.pascal(name)),
    names: inflection.pluralize(cc.camel(name)),
    Names: inflection.pluralize(cc.pascal(name)),
    NAME: cc.constant(inflection.singularize(cc.pascal(name))),
    NAMES: cc.constant(inflection.pluralize(cc.camel(name))),
  }
  Object.assign(args, baseData)
  return new Proxy(baseData, suffixer)
}

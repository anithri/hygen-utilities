// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import inflection from 'inflection';
import Case from 'case';
const suffixer = {
    get: function (target, prop) {
        if (target.hasOwnProperty(prop))
            return target[prop];
        if (prop[0] === prop[0].toLowerCase()) {
            return `${target.name}${Case.pascal(prop)}`;
        }
        else if (prop === prop.toUpperCase()) {
            return `${target.NAME}_${prop}`;
        }
        else {
            return `${target.Name}${Case.pascal(prop)}`;
        }
    },
};
export const nameMaker = ({ name, ...args }) => {
    const camel = Case.camel(name);
    const pascal = Case.pascal(name);
    const baseData = {
        name: inflection.singularize(camel),
        Name: inflection.singularize(pascal),
        names: inflection.pluralize(camel),
        Names: inflection.pluralize(pascal),
        NAME: Case.constant(inflection.singularize(pascal)),
        NAMES: Case.constant(inflection.pluralize(camel)),
    };
    Object.assign(args, baseData);
    return new Proxy(baseData, suffixer);
};

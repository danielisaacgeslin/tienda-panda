/*export class ImmutabilityHelper {
    public static getType(variable: any): string {
        let type: string = typeof variable;
        type = variable === null ? 'null' : type;
        type = variable instanceof Array ? 'array' : type;
        return type;
    }

    public static immute<T>(variable: any): T {
        let copy: T;
        const variableType: string = ImmutabilityHelper.getType(variable);

        if (variableType === 'function') throw new Error('Functions are not supported');

        if (variableType === 'object') copy = Object.assign({}, variable);
        else if (variableType === 'array') copy = variable.slice();
        else copy = variable;

        return <T>copy;
    }

    public static copy<T>(variable: any): T {
        let result: T = <T>ImmutabilityHelper.immute(variable);

        const loop = (value: any): any => {
            const valueType: string = ImmutabilityHelper.getType(value);
            const loopable: boolean = !!(valueType === 'object' || valueType === 'array');
            const loopHandler = (index) => {
                value[index] = ImmutabilityHelper.immute(value[index]);
                if (loopable) loop(value[index]);
            }

            if (valueType === 'object') for (let index in value) loopHandler(index);
            if (valueType === 'array') for (let index = 0; index < value.length; index++) loopHandler(index);
        }

        loop(result);

        return <T>result;
    }
}*/

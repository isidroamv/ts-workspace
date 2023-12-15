import { add } from '@ts-workspace/module-a';

export function multiply(a: number, b: number) {
    let c = 0;
    for (let i = 0; i < b; i++) {
        c = add({ a: a, b: c });
    }
    return c;
}
import { promisify } from "util"

async function asyncFunction(param: string, delay = 2000) {
    const pTimeout = promisify(setTimeout);
    const result = await pTimeout(delay, `resovled value ${param}`);
    return result;
}

const testAsync = async () => {
    const returnValue = await asyncFunction('!! resovled value 2');
    // const res = await testPaSyncPromise();
}

const callbackWrapper = <T>(delay: number, returnValue: T, cb: (err: any, value: T) => void) => {
    setTimeout(() => {
        cb(null, returnValue);
    }, delay);
}

const pAsyncPromise = promisify(callbackWrapper);

const testPaSyncPromise = async <T>(delay: number, value: T) => {
    const result = await pAsyncPromise(delay, value)
    return result;
}

export { asyncFunction, testAsync, testPaSyncPromise };
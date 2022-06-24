type KeyValuePairs = {
    [key: string | symbol]: string
}

type KeyValueDictionary<T> = {
    [key: string | symbol]: T
}

class Dict<T> {
    entities: KeyValueDictionary<T> = {};
    getEntities(): KeyValueDictionary<T> {
        return this.entities;
    }
    pushEntities(data: T, key: string | symbol) {
        this.entities[key] = data;
    }
    get keys(): string[] | symbol[] {
        const array = [];
        for (const key in this.entities || {}) {
            array.push(key);
        }
        return array;
    }
}

class Entry<T> {
    constructor(data: T) {
        this.data = data;
    }
    data?: T;
    toString(): string {
        return JSON.stringify(this.data);
    }
}

function test() {
    const dict = new Dict<Entry<string>>();
    dict.pushEntities(new Entry('data test 1'), 'first');
    dict.pushEntities(new Entry('data test 2'), 'second');
    dict.pushEntities(new Entry('data test 3'), 'third');
    dict.pushEntities(new Entry('data test 1a'), 'first second');
    dict.pushEntities(new Entry('data test 1b'), 'first second2');

    const samples = dict.getEntities();
    const keys = dict.keys;
    for (const key of keys) {
        console.log(samples[key].toString());
    }
}

export default test
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
    constructor(data: T, name = null) {
        this.data = data;
        this.name = name;
    }

    data: T;
    name: string | null;
    toString(): string {
        return JSON.stringify(this.data);
    }
}

class BaseEntry {
}
class OmitEntry<T> extends BaseEntry {
    constructor(public data: T, public tetriary = 'string') {
        super();
        this.data = data;
    }
    static GetInstance<U>(data: U): SubEntry<U> {
        return new OmitEntry<U>(data);
    }
}

type SubEntry<T> = Omit<Entry<T>, 'name' | 'toString'>


function omitTest() {
    //const subEmit = BaseEntry.GetInstance<string>('dane');
    const subEmit2 = OmitEntry.GetInstance({ datacall: 'datacall' });
    console.log(subEmit2.data)
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

export { test, omitTest }
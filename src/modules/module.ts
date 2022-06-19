export class MyClass {
    constructor() {
    }

    private static get Name() {
        return 'MyClass';
    }
    /**
     * JS doc document
     */
    static introduce(): void {
        console.log(`log from ${this.Name}`)
    }
}
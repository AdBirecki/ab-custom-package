import { testAsync, testPaSyncPromise } from "./asyncModule";
import { ArmoredCar } from "./cars/ArmoredCar";
import { MyClass } from "./modules/module";
import { RussianTankBuilder } from "./tankBuilders/Abstract/russianTankBuilder/RussianTankBuilder";
import AbstractTank from "./tanks/Abstract/AbstractTank";
import T72Tank from "./tanks/Russian/NiznyTagil/T72";
import { test, omitTest } from "./typeModule";

console.log('log1!')
MyClass.introduce();

const ArCar = new ArmoredCar('Fiat', '132');
const typeName = ArmoredCar.GetTypeName();

console.log(typeName);


const russianTankBuilder = new RussianTankBuilder();
//type NewType = ReturnType();
T72Tank.constructor
console.log(T72Tank);
console.log(T72Tank.constructor);
console.log(T72Tank instanceof AbstractTank);
console.log(typeof T72Tank);

russianTankBuilder.initializeBuild(T72Tank);

//omitTest();
//test();
//testAsync();

const runAsync = async () => {
    const value = await testPaSyncPromise(2000, 'test data');
    console.log(value);
}
runAsync();

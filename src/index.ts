import { ArmoredCar } from "./cars/ArmoredCar";
import { MyClass } from "./modules/module";
import { RussianTankBuilder } from "./tankBuilders/Abstract/russianTankBuilder/RussianTankBuilder";
import T72Tank from "./tanks/Russian/NiznyTagil/T72";

console.log('log1!')
MyClass.introduce();

const ArCar = new ArmoredCar('Fiat', '132');
const typeName = ArmoredCar.GetTypeName();

console.log(typeName);


const russianTankBuilder = new RussianTankBuilder();
//type NewType = ReturnType();


russianTankBuilder.initializeBuild(T72Tank.name);

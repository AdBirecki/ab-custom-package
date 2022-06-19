import { ArmoredCar } from "./cars/ArmoredCar";
import { MyClass } from "./modules/module";

console.log('log1!')
MyClass.introduce();

const ArCar = new ArmoredCar('Fiat', '132');
const typeName = ArmoredCar.GetTypeName();

console.log(typeName);

import { NullableString } from "../types/NullableString";
import { BaseCar } from "./BaseCar";

export class ArmoredCar extends BaseCar {
    static GetTypeName: () => string = () => 'ArmoredCar';
    constructor(name: NullableString, surname: NullableString) {
        super(name, surname)
    }
}
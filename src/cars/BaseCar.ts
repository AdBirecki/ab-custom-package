import { NullableString } from "../types/NullableString";

export abstract class BaseCar {
    /**
     * This is constrcutor for base car clas
     * @param model model string
     * @param plateNumber plate for a car
     */
    constructor(model: NullableString, plateNumber: NullableString) {
        this.model = model;
        this.plateNumber = plateNumber;
    }
    /**
     * 
     * @returns Model name
     */
    getModel(): NullableString {
        return this.model;
    }
    private model: NullableString = null;
    private plateNumber: NullableString = null;
}   
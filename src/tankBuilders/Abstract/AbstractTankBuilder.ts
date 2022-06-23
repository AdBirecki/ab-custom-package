import AbstractTank from "../../tanks/Abstract/AbstractTank";
import K1Tank from "../../tanks/Korean/K1Tank";
import K2Tank from "../../tanks/Korean/K2Tank";
import T64Tank from "../../tanks/Russian/Charkov/T64";
import T80Tank from "../../tanks/Russian/Charkov/T80";
import T72Tank from "../../tanks/Russian/NiznyTagil/T72";

T64Tank.name
export enum TankType {
    T64Tank,
    T72Tank,
    T80Tank,
    T90Tank,
    K1Tank,
    K2Tank
}

export interface AbstractTankBuilder {
    initializeBuild(tank: string): this;
    buildChassis(): this;
    buildTurret(): this;
    buildCannon(): this;
    getTank(type: TankType): AbstractTank;
    cleanTankState(): this;
}
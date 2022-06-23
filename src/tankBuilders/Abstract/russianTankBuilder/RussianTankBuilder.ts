import AbstractTank from "../../../tanks/Abstract/AbstractTank";
import T64Tank from "../../../tanks/Russian/Charkov/T64";
import T80Tank from "../../../tanks/Russian/Charkov/T80";
import T72Tank from "../../../tanks/Russian/NiznyTagil/T72";
import T90Tank from "../../../tanks/Russian/NiznyTagil/T90";
import { TankCannon } from "../../../tanks/TankParts/TankCannon";
import { TankChassis } from "../../../tanks/TankParts/TankChassis";
import { TankTurret } from "../../../tanks/TankParts/TankTurret";
import { AbstractTankBuilder } from "../AbstractTankBuilder";

export class RussianTankBuilder implements AbstractTankBuilder {

    private underConstruction: Partial<AbstractTank> | null = null;

    initializeBuild(type: string): this {
        this.cleanTankState();
        switch (type) {
            case T64Tank.name:
                this.underConstruction = new T64Tank();
                break;
            case T80Tank.name:
                this.underConstruction = new T80Tank();
                break;
            case T72Tank.name:
                this.underConstruction = new T72Tank();
                break;
            case T90Tank.name:
                this.underConstruction = new T90Tank();
                break;
            default:
                throw Error(`Unknown tank type: ${type}`);
        }
        return this;
    }

    getTank(): AbstractTank {
        if (this.underConstruction === null) {
            throw Error(`null error !`);
        }
        return this.underConstruction as AbstractTank;
    }

    cleanTankState(): this {
        this.underConstruction = null;
        return this;
    }

    buildChassis(): this {
        const chassis = TankChassis.SolidSteel;
        this.underConstruction = { ...this.underConstruction, chassis };
        return this;
    }

    buildTurret(): this {
        const turret = TankTurret.SolidSteelTurret;
        this.underConstruction = { ...this.underConstruction, turret };
        return this;
    }

    buildCannon(): this {
        const cannon = TankCannon["125mm"]
        this.underConstruction = { ...this.underConstruction, cannon };
        return this;
    }
}
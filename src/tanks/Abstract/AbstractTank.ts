import { TankType } from "../../tankBuilders/Abstract/AbstractTankBuilder";
import { TankChassis } from "../TankParts/TankChassis";
import { TankCannon } from "../TankParts/TankCannon";
import { TankTurret } from "../TankParts/TankTurret";

export default abstract class AbstractTank {
    productionYear: Date | null = null;
    crewSize: | 3 | 4 = 3;
    chassis: TankChassis | null = null;
    cannon: TankCannon | null = null;
    turret: TankTurret | null = null;
    get runtimeTypeName(): string {
        return typeof this
    }

}
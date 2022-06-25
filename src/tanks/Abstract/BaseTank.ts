abstract class BaseTank {
    productionYear: Date | null = null;
    crewSize?: | 3 | 4;
    abstract weight: number | null;
}
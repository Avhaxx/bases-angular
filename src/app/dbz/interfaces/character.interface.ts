
export interface Character{
  name: string;
  power: number;
}
interface Hero extends Character{
  heroType: string;
}
interface Villain extends Character{
  villainType: string;

}

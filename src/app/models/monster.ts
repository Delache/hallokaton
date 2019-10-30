export class Monster {
  public id: number;
  public picture: string;

  constructor(input?: Monster) {
    if (input != null) {
    Object.assign(this, input);
    }
  }
}

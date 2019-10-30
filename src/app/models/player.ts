export class Player {
  public name: string;
  public avatar: string;
  public score: number;

  constructor(input?: Player) {
    if (input != null) {
    Object.assign(this, input);
    }
  }
}

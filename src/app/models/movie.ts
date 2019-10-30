export class Movie {
  public id: number;
  public year: number;
  public postUrl: string;

  constructor(input?: Movie) {
    if (input != null) {
    Object.assign(this, input);
    }
  }
}

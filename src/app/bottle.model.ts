export class Bottle {
  points: number;
  name: string;
  color: string;

  constructor(kwargs: Bottle) {
    ({ points: this.points, name: this.name, color: this.color } = kwargs);
  }
}

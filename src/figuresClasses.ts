type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function RoundDownTwo(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(`sides ${this.a}, ${this.b} or ${this.c} can't be <= 0`);
    }

    const longest = Math.max(this.a, this.b, this.c);

    if (longest >= this.a + this.b + this.c - longest) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return RoundDownTwo(area);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${this.radius} can't be <= 0`);
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return RoundDownTwo(area);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `height ${this.height} or width : ${this.width} can't be <= 0`,
      );
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return RoundDownTwo(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}

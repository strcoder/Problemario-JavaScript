class Punto {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  toStringCartesianas() {
    return `(${this.x}, ${this.y})`;
  }

  toStringPolares() {
    let r = Math.pow(this.x, 2) + Math.pow(this.y, 2);
    r = Math.sqrt(r) % 1 == 0 ? Math.sqrt(r) : `&#8730;${r}`;
    const angulo = parseInt((Math.atan2(this.x, this.y) * 180) / Math.PI);

    return `(${r}, ${angulo}°)`;
  }
}

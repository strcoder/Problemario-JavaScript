class Complejo {
  constructor(real = 0, imaginary = 0) {
    this.real = real;
    this.imaginary = imaginary;
  }

  toString() {
    if (this.imaginary < 0) {
      return `${this.real} - ${this.imaginary * -1}<em>i</em>`;
    }
    return `${this.real} + ${this.imaginary}<em>i</em>`;
  }

  addition(number) {
    const real =  this.real + number.real;
    const imaginary =  this.imaginary + number.imaginary;
    return new Complejo(real, imaginary);
  }

  subtraction(number) {
    const real =  this.real - number.real;
    const imaginary =  this.imaginary - number.imaginary;
    return new Complejo(real, imaginary);
  }
}

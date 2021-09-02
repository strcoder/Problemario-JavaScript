class Fecha {
  constructor(value) {
    this.value = new Date(value);
  }

  getDate() {
    return this.value.getUTCDate();
  }

  getDay() {
    return this.value.getUTCDay();
  }

  getMonth() {
    return this.value.getUTCMonth();
  }

  getYear() {
    return this.value.getUTCFullYear();
  }

  shortDate() {
    const day = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
    const month = this.getMonth() + 1 < 10 ? `0${this.getMonth() + 1}` : this.getMonth() + 1;
    return `${day}/${month}/${this.getYear()}`;
  }

  largeDate() {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];

    return `${this.getDate()} de ${months[this.getMonth()]} de ${this.getYear()}`;
  }
}

class Empleado {
  constructor(nombre, fecha, salario) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.salario = salario;
  }

  getEmpleado() {
    return `
      <p><strong>Empleado: ${this.nombre}</strong> (${this.fecha.shortDate()})</p>
      <p>Salario diario: $${this.salario}</p>
      <p>Salario quincenal: $${this.calculateSalary()}</p>
      <p>Fecha: ${this.fecha.largeDate()}</p>
    `;
  }

  calculateSalary() {
    return this.salario * 15;
  }
}
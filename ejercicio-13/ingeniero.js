class Ingeniero extends Empleado {
  constructor(nombre, fecha, salario, departamento) {
    super(nombre, fecha, salario);
    this.departamento = departamento;
  }

  getIngeniero() {
    return `
    <p><strong>Ingeniero: ${this.nombre}</strong> (${this.fecha.shortDate()})</p>
      <p>Departemento: ${this.departamento}</p>
      <p>Salario diario: $${this.salario}</p>
      <p>Salario quincenal: $${this.calculateSalary()}</p>
      <p>Fecha: ${this.fecha.largeDate()}</p>
    `;
  }
}
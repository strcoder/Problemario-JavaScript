function Empleado(nombre, fecha, salarioDiario) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.salarioDiario = salarioDiario;
}

Empleado.prototype.salario = function () {
    return this.salarioDiario * 15;
}

Empleado.prototype.getEmpleado = function () {
    let text = '';

    text += `<h2>Nombre:</h2><p>${this.nombre}</p>`;
    text += `<h2>Fecha:</h2><p>${this.fecha.fechaAbreviada()}</p><p>${this.fecha.fechaExtendida()}</p>`;
    text += `<h2>Salario Diario:</h2><p>$${this.salarioDiario}</p>`;
    return text;
}

function Ingeniero(nombre, fecha, salarioDiario, departamento) {
    Empleado.call(this, nombre, fecha, salarioDiario);

    this.departamento = departamento;
}
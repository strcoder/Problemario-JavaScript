function Fecha(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
}

Fecha.prototype.getDay = function () {
    return this.day;
}

Fecha.prototype.getMonth = function () {
    return this.month;
}

Fecha.prototype.getYear = function () {
    return this.year;
}

Fecha.prototype.fechaAbreviada = function () {
    return '(' + this.day + '/' + this.month + '/' + this.year + ')';
}

Fecha.prototype.fechaExtendida = function () {
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return `(${this.day} de ${months[this.month - 1]} de ${this.year})`
}
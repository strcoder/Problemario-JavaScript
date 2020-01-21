// *? ************************ ?* //
// ** Clase Punto ejercicio 11 ** //
// *? ************************ ?* //
class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toStringCartesianas() {
        let texto = `(${this.x}, ${this.y})`;
        return texto;
    }

    toStringPolares() {
        let r = 0;
        let angulo = 0;
        let texto = '';

        r = (Math.pow(this.x, 2) + Math.pow(this.y, 2));
        r = Math.sqrt(r) % 1 == 0 ? Math.sqrt(r) : `&#8730;${r}`;
        angulo = Math.atan2(this.x, this.y) * 180 / Math.PI;
        angulo = parseInt(angulo);

        texto = `(${r}, ${angulo}°)`;
        return texto;
    }
}
// *? ************************ ?* //
// ** Clase Punto ejercicio 11 ** //
// *? ************************ ?* //
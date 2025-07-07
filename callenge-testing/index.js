

class CarritoCompra {
    constructor( ){
        this.cart = [];
        this.id = 1;
    };


    agregarProducto(producto) {
       
        this.cart.push({...producto, id:this.id });
        this.id++;
      }

    calcularTotal() {
        return this.cart.reduce ((total, producto) => total + producto.price, 0);
    }


    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        return total - descuento;
    }
}

module.exports = CarritoCompra;
    
const CarritoCompra = require("../index");

describe("La clase CarritoCompra", () => {
  let carritoCompra;
  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });


  it("Debe tener un constructor que inicializa el carrito como un array vacio", () => {
    expect(Array.isArray(carritoCompra.cart)).toBe(true);
    expect(carritoCompra.cart.length).toBe(0);
  });


  it("Debe tener el metodo agregarProducto que agregue un nuevo producto al carrito", () => {
    expect(carritoCompra.agregarProducto).toBeDefined();

    carritoCompra.agregarProducto({ name: "Zapatillas", price: 10 });

    expect(carritoCompra.cart.length).toBe(1);

    carritoCompra.agregarProducto({ name: "Remera", price: 15 });
    carritoCompra.agregarProducto({ name: "Pantalon", price: 20 });
    expect(carritoCompra.cart.length).toBe(3);
  });


  it("Debe tener el metodo calcularTotal que devuelve la suma del total de la compra", () => {
    expect(carritoCompra.calcularTotal).toBeDefined();

    carritoCompra.agregarProducto({ name: "Zapatillas", price: 10 });
    carritoCompra.agregarProducto({ name: "Remera", price: 15 });
    carritoCompra.agregarProducto({ name: "Pantalon", price: 20 });

    expect(carritoCompra.calcularTotal()).toBe(45);
  });

  it("Debe tener el metodo aplicarDescuento que recibe un porcentaje de descuento a aplicar sobre el total de la compra y retorna un nuevo total", () => {
    expect(carritoCompra.aplicarDescuento).toBeDefined();

    carritoCompra.agregarProducto({ name: "Zapatillas", price: 10 });
    carritoCompra.agregarProducto({ name: "Remera", price: 15 });
    carritoCompra.agregarProducto({ name: "Pantalon", price: 20 });
    
    expect(carritoCompra.aplicarDescuento(10)).toBe(40.5);
    expect(carritoCompra.aplicarDescuento(5)).toBe(42.75);
    expect(carritoCompra.aplicarDescuento(20)).toBe(36);
  });

});

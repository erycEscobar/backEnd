class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (this.products.find(producto => producto.code === product.code)) {
            return "Code in use, try another";
        } else {
            this.products.push(product);
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(producto => producto.id == id);
        if (product) { 
            return product;
        }
        return "ERROR: Not Found";
    }

}

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = Product.incrementID();
    }

    static incrementID() {
        (this.idIncrement) ? this.idIncrement++ : this.idIncrement = 1;
        return this.idIncrement;
    }
}

const product1 = new Product("Celular", "Celular", 150000, "", "ASD123456789", 10);
const product2 = new Product("Monitor", "Monitor", 90000, "", "DSA6549860032", 15);
const product3 = new Product();

const productManager = new ProductManager();

const addProducts = () => {
    productManager.addProduct(product1);
    productManager.addProduct(product2);
    productManager.addProduct(product3);
}

const test = () => {
    console.log("-----------------");
    console.log("TEST");
    console.log("-----------------");
    addProducts();
    console.log("Se añadieron los siguientes productos:");
    console.log(productManager.getProducts());
    console.log("--------------------- Si añadimos un producto que ya existe");
    console.log(productManager.addProduct(product2));
    console.log("--------------------- Obtenemos un producto con id 3");
    console.log(productManager.getProductById(3))
}

test();
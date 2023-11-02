Clases con ECMAScript y ECMAScript avanzado
-------------------------------------------

Consigna:
    - Realizar una clase "ProductManager" que gestione un conjunto de productos.

Aspectos a incluir:
    - Debe crearse desde su constructor con el elemento products, el cual sera un arreglo vacio.
    - Cada producto que gestione debe contar con las propiedades:
        - title
        - decription
        - price
        - thmbnail
        - code
        - stock
    - Debe contar con un metodo "addProduct" el cual agregara un producto al arreglo de productos inicial.
        - Validar que no se repita el campo "code" y que todos los campos sean obligatorios
        - Al agregarlo, debe crearse con un id autoincrementable
    - Debe contar con un metodo "getProducts" el cual debe devolver el arreglo con todos los productos creados hasta el momento
    - Debe contar con un metodo "getProductById" el cual debe buscar en el arreglo el producto que coincida con el id
        - En caso de no coincidir ningun id, mostrar en consola un error "Not found"

Formato del entregable:
    - Archivo de Javascript listo para ejecutarse desde node
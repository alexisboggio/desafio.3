const Container = require("./clase")

const contenedor = new Container("./productos.txt")
contenedor.getAll()

async function test() {
    await contenedor.create()
    
    const productoAGuardar1 = [    {
        "tittle": "Escuadra",
        "price": 123.45,
        "thumbnail": "https://images.app.goo.gl/zUd6BzT5gf2VGEVt6",
        "id": "1"
    },
    {
        "tittle": "Calculadora",
        "price": 234.56,
        "thumbnail": "https://images.app.goo.gl/dnKCnq9khFbssb8Q9",
        "id": "2"
    },
    {
        "tittle": "Globo terraqueo",
        "price": 345.57,
        "thumbnail": "https://images.app.goo.gl/XfenrHg2swLSkAe67",
        "id": "3"
    }]
    try {
        await contenedor.save(productoAGuardar1)
    } catch(err) {
        console.error(err)
    }

    try {
        const lista = await contenedor.getAll()
        return lista
    } catch(err) {
        console.error(err)
    }

    try {
        const producto = await contenedor.getById(1)
        console.log("El GetById devuelve: ", producto, "\n ")
    } catch(err) {
        console.error(err)
    }


 /*       try {
        const retorno = await contenedor.deleteById(1)
        console.log("El DeleteById devuelve: ", retorno, "\n ")
    } catch(err) {
        console.error(err)
    }

    try {
        const retorno = await contenedor.deleteAll()
        console.log(retorno, "\n ")
    } catch(err) {
        console.error(err)
    } */
} 

test()

module.exports = contenedor
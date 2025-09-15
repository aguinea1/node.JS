/*const car = {brand: "volkswagen", model: "sirocco", year: 2022};
const {brand, model} = car;
console.log(brand);
console.log(model);

const car1 = {brand: "land rover", model: "freelander"};
const carr = [{...car}, {...car1}]

for (let i = 0; i < carr.length; i++)
    console.log(`My car is a/an ${carr[i].brand}`)
*/
const car = { brand: "volkswagen", model: "sirocco", year: 2022 };
const { brand, model } = car;
console.log(brand);
console.log(model);

const car1 = { brand: "land rover", model: "freelander" };
const coches = [{ ...car }, { ...car1 }];

// Función flecha que devuelve todos los nombres de coches en un string
const listarCoches = (arr) => arr.map(c => c.brand).join(", ");

// Usamos template literal para imprimir
console.log(`Mis coches son: ${listarCoches(coches)}`);

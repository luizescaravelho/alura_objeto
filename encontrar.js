const clientes = require("./clientes.json");

console.log(clientes);

const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave] === valor);
}

const encontrado = encontrar(clientes, "nome", "Kirby");

console.log(encontrado);

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);
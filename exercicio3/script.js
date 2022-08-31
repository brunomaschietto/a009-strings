//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const novaString = frase.replaceAll('verde', 'rosa').replaceAll('azul', 'laranja')
console.log(novaString)
console.log(`A nova string possui verde e laranja? ${novaString.includes('verde')}, ${novaString.includes('laranja')}`)
console.log((novaString.substr(0, 74) + novaString.slice(74).toUpperCase()));
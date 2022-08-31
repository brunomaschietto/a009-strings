const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//letra A
const minhaStringSemEspaco = minhaString.trim()
console.log(minhaStringSemEspaco);

//letra B
console.log(`Quantidade de caracteres da string com os espaços: ${minhaString.length} \nQuantidade de caracteres da string sem os espaços: ${minhaStringSemEspaco.length}`)

//letra C
const minhaStringSemTraco = minhaString.replaceAll('________.','sticioso');
console.log(minhaStringSemTraco);


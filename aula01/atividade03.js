// exemplo utilizando o modulo path, relacionado a arquivos
const path = require('path')

let arquivo = 'cup-of-coffee-gb2275dc5a_1920.jpg';

// exibe a extensao do arquivo
console.log('Extensão:', path.extname(arquivo))

// exibe o nome completo
console.log('Nome completo:', path.basename(arquivo))

// nome do diretorio da imagem
console.log('Nome do diretorio:', path.dirname(arquivo))

// caminho absoluto
console.log('Nome absoluto:', path.resolve(arquivo))
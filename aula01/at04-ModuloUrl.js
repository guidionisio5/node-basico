// Exemplo utilizando modulo nativo do node - URL

// importa o modulo url
const url = require('url')

// node.js https://www.google.com/search?q=node.js&rlz=1C1ISCS_pt-PTBR996BR996&ei=V7h-Y9aYM-WG0Aax3JSgDw&ved=0ahUKEwiWoOnCxcX7AhVlA9QKHTEuBfQQ4dUDCA8&uact=5&oq=node.js&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEENKBAhBGABKBAhGGABQiQZYiQZghghoAXABeACAAXyIAXySAQMwLjGYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp

let site = 'https://www.amazon.com.br/Notebook-Gamer-G15-i1000-D20P-Gera%C3%A7%C3%A3o-NVIDIA/dp/B0B5S5RML3/ref=asc_df_B0B5S5RML3/?tag=googleshopp00-20&linkCode=df0&hvadid=379817941610&hvpos=&hvnetw=g&hvrand=14640412779147021164&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100551&hvtargid=pla-1719494849019&psc=1'

let partUrl = new url.URL(site)

// exibe o domínio
console.log('Domínio:', partUrl.host)

console.log('Caminho ou rota', partUrl.pathname)

console.log('Query String', partUrl.search)

console.log('Parâmetros:', partUrl.searchParams)

console.log('Parâmetro tag da url:', partUrl.searchParams.get('tag'))
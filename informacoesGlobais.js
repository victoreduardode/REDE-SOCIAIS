const url = 'https//raw.githusetcontent.com/guilhermeonrails/api/main/dados-globais.js'
console.log(url);

async function vizualizarinformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    const paragrafo = documen.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    
    
    
    
    
    
    console.log(dados);
}
vizualizarinformacoesGlobais()

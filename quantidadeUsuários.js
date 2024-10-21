async function quantidadeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDaRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDaRedes,
            y: quantidadeUsuarios,
            type: 'bar'
        }
    ]
    const grafico = document.createElement('div')
    grafico.className= 'grafico'
    document.getElementById('graficos-container').appendChild(graficos)
    Plotly.newPLot(grafico,data)

    console.log(dados)
}

quantidadeUsuarios()







@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700&display=swap');

:root {
    --bg-color: #222831;
    --primary-color: #DDDDDD;
    --secondary-color: #F05454;
    --font: 'Nunito Sans', sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--primary-color);
    font-family: var(--font);
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
}

header {
    background-color: var(--primary-color);
    text-align: center;
    padding: 1rem;
}


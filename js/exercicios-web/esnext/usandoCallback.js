// sem promise

const http = require('http')

const getTurma = (letra, callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado =``

        res.on('data', dados=>{
            resultado+=dados // concatenando dados vindos como respesto da requisição http
        })
        res.on('end', ()=>{ 
            //passar os dados concatenados, como json para objeto e retornar par a callback
           callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma("A", alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma("B", alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    })
    getTurma("C", alunos => {
        nomes = nomes.concat(alunos.map(a=>`C: ${a.nome}`))
        console.log(nomes)
    })
})
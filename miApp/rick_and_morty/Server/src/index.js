const http = require('http');
const characters = require('./utils/data')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').pop()
        
        
        const charFound = characters.find(chr=>chr.id === +id)
        if(charFound){
            res.writeHead(200, { 'Content-Type':'application/json' })
            res.end(JSON.stringify(charFound))
        }else{
            res.writeHead(200, { 'Content-Type':'text/plain' })
            res.end(`Personaje con Id: ${id}, no encontrado`)
        }
        
    }
}).listen(3001, 'localhost')
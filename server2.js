import {createServer} from 'http'
const PORT = process.env.PORT


const users = [
    {id:1, name: 'jhon doe'},
    {id:2, name: 'doe'},
    {id:3, name: 'fatika'},

]

const server =createServer((req,res) => {
    if(req.url === '/api/users' && req.method ==='GET'){
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    } else {
        res.setHeader('content-type', 'application/json')
        res.statusCode = 404
        res.write(JSON.stringify({message : 'route not found'}))
        res.end()
    }

})

server.listen (PORT, ()=>{
    console.log(`server is live at ${PORT}`);
    
})
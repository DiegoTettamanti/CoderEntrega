import  express  from 'express';



const app = express();
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
app.get('/query', (req, res) =>
{
    res.send(req.query)
    console.log("Query sent")
    const {pruducts, id} = req.query
    res.send({
        pruducts,
        id
    })
})


app.get('/productos', (req, res) => {
    res.send(`<h1 style="color:red";>Peticiones al servidor</h1>`)})
    console.log("Probando respuesta del servidor...")

app.listen(PORT, err =>{
    if(err){
        console.log(err)
    }else{`Escuchando en el puerto {PORT} en el servidor`
}})
app.get('/params/:products/:id', (req, res) =>
    console.log(req.params))

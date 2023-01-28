import  express  from 'express';
import productManager from './productManager.js';


const app = express();
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
app.get('/query', (req, res) =>
{
    res.send(req.query)
    console.log("Query sent")
    const {pruducts: products, id} = req.query
    res.send({
        products,
        id
    })
})


app.get('/productos', (req, res) => {
    res.send('/productos')
    console.log("Probando respuesta del servidor...")})
    app.get('/productos/:id', (req, res) => {
        res.send('/productos.txt')})

app.listen(PORT, err =>{
    if(err){
        console.log(err)
    }else{`Escuchando en el puerto {PORT} en el servidor`
}})
app.get('/params/:products/:id', (req, res) =>
    console.log(product, id))


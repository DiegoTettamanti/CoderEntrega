import  express  from 'express';


const app = express();
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
const products = [
    {
     
            "title": "Headphones",
            "price": 250,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/vol-3/128/headphones-1024.png",
            "id": "1"
    }
    ,
     {
            "title": "Guitar",
            "price": 450,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/vol-3/128/guitar-1024.png",
            "id": "2"
    },
    
     {
            "title": "Piano",
            "price": 750,
            "thumbnail": "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            "id": "3"
    } ]



//http://localhost:8080/products

app.get('/', (req, res) => {
    res.send(products)
    console.log("Devuelve array de productos")})

    app.get('/productos/:id', (req, res) => {
        res.send('/productos.txt')})

app.listen(PORT, err =>{
    if(err){
        console.log(err)
    }else{`Escuchando en el puerto {PORT} en el servidor`
}})
app.get('/:id', (req, res) =>{
    const { id } = req.params
    const product = products.find(product => product.id === id)
    if(!product) return res.send("product not found")
    res.send(
        product
    )
    })

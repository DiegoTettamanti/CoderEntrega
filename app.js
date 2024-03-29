import  express  from 'express';



const app = express();
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
const products = [
    {
            "id": '1',
            "title": "Headphones",
            "price": 50,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/vol-3/128/headphones-1024.png",
            
    }
    ,
     {      "id": '2',
            "title": "Guitar",
            "price": 450,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/vol-3/128/guitar-1024.png",
            
    },
    
     {      
            "id": '3',
            "title": "Piano",
            "price": 4750,
            "thumbnail": "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    } ,

    {       
            "id": '4',
            "title": "Saxophone",
            "price": 1350,
            "thumbnail": "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    } ,

    {       
            "id": '5',
            "title": "Trumpet",
            "price": 1250,
            "thumbnail": "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    } ,
    {       
            id: '6',
            title: "Harp",
            price: 2000,
            thumbnail: "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    } ,

    {
            id: '7',
            title: "Drums",
            price: 550,
            thumbnail: "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    },
    
    {
            id: '8',
            title: "Bandonion",
            price: 1750,
            thumbnail: "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    },
    
    {
            id: '9',
            title: "Organ",
            price: 800,
            thumbnail: "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    } ,

    {       
            id: '10',
            title: "Bongo",
            price: 200,
            thumbnail: "https://media.istockphoto.com/photos/keyboard-music-white-picture-id481907373" ,
            
    } 



]



//http://localhost:8080/

app.get('/', (req, res) => {
    res.send(products)
    console.log("Devuelve array de productos")})



app.get('/:idProduct', (req, res) =>{
    const { idProduct } = req.params
    const product = products.find(product => product.id === idProduct)
    if(!product) return res.send("product not found")
    res.send(
        product
    )
    })

app.get('/params/:title/:id', (req, res) => {
    console.log(req.params);
    const {title,id} = req.params;
    res.send({title, id})
})


app.get('/query', (req, res) => {
    const { title, price, id } = req.query
    res.send({
        title,
        price,
        id
    })
})


    app.listen(PORT, err =>{
        if(err){
            console.log(err)
        }else{`Escuchando en el puerto {PORT} en el servidor`
    }})
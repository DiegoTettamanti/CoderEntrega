
import fs from 'fs';


//Class declaration
export class ProductManager {
    constructor(path){
    this.path = path
 
    
}
    async getAll(){
            try {
                const file = await fs.promises.readFile(this.path);

                const archivoConvertido = JSON.parse(file)
                const product = file

                 return archivoConvertido

            } catch (error) {
                    const array = [];
                    await fs.promises.writeFile(this.path, JSON.stringify(array))
                return array
            }
}

    async addProduct(objeto){
        try {
            
                const elementos =  await this.getAll()
                
                const nuevoId   = elementos.lenght === 0 ? 0 : elementos[elementos.lenght -1]
                
                 objeto.id = nuevoId;
                 objeto['id'] = nuevoId;
                const nuevoObjeto = {...objeto, 'id': nuevoId};

                const elementosJson = JSON.stringify(nuevoObjeto, null, 4)

                await fs.promises.writeFile(this.path, elementosJson)

                return nuevoId

        } catch (error) {
            console.log(error)
            return error
        }


    }
}

const product = new ProductManager('./products.txt', 'title: drum','price: 550','thumbnail: https://cdn3.iconfinder.com/data/icons/vol-3/128/headphones-1024.png','id: 4' )

product.getAll().then(data=> console.log(data)).catch();

const prueba2 = async () => {
    
     const productos = await product.getAll()
    
     const respuesta =  await product.addProduct({ title: 'armonica',price: 250,thumbnail:'https://cdn3.iconfinder.com/data/icons/vol-3/128/headphones-1024.png',id: 2}) 
     console.log(`El nuevo producto es ${respuesta}`)
    }

     prueba2()
    //prueba2()


export default  { ProductManager}





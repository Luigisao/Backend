class ProductManager {
   constructor(){
       this.products = [];
   }
   getNextId = () =>{
       const count = this.products.length
       const nextId = (count > 0) ? this.products[count-1].id +1 : 1
     
       return nextId
     
 }

   getProducts = () =>{
      if(this.products.length > 0){
       console.log(this.products) 
      }
      else{
       console.log("No hay ningun producto")
      }
   }
   getProductsById = (id) =>{
       let getid = this.products.find((product) => product.id === id);
       getid ? console.log(getid) : console.log(`Not Found`)
   }

   addProduct = (title,description,price,thumbnail,stock, code,date) => {

   if ((title, description, price, thumbnail, stock,code)) {

   const getcode=this.products.find((el)=>el.code==code)

      if(getcode){
         console.log(`El code ya existe, agrega otro, tampoco es tan dificil... hay 3 productos.`)
      }else{

      if (this.products.length > 0) {
      let productId = this.products[this.products.length - 1].id + 1;
      let product = {
                    id: productId,
                    title,
                    description,
                    price,
                    thumbnail,
                    stock,
                    code,
                    date: date ?? new Date().toLocaleDateString(),
                    };

      this.products.push(product);

      } else {
    
      let product = {
                   id: 1,
                   title,
                   description,
                   price,
                   thumbnail,
                   stock,
                   code
                 };
                 this.products.push(product);
               }
             }
           } else {
             console.log(`Porfavor agrega todos los detalles del producto`);
           }
         };

}

const productos = new ProductManager();


productos.addProduct("Vino 1","Un sabor inigualable",3500,"img",4,68)
productos.addProduct("Vino 2","medio pelo",1500,"url",5,2 ,)
productos.addProduct("Vino 3","ubita carton",3500,"url",54,)


productos.getProducts()
productos.getProductsById(2)
productos.getProductsById(4)

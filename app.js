require('./Connection');

const Product = require('./models/Product');

async function main(){
    const product = new Product({
        name: 'laptop',
        description: 'Lenovo 330 6th generation',
        price: 1300.99
    
    })
     
   const productSaved = await product.save()
    console.log(productSaved);
}


main();
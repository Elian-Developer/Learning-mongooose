require('../Connection');

const Product = require('../models/Product');

const deleteProduct = async () => {
    const result = await Product.deleteMany({price: 1300.99 });
    console.log(result);
}

deleteProduct();
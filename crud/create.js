require('../Connection');

const Product = require('../models/Product.js');

const CreateProduct = async () => {
    
    const productOne = new Product({
        name: 'Iphone 12 PRO MAX',
        description: 'Iphone 12 PRO MAX 64GB',
        price: 1500.99
    })

    await productOne.save()

        const productTwo = new Product({
          name: 'Iphone 12 PRO MAX',
          description: 'Iphone 12 PRO MAX 64GB',
          price: 1500.99,
        });

        await productTwo.save();
}

CreateProduct();
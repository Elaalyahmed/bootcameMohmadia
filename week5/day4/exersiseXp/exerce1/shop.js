const products = require('./products');

// دالة للبحث عن منتج حسب اسمه
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    console.log("Product Found:");
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

// استدعاء الدالة مع منتجات مختلفة
findProductByName("Wireless Mouse");
findProductByName("Coffee Maker");
findProductByName("Desk Lamp");
findProductByName("Nonexistent Product");

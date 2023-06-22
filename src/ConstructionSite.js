import React, { useState } from "react";

function ConstructionSite() {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 100.0, quantity: 0 },
    { id: 2, title: "Product 2", price: 200.0, quantity: 0 },
    { id: 3, title: "Product 3", price: 250.0, quantity: 0 },
    { id: 4, title: "Product 4", price: 250.0, quantity: 0 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    const productToAdd = updatedProducts.find((product) => product.id === productId);
    setCart([...cart, productToAdd]);
    setProducts(updatedProducts);
  };
  
  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      </div>
    ));
  };

  const renderCartItems = () => {
    return cart.map((item) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>My Shop</h1>
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
      <div>
        <h2>Cart</h2>
        {renderCartItems()}
      </div>
    </div>
  );
}

export default ConstructionSite;

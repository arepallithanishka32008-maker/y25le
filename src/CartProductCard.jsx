import { useState } from "react";

function CartProductCard({ name, price, category }) {
  const [cart, setCart] = useState(0);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
      <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
      <p>In Cart: {cart}</p>
    </div>
  );
}

export default CartProductCard;
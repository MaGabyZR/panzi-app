import React from "react";

//Share state with NavBar.tsx through App2.tsx
interface Props {
  cartItems: string[];
  onClear: () => void; //handle the state change of the clear button.
}
const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;

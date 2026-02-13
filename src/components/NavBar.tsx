import React from "react";

//share state with Cart.tsx through App2.tsx
interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;

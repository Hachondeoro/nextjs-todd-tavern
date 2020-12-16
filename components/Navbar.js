import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <button
        className="btn btn-outline-success m-auto"
        onClick={() => props.show()}
      >
        Cart {props.cart.length}
      </button>
    </nav>
  );
};
export default Navbar;

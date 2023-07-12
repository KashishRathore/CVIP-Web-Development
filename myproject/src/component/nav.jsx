import React from "react";

const nav = () => {
    return(
    <nav class="navbar">
    <div class="logo ">
      <img src="#" alt="" />
    </div>
    <div>
      <ul class="heading">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a class="cart" href="cart.html"><i class="fa fa-shopping-cart"></i></a></li>
      </ul>
    </div>
  </nav>
  );
};

export default nav;
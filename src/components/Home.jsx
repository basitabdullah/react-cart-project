import React from "react";
import ProductCard from "./ProductCard";
const Home = () => {
  const productList = [
    {
      name: "MacBook AIR",
      price: "599",
      imgSrc: "https://m.media-amazon.com/images/I/81Fm0tRFdHL._SX679_.jpg",
      id: 1,
    },

    {
      name: "Apple 2023 Mac Mini",
      price: "899",
      imgSrc: "https://m.media-amazon.com/images/I/61jup8h--XL._AC_UY327_FMwebp_QL65_.jpg",
      id: 2,
    },

    {
      name: "iPhone 14pro",
      price: "1099",
      imgSrc: "https://m.media-amazon.com/images/I/610pghkO81L._SX679_.jpg",
      id: 3,
    },
  ];

  function addToCart(options){
console.log(options);
  }
  return (
    <div className="home">
     {
      productList.map((i)=>(
        <ProductCard key={i.id} name={i.name} price={i.price} imgSrc={i.imgSrc} id = {i.id} handler={addToCart}/>
      ))
     }
    </div>
  );
};

export default Home;

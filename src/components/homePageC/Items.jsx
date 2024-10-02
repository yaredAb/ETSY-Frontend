import React from "react";
import Card from "./Card";

const Items = () => {
  return (
    <div className="mt-5 place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      <Card
        imgName="img/neck-1.jpg"
        product_name="Walk into the shadow"
        price="USD 20"
        name="Yared Sebsbe"
      />
      <Card
        imgName="img/neck-2.jpg"
        product_name="Walk into the shadow"
        price="USD 20"
        name="Yared Sebsbe"
      />
      <Card
        imgName="img/neck-3.jpg"
        product_name="Walk into the shadow"
        price="USD 20"
        name="Yared Sebsbe"
      />
      <Card
        imgName="img/neck-4.jpg"
        product_name="Walk into the shadow"
        price="USD 20"
        name="Yared Sebsbe"
      />
      <Card
        imgName="img/neck-5.jpg"
        product_name="Walk into the shadow"
        price="USD 20"
        name="Yared Sebsbe"
      />
      <Card
        imgName="img/neck-6.jpg"
        product_name="Walk into the shadow"
        price="USD 20"
        name="Yared Sebsbe"
      />
    </div>
  );
};

export default Items;

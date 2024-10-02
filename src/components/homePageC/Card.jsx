import React from 'react'

const Card = (props) => {
  return (
    <div className="py-3">
      <img
        src={props.imgName}
        alt="cov1"
        className="object-cover w-40 sm:w-40 md:w-48 h-52"
      />
      <p className="font-bold text-sm">{props.product_name}</p>
      <p className="text-sm">***** (301)</p>
      <p className="font-semibold">{props.price}</p>
      <a href="detail" className="underline text-sm">
        {props.name}
      </a>
    </div>
  );
}

export default Card

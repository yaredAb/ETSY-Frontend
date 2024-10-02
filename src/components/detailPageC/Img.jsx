import React from 'react'

const Img = (props) => {
  return (
    <img
      src={props.path}
      alt="img"
      className="shadow-lg w-16 h-12 object-cover rounded-lg"
    />
  );
}

export default Img

import React from "react";
import ETSYIcon from "./ETSYIcon";
import HeartIcon from "./HeartIcon";
import NextPre from "./NextPre";

const MainImg = () => {
  return (
    <div class="w-full img-container relative">
      <img
        src="img/neck-3.jpg"
        className="w-full h-96 rounded-lg border shadow-lg lg:object-scale-down"
        alt="neck-img-3"
      />
      <ETSYIcon />
      <HeartIcon />
      <NextPre />
    </div>
  );
};

export default MainImg;

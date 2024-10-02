import React from 'react'
import IconsTexts from './IconsTexts';
import TextBtn from './TextBtn';
import TopTexts from './TopTexts';
import ItemText from './ItemText';

const SecondSection = () => {
  return (
    <div className="flex flex-col ml-2 gap-1 lg:w-1/4">
      <TopTexts />
      <TextBtn />
      <ItemText />
      <IconsTexts />
    </div>
  );
}

export default SecondSection

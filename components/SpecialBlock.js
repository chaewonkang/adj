import React, { useState } from 'react';

function SpecialBlock({ img, title, category }) {
  const [isInfoShow, setIsInfoShow] = useState(false);

  return (
    <div
      className='special_block container'
      onClick={() => setIsInfoShow(!isInfoShow)}
    >
      <img src={img}></img>
      {isInfoShow && (
        <div className='show' onMouseLeave={() => setIsInfoShow(!isInfoShow)}>
          <span>{title}</span>
          <span>{category}</span>
        </div>
      )}
    </div>
  );
}

export default SpecialBlock;

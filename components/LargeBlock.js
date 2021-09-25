import React, { useState } from 'react';

function LargeBlock({ img, title, category }) {
  const [isInfoShow, setIsInfoShow] = useState(false);

  return (
    <div
      className='large_block container'
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

export default LargeBlock;

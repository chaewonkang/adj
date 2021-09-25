import React, { useState } from 'react';

function MediumBlock({ img, title, category }) {
  const [isInfoShow, setIsInfoShow] = useState(false);

  return (
    <div
      className='medium_block container'
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

export default MediumBlock;

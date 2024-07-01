import React, { useRef } from 'react';

function Basic() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default Basic;

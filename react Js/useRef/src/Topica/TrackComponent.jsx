import React, { useEffect, useRef } from 'react';

function TrackComponent() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    console.log('Component mounted');

    return () => {
      isMounted.current = false;
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <h1>Track Component Mount/Unmount</h1>
    </div>
  );
}

export default TrackComponent;

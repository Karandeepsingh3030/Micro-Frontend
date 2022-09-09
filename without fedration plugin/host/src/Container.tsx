import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    mountHeader: any;
  }
}
function Container() {
const headerRef = useRef(null)
  useEffect(()=> {
 window.mountHeader(headerRef.current)
  },[])
  return (
    <div className="App">
    <h1>Container</h1>
    <h3 ref={headerRef}></h3>
    </div>
  );
}
export default Container;
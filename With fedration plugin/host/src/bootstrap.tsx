import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import {mount} from "header/HeaderComponent"

declare global {
  interface Window {
    mountHeader: any;
  }
}
function Container() {
const headerRef = useRef(null)
  useEffect(()=> {
//  window.mountHeader(headerRef.current)
mount(headerRef.current)
  },[])
  return (
    <div className="App">
    <h1>Container</h1>
    <h3 ref={headerRef}></h3>
    </div>
  );
}
export default Container;

const root = document.getElementById("root")
ReactDOM.render(<Container />,root);
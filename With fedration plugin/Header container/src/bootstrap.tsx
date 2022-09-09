import React from 'react';
import ReactDOM from "react-dom";
import Header from "./Header"
const root = document.getElementById("root")
// declare global {
//   interface Window {
//     mountHeader: any; 
//   }
// }
const mount = (root : any) => {
  ReactDOM.render(<Header />,root);
}

// window.mountHeader = mount;
mount(root)

export {mount}

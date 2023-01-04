import React from "react";
import CenterMenu from "./CenterMenu";

// Import JSX components
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

// Import CSS components
import "./styles/App.css";



export default function App() {
  return (
    <div className="App">
      <div className="screen"> 
        <LeftMenu />

        <CenterMenu />
        
        <RightMenu />
      </div>
    </div>
  )
};

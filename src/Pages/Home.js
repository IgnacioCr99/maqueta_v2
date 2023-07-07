import React from "react";
import Navbar from '../Components/Navbar/navbar'
import { Sidemenu } from '../Components/Sidemenu/sidemenu';

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Sidemenu/>
      <h1>Home</h1>
    </div>
  );
}

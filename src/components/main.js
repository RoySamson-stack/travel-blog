import React, { Component } from 'react';
import Card from "../components/card"

function Main  (){
    return (
      <div className="">
        <nav className="navbar">
          <img src="" className="navbar-img"/>
          <p className="navbar-txt">my travel journal.</p>
        </nav>
        <div className="main-container">
          <div className="">
            <Card />
          </div>
        </div>
      </div>
    );
  
}

export default Main;
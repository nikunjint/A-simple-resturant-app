import React from 'react'
import "./style.css"
import Menu from "./menuApi.js";
import { useState } from 'react';
import MenuCard from './MenuCard';


 const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const filterItem=(category)=>{
        const updatedList=Menu.filter((currEle)=>{
            return currEle.category===category;

        });
         setMenuData(updatedList);
    };
    
    return (
        <>
        <h1 style={{textAlign:"center"}}>A simple Resturant App</h1>
        <div className="container">
        <nav className="navbar " style={{marginLeft:500 ,padding:20}}>
            <div className="btn-group " style={{background:"orange"}}>
            <button className="btn__item" onClick={()=>filterItem("breakfast")}>breakfast</button>
            <button className="btn__item" onClick={()=>filterItem("lunch")}>lunch</button>
            <button className="btn__item" onClick={()=>filterItem("evening")}>evening</button>
            <button className="btn__item" onClick={()=>filterItem("dinner")}>dinner</button>
            <button className="btn__item" onClick={()=>setMenuData(Menu)}>all</button>


            </div>
        </nav>
        </div>
       <MenuCard menuData={menuData}/>
        </>
    );
}
 export default Resturant;
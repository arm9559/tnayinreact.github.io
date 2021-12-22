import React, { Component } from 'react';
import Nav from "./Nav"

//Images Navbar
import Logo_image from "../../Images/Navbar/logoImage.png";

import Logo_txt from "../../Images/Navbar/logoText.png";

import Menu from "../../Images/Navbar/burger_menu.png";

//Image Main
import Mainbigchair from "../../Images/Main/bigchair.png"

import Mainfirstchair from "../../Images/Main/chair1.png"
import Mainsecondchair from "../../Images/Main/chair2.png"
import Mainthirdchair from "../../Images/Main/chair3.png"

import Down from "../../Images/Main/down.png";

import Facebook from "../../Images/Main/facebook.png";
import Instagram from "../../Images/Main/instagram.png";
import Twitter from "../../Images/Main/twitter.png";

//Main
import Main from "../../Components/Main/Main"

import Footer from "../../Components/Footer/Footer"


//Code
export default class Objects extends Component {
    state = {
                nav:[
                    {liName:"About"},
                    {liName:"Blog"},
                    {liName:"Agency"},
                    {liName:"Featured"},
                    {liName:"Price"}
                ],

                main:[
                    {mainText:"100% Quality Guranty"},
                    {mainText:"Find Classy Furnitures"},
                    {mainText:"For Your Comfort"},
                    {mainText:"All the Lorem Ipsum generators on the Internet tend to predefined"},
                    {mainText:"chunks this the first true generator on the Internet. "},
                    {mainText:"Start From"},
                    {mainText:"102.99 USD"}
                ],
                buttons:[
                    {buttonName:"Buy Now"}
                ],
                aside:[
                    {asideText:"Comfort Launge Chairs"},
                    {asideText:"Comfort Launge Chairs"},
                    {asideText:"Comfort Launge Chairs"}
                ],
                footer:[
                    {footerText:"Luxury & Fancy Chair"},
                    {footerText:"All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet. "},
                ]
            };
    render() {
        
        return (
            <React.Fragment>          
            <nav class="container">
                <div class="logo">
                <ul>
                    <li>
                        <img src={Logo_image} alt="Logo Image" />
                    </li>
                    <li>
                        <img src={Logo_txt} alt="Logo Text" />
                    </li>
                </ul>
                </div>

                <div class="nav-ul">
                    <ul>
                    {
                     this.state.nav.map((navItem,index) => {
                         return <Nav {...navItem}/>
                    })
                    }
                    </ul>
                </div>

                <div class="burger-menu">
                    <img src={Menu} alt="Burger-Menu" />
                </div>
                
            </nav>
            
            <main class="container">
                <div class="main-child">
                    <div class="main-text">
                    {this.state.main.map((mainTexts=>{
                        return <Main {...mainTexts}/>
                     }))}
                     <div class="icons-bar">
                         <span class="icons">
                            <img src={Facebook} alt="Facebook"/>
                            <img src={Instagram} alt="Instagram"/>
                            <img src={Twitter} alt="Twitter"/>
                         </span>
                         <button>{this.state.buttons[0].buttonName}</button>
                    </div>

                    </div>
                    <div class="main-background">
                        <img src={Mainbigchair} alt="Big Chair" title="Chair"/>
                        <div class="color-group">
                            <p>Popular shades</p>
                            <span class="blue"></span>
                            <span class="pink"></span>
                            <span class="brown"></span>
                            <span class="yellow"></span>
                        </div>
                    </div>
                    <aside class="endAside">
                        <div class="chair-group">
                          <img src={Mainfirstchair} alt="Chair First" /> 
                          <p>{this.state.aside[0].asideText}</p>
                          <img src={Mainsecondchair} alt="Chair Second" /> 
                          <p>{this.state.aside[1].asideText}</p>
                          <img src={Mainthirdchair} alt="Chair Third" /> 
                          <p>{this.state.aside[2].asideText}</p>
                          <img src={Down} alt="Down" className="down"/>
                        </div>
                    </aside>
                </div>
            </main>
            <div>
        </div>
            </React.Fragment>
        )
        
    }
}

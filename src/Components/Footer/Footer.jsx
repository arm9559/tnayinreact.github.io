
//Footer Image
import FooterBigChair from "../../Images/Footer/footerBigChair.png"
import FooterGroup from "../../Images/Footer/footergroup.png"
import React from 'react'

export default function Footer(footerTexts) {
    return (
            <footer>
                <div class="container footer-background ">
                    <img src={FooterBigChair} alt="Footer Big Chair" />
                </div>
                <div class="container footer-big-text "> 
                    <p>
                         Luxury & Fancy Chair
                    </p>
                    <br/>

                    <p class="lorem-text">
                    All the Lorem Ipsum generators on the Internet tend to<br/> predefined chunks this the first true generator on the Internet.
                    </p>
                    <hr />
                </div>
                <div class="container end-of-footer ">
                    <span class="footer-span-first">
                        <p>20K+</p>
                        <p>People Visiting this year</p>
                    </span>
                    <span class="footer-span-second">
                        <p>15</p>
                        <p>Years Experience</p>
                    </span>

                    <div class="peoples">
                        <img src={FooterGroup} alt="Footer Group" />
                    </div>
                </div>
            </footer>
    )
}

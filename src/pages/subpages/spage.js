import React from "react"
import SStyle from "../../components/site.module.scss"
import Image from "../../components/langdonimage"
import { StaticImage } from "gatsby-plugin-image"

const SPage = () => (

    <div className={SStyle.schedulepage}>
<br/><br/>
      {/* <br /> */}
      <div className={SStyle.hide1200}>   <Image  /></div>
      <div className={SStyle.show1200}>   <StaticImage src="../../images/langdon-hall-cambridge-ontario-country-hotel-13.jpg" alt="Langdon Hall" /></div>
    <br/> <br/>
    <p className={SStyle.homePageTextStyled}>
    
  <b> Friday, September 17th, 2021</b>  <br/><br/>
At five o’clock in the afternoon <br/><br/>
Guests are kindly asked to arrive thirty minutes prior to the ceremony <br/><br/>
Cocktail hour and reception to follow <br/><br/>
Langdon Hall <br/><br/>
 1 Langdon Drive, Cambridge, Ont. <br/>

 

      </p><br/><br/><br/><br/>
      <p className={SStyle.homePageText}>
     <i> Directions to the venue can be found {" "}
      <a href="https://www.google.com/maps?q=langdon+hall&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiboIGWhPDnAhXRZc0KHf0FABMQ_AUoAnoECA4QBA">here</a>.</i>
    </p>
    
    </div>
 
)

export default SPage

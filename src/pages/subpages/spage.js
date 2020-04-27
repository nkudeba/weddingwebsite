import React from "react"
import SStyle from "../../components/site.module.scss"

const SPage = () => (

    <div className={SStyle.schedulepage}>

      {/* <br /> */}
      <h4
        style={{
          textDecoration: "none",
          fontFamily: "Times New Roman"
        }}
      >
        September 18, 2020
      </h4>
      <p>
      Ceremony and reception to take place at Langdon Hall on September 18, 2020 with a backup option of September 17, 2021. <br/>
Further ceremony and reception details and timing to follow. Please check back. <br/><br/>
<b>Langdon Hall</b>
<br/>
1 Langdon Drive,
<br/> Cambridge, Ontario.

      </p>
      <p>
      Directions to the venue can be found on{" "}
      <a href="https://www.google.com/maps?q=langdon+hall&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiboIGWhPDnAhXRZc0KHf0FABMQ_AUoAnoECA4QBA">Google Maps</a>.
    </p>
    
    </div>
 
)

export default SPage

import React from "react"
import SStyle from "../../components/site.module.scss"
import Image from "../../components/image"

const Home = () => (
  <div>
    <br />
    {/* <span className={SStyle.homePageTitle}>
      Holly & Nicolas
    </span> */}
    {/* <br />
    <br />
    <br /> */}
    <Image title="We're getting married"/>
    <br/>
    <p className={SStyle.homePageDates}>September 17, 2021 </p>
    <p>
    Welcome to our wedding website, we can’t wait to celebrate our special day with you! We have created this website as a convenient and interactive way to share all of the important details with you in the lead up to our wedding.
    <br/><br/>
    Our families and friends are so important to us, and we want to celebrate with all of you!
    <br/>
    We're monitoring the COVID-19 public health regulations and working hard with our vendors to make sure that our wedding day is safe. As Ontario enters the new step system, we feel cautiously optimistic that we will be able to have all of our friends and family there with us. As we've all experienced, things <i> can </i> change quickly, and we will reach out to all of you should our wedding plans or guest list need to be modified in any way. Your understanding and flexibility in this is greatly appreciated.
    </p>
  </div>
)

export default Home

import React from "react"
import SStyle from "../../components/site.module.scss"

const Home = () => (
  <div>
    <br />
    {/* <span className={SStyle.homePageTitle}>
      Holly & Nicolas
    </span> */}
    {/* <br />
    <br />
    <br /> */}
    <p className={SStyle.homePageDates}>Come celebrate our wedding with us!</p>
    <p className={SStyle.homePageDates}>September 18, 2020 </p>
    <p className={SStyle.homePageBackupDates}> (Backup date of September 17, 2021)</p>
    <p>
    Welcome to our wedding website, we can’t wait to celebrate our special day with you! We have created this website as a convenient and interactive way to share all of the important details with you in the lead up to our wedding.
    <br/><br/>
    Our families and friends are so important to us, and we want to celebrate with all of you!
    </p>
  </div>
)

export default Home

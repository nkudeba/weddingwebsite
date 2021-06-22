import React from 'react';
import { Link } from 'gatsby';


const generateListOfHotels = arrayOfHotels =>
  arrayOfHotels.map(hotel => (
    <li key={hotel.title}>
      <a href={hotel.link}>{hotel.title}</a>
    </li>
  ));

const TravelAccommodations = () => (
  <div>
 <br/><br/>


    <p>
    For your convenience we have reserved a block of rooms at the following hotels. If making your reservation by phone, please reference the 'Shoemaker & Kudeba Wedding' to receive the discounted rate. If reserving online, please follow the appropriate link below: <br/><br/>
       <a href="https://reservations.travelclick.com/12264?groupID=2993359"> <strong>Cambridge Hotel and Conference Centre </strong> </a> <br/>
      

 700 Hespeler Rd,<br/>
Cambridge, ON <br/>
519-622-1505 
<br/>      Book by August 18, 2021 for discounted rate
<br/><br/>

       
       <a href="https://www.marriott.com/search/hotelQuickView.mi?propertyId=YKFFP&brandCode=FP&marshaCode=YKFFP"> <strong>Four Point by Sheraton</strong></a> <br/>
       210 Preston Parkway, <br/>
Cambridge, ON <br/>
519-653-2690 <br/>
Book by August 1, 2021 for discounted rate
<br/><br/>
<a href="https://www.langdonhall.ca"> <strong>Langdon Hall Country House Hotel and Spa</strong></a> 
    <br/>
    1 Langdon Dr,<br/>
Cambridge, ON <br/>
519-740-2100 <br/>
Book by August 3, 2021 for block room
</p>
  </div>
);

export default TravelAccommodations;

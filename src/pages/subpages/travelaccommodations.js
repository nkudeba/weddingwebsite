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
 


    <p>
    For your convenience we have reserved a block of rooms at the following hotels. When making your reservation please reference the 'Shoemaker-Kudeba' wedding to receive the discounted rate. <br/><br/>
       <a href="http://www.cambridgehotel.ca/"> <strong>Cambridge Hotel and Conference Centre </strong> </a> <br/>
      

 700 Hespeler Rd,<br/>
Cambridge, ON <br/>
519-622-1505 
<br/>      Book by August 18, 2020 for discounted rate
<br/><br/>

       
       <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1580246373208&key=GRP&app=resvlink"> <strong>Four Point by Sheraton</strong></a> <br/>
       210 Preston Parkway, <br/>
Cambridge, ON <br/>
519-653-2690 <br/>
Book by August 2, 2020 for discounted rate
<br/><br/>
<a href="https://www.langdonhall.ca"> <strong>Langdon Hall Country House Hotel and Spa</strong></a> 
    <br/>
    1 Langdon Dr,<br/>
Cambridge, ON <br/>
519-740-2100 <br/>
Book by August 4, 2020 for block room
</p>
  </div>
);

export default TravelAccommodations;

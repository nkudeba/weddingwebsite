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
 

    <h4
      style={{
        textDecoration: 'underline',
      }}>
      Accommodations
    </h4>
    <p>

      We have made block reservations at the <a href="http://www.cambridgehotel.ca/"> Cambridge Hotel and Conference centre </a>, as well as the <a href="https://www.marriott.com/hotels/travel/ykffp-four-points-cambridge-kitchener-ontario/"> Four Point by Sheraton</a>. If you would like to stay the night after the wedding, please consider booking at one of these locations.
    </p>

  </div>
);

export default TravelAccommodations;

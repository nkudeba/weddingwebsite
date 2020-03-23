import React from 'react';



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
    <p></p>

  </div>
);

export default TravelAccommodations;

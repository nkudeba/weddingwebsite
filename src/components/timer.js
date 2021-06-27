import React, { useEffect, useState } from "react";
import "./timer.css";

var countDownDate = new Date("September 17, 2021 17:00:00").getTime();

function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var now = new Date().getTime();
    var difference = countDownDate - now;
    // const difference = +new Date(`${year}-09-17`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
<center>
      {timerComponents.length ? <span>{timerComponents} until we say "I DO!"</span> : <span>We do!</span>} </center>
    </div>
  );
}

export default Timer;
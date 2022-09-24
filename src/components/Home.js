import * as React from 'react';
import { useState, useEffect } from "react";
export default function Home() {
    const [hours, setHours] = useState([]);
  
    useEffect(() => {
      const fetchHoursData = async () => {
        const data = await fetch(
          "https://capstone-project-gilt-three.vercel.app/hoursOfOperation"
        );
  
        const json = await data.json();
  
        setHours(json);
      };
  
      fetchHoursData();
    }, []);
  
    useEffect(() => {
      console.log({ hours });
    }, [hours]);
  
    return (
      <div className="App">
        <ul>
          {hours.map((x, idx) => (
            <li key={idx}>
              <h4>
                {x.dining_room} {x.day} {x.hours}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    );
}
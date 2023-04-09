import React, { useEffect, useState } from "react";
import './Vans.css'

const Vans = () => {
  const [vansList, setVansList] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVansList(data.vans);
      });
  }, []);

  const mapVanList = vansList.map((van, id) => (
    <div className="van" key={id}>
      <img src={van.imageUrl} alt="van images" />
      <h3>{van.name}</h3>
      <h3>{van.price}</h3>
      <span>/day</span>
      <h4>{van.type}</h4>
    </div>
  ));

  return (
    <div className="vans-container">
      <h2>Explore our van options </h2>
      <div>
        <button>Simple</button>
        <button>Luxury</button>
        <button>Rugged</button>
        <span>Clear filters</span>
      </div>
      <div className="vanList">{mapVanList}</div>
    </div>
  );
};

export default Vans;

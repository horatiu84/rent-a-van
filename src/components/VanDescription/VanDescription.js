import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./VanDescription.css";

const VanDescription = () => {
  const parms = useParams();
  console.log(parms);

  const [vanDetalis, setVanDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${parms.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans));
  }, [parms]);

  return (
    <div>
      <h2>Van Description</h2>
      {vanDetalis ? <div>
        <h2>{vanDetalis.name}</h2>
        <img src={vanDetalis.imageUrl} alt="the van"/>
        <p>{vanDetalis.description}</p>
        <span>{vanDetalis.type}</span>
      </div> : <h2>Loading ...</h2>}
    </div>
  );
};

export default VanDescription;

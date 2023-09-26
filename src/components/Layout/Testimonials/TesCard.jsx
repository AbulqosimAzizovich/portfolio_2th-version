import React from "react";
import { tes } from "../../../data/Base";


const TesCard = () => {
  return (
    <div className="tescards">
    {tes.map((e) => {
        return (
          <div className="tescard">
            <img src={e.user} alt={e.hName} />
      
              <p className="tescard__p">{e.abo}</p>

              <h3>{e.hName}</h3>
              <span>{e.hJob}</span>
     
          </div>
        );
    })}
    </div>
  );
};

export default TesCard;

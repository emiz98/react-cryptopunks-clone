import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import "./main.css";

const Main = ({ punkListData }) => {
  const [activePunk, setActivePunk] = useState();

  useEffect(() => {
    if (punkListData.length > 0) {
      setActivePunk(punkListData[0]);
    }
  }, [punkListData]);

  const setPunk = (id) => {
    setActivePunk(punkListData[punkListData.length - 1 - id]);
  };

  return (
    <div>
      <div className="main">
        <div className="punkHighlight">
          <img
            className="selectedPunk"
            src={activePunk?.image_preview_url}
            alt=""
          />
        </div>
        <div className="punkDetails">
          <h1>
            {activePunk?.name} <span>•#{activePunk?.token_id}</span>
          </h1>
        </div>
      </div>
      <div className="punkList">
        {punkListData.map((punk) => (
          <div key={punk.token_id} onClick={() => setPunk(punk.token_id)}>
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_preview_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

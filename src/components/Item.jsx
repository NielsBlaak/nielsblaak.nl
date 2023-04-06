import React from "react";
import krat from "../asset/images/krat.jpeg";
import feed from "../feed/topfeed.xml";

const Item = () => {
  return (
    <>
      <div className="bg-blue rounded-md">
        <h1>Krat bier</h1>
        <p>Een kratje pils, wie is er niet groot mee geworden?</p>
        <span className="text-green-500">€10</span>
        <img src={krat} alt="Krat bier" className="w-24 h-24" />
        <a href={feed} download>
          Download feed
        </a>
      </div>
    </>
  );
};

export default Item;

import React, { useEffect, useState } from "react";
import { voorspellingen } from "../../src/data/voorspellingen-2324";
import {
  simplifyStandings,
  countCorrectPredictions,
  simplifyPlayerData,
} from "../../src/utils/functions";

const Eredivisie = () => {
  const [stand, setStand] = useState(undefined);
  const [topscorers, setTopscorers] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://v3.football.api-sports.io/standings?league=88&season=2023",
          {
            method: "GET",
            headers: {
              "x-apisports-key": "5c405472e5a7f42843553b0fe243477a",
            },
          }
        );
        const data = await response.json();
        setStand(simplifyStandings(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

    async function fetchTopscorers() {
      try {
        const response = await fetch(
          "https://v3.football.api-sports.io/players/topscorers?league=88&season=2023",
          {
            method: "GET",
            headers: {
              "x-apisports-key": "5c405472e5a7f42843553b0fe243477a",
            },
          }
        );
        const data = await response.json();
        setTopscorers(simplifyPlayerData(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTopscorers();
  }, []);

  if (!stand || !topscorers) {
    return <div>Loading...</div>;
  }

  const correctPredictions = countCorrectPredictions(
    voorspellingen,
    stand,
    topscorers.slice(0, 5)
  );
  const sortedPredictions = Object.entries(correctPredictions).sort(
    (a, b) => b[1].count - a[1].count
  );

  return (
    <div className="flex flex-col items-center gap-4 bg-white">
      <h1 className="text-center text-4xl py-4">
        Aantal juiste Eredivisie voorspellingen
      </h1>
      {sortedPredictions.map(([person, prediction]) => {
        return (
          <div key={person} className="text-center border-b-grey border-b">
            <p className="text-xl">
              <strong>{person}</strong>: {prediction.count}
            </p>
            <p>{prediction.predictions.join(", ")}</p>
          </div>
        );
      })}
      <div className="mt-24">
        <p className="text-center text-xl mb-16">Voorspellingen</p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {Object.entries(voorspellingen).map(([naam, voorspelling]) => (
            <div key={naam} className="py-4 px-8">
              <strong className="mb-4 border-b-grey border-b block">
                {naam}
              </strong>
              {Object.values(voorspelling.league).map((v, i) => (
                <p key={v}>
                  {i + 1}. {v}
                </p>
              ))}
              <p className="my-4 font-semibold">Topscoorders</p>
              {Object.values(voorspelling.topscorers).map((v, i) => (
                <p key={v}>
                  {i + 1}. {v}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="my-24 grid grid-cols-2 md:grid-cols-4">
        <div className="py-4 px-8">
          <p className="text-center border-b-grey border-b mb-4 mx-auto">
            Eredivisie stand
          </p>
          {typeof stand === "string" ? (
            <p className="text-center">
              Als je dit leest zijn de API calls voor vandaag op. Kom morgen
              terug&hellip;
            </p>
          ) : (
            Object.values(stand).map((v, i) => (
              <p key={v}>
                {i + 1}. {v}
              </p>
            ))
          )}
        </div>
        <div className="py-4 px-8">
          <p className="text-center border-b-grey border-b mb-4 mx-auto">
            Top 5 Topscoorders
          </p>
          {Object.values(topscorers.slice(0, 5)).map((v, i) => (
            <div className="flex justify-between" key={v.lastname}>
              <p>{i + 1}.&nbsp;
              {v.lastname}</p>
              <p>{v.goalsScored}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eredivisie;

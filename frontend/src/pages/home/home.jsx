import React from 'react';
import './home.css'
import {LeaderCard} from "../../components/leaderCard/leaderCard";
import Map from "../../components/map/map";

export const Home = () => {
  return (
    <div className='home'>
      <h1 className='title'>Узнай рейтинг своего города</h1>
      <div className="home_leaderMap">
        <div className="home_leader">
          <LeaderCard/>
        </div>
        <div className="home_map">
          <Map/>
        </div>
      </div>
    </div>
  );
};


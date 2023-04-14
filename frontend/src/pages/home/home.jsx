import React from 'react';
import './home.css'
import {LeaderCard} from "../../components/leaderCard/leaderCard";
import Map from "../../components/map/map";
import CategoryCard from "../../components/categoryCard/categoryCard";

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
      <div className="categories">
        <div className="category_item">
          <CategoryCard text={'Образование'}/>
          <CategoryCard text={'Здравоохранение'}/>
          <CategoryCard text={'Транспорт'}/>
        </div>
        <div className="category_item">
          <CategoryCard text={'Культура'}/>
          <CategoryCard text={'Охрана порядка'}/>
          <CategoryCard text={'Природа'}/>
        </div>
        <div className="category_item">
          <CategoryCard text={'Социальное обеспечение'}/>
          <CategoryCard text={'Физкультура и спорт'}/>
          <CategoryCard text={'МЧС'}/>
        </div>
        <CategoryCard text={'Благоустройство города'} classname={'large'}/>
      </div>

    </div>
  );
};


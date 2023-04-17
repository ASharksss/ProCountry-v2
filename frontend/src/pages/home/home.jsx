import React from 'react';
import './home.css'
import {LeaderCard} from "../../components/leaderCard/leaderCard";
import Map from "../../components/map/map";
import CategoryCard from "../../components/categoryCard/categoryCard";
import DaughterSubjects from "../../components/DaughterSubjects/daughterSubjects";

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
      <h1 className='cat_title'>Категории учреждений</h1>
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
      <h1 className='cat_title'>Дочерние субъекты</h1>
      <div className="daughterSubjects">
        <div className="category_item">
          <CategoryCard text={'Район 1'}/>
          <CategoryCard text={'Район 2'}/>
          <CategoryCard text={'Район 3'}/>
        </div>
        <div className="category_item">
          <CategoryCard text={'Район 4'}/>
          <CategoryCard text={'Район 5'}/>
          <CategoryCard text={'Район 6'}/>
        </div>
      </div>
      <h1 className='cat_title'>Партии</h1>
      <div className="daughterSubjects">
        <div className="category_item">
          <CategoryCard text={'Партия 1'}/>
          <CategoryCard text={'Партия 2'}/>
          <CategoryCard text={'Партия 3'}/>
        </div>
        <div className="category_item">
          <CategoryCard text={'Партия 4'}/>
          <CategoryCard text={'Партия 5'}/>
          <CategoryCard text={'Партия 6'}/>
        </div>
      </div>

    </div>
  );
};


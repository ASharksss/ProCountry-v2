import React from 'react';
import './home.css'
import {LeaderCard} from "../../components/leaderCard/leaderCard";
import Map from "../../components/map/map";
import CategoryCard from "../../components/categoryCards/categoryCard";
import {NavLink} from "react-router-dom";

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
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Образование'}/></NavLink>
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Здравоохранение'}/></NavLink>
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Транспорт'}/></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Культура'}/></NavLink>
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Охрана порядка'}/></NavLink>
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Природа'}/></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Социальное обеспечение'}/></NavLink>
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Физкультура и спорт'}/></NavLink>
          <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'МЧС'}/></NavLink>
        </div>
        <NavLink to='/institutePage' className='noLink category_card_link'><CategoryCard text={'Благоустройство города'} classname={'large'}/></NavLink>
        <NavLink to='/institute'><button>Смотреть все</button></NavLink>
      </div>

      <h1 className='cat_title'>Дочерние субъекты</h1>
      <div className="daughterSubjects">
        <div className="category_item">
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 1'}/></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 2'}/></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 3'}/></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 4'}/></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 5'}/></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 6'}/></NavLink>
        </div>
        <NavLink to='/subjects'><button>Смотреть все</button></NavLink>
      </div>

      <h1 className='cat_title'>Партии</h1>
      <div className="daughterSubjects">
        <div className="category_item">
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 1'}/></NavLink>
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 2'}/></NavLink>
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 3'}/></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 4'}/></NavLink>
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 5'}/></NavLink>
          <NavLink  className='noLink category_card_link'><CategoryCard text={'Партия 6'}/></NavLink>
        </div>
        <NavLink to='/parts'><button>Смотреть все</button></NavLink>
      </div>
    </div>
  );
};


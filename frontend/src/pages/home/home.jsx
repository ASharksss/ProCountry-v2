import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { fetchInstitutionCategory } from '../../logic/slices/institutionSlice';
import './home.css'
import { LeaderCard } from "../../components/leaderCard/leaderCard";
import Map from "../../components/map/map";
import CategoryCard from "../../components/categoryCards/categoryCard";
import { Loader } from '../../components/loader/loader';
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';

export const Home = () => {
  const dispatch = useDispatch()
  const { category } = useSelector(state => state.instCategory)
  const isLoadingData = category.status === 'loaded'
  const handleGetCategory = async () => {
    const response = await dispatch(fetchInstitutionCategory())
  }
  useEffect(() => {
    showPreloader()
    handleGetCategory()
    hidePreloader()
  }, [])
  
  const groups = category.items.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);
  return (
    <div className='home'>
      <h1 className='title'>Узнай рейтинг своего города</h1>
      <div className="home_leaderMap">
        <div className="home_leader">
          <LeaderCard />
        </div>
        <div className="home_map">
          <Map />
        </div>
      </div>
      <h1 className='cat_title'>Категории учреждений</h1>
      <div className="categories">
        {isLoadingData && groups.map((group, index) => (
          <div className="category_item" key={index}>
            {group.map((item) => (
              <NavLink key={item.id} to={'/institutes/institutePage/' + item.id} className='noLink category_card_link'>
                <CategoryCard text={item.name} percentage={item.rating} /></NavLink>
            ))}
          </div>
        ))}
        </div>

      <h1 className='cat_title'>Дочерние субъекты</h1>
      <div className="daughterSubjects">
        <div className="category_item">
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 1'} /></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 2'} /></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 3'} /></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 4'} /></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 5'} /></NavLink>
          <NavLink to='/' className='noLink category_card_link'><CategoryCard text={'Район 6'} /></NavLink>
        </div>
        <NavLink to='/subjects'><button>Смотреть все</button></NavLink>
      </div>

      <h1 className='cat_title'>Партии</h1>
      <div className="daughterSubjects">
        <div className="category_item">
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 1'} /></NavLink>
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 2'} /></NavLink>
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 3'} /></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 4'} /></NavLink>
          <NavLink to='/parts/partPage' className='noLink category_card_link'><CategoryCard text={'Партия 5'} /></NavLink>
          <NavLink className='noLink category_card_link'><CategoryCard text={'Партия 6'} /></NavLink>
        </div>
        <NavLink to='/parts'><button>Смотреть все</button></NavLink>
      </div>
    </div>
  );
};


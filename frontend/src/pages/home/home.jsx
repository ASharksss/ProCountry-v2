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
import { dataToGroups } from '../../logic/utils';
import { fetchPartyList } from '../../logic/slices/partsSlice';

export const Home = () => {
  const dispatch = useDispatch()
  const { category } = useSelector(state => state.instCategory)
  const { parts } = useSelector(state => state.party)

  const isLoadingCat = category.status === 'loaded'
  const isLoadingParts = parts.status === 'loaded'

  const handleGetAny = async () => {
    const responseCat = await dispatch(fetchInstitutionCategory())
    const responseParts = await dispatch(fetchPartyList())
    if (responseCat && responseParts) {
      hidePreloader()
    }
  }
  useEffect(() => {
    showPreloader()
    handleGetAny()
  }, [])

  const groups = dataToGroups(category.items)
  const partsGroups = dataToGroups(parts.items)

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
        {isLoadingCat && groups.map((group, index) => (
          <div className="category_item" key={index}>
            {group.map((item) => (
              <NavLink key={item.id} to={'/institutes/subcategory/' + item.id} className='noLink category_card_link'>
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
        {isLoadingCat && partsGroups.map((group, index) => (
          <div className="category_item" key={index}>
            {group.map((item) => (
              <NavLink to={'/parts/' + item.id} className='noLink category_card_link'><CategoryCard text={item.name} percentage={item.rating} /></NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


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
import { fetchDistrict, fetchGeoData } from '../../logic/slices/geopositionSlice';

export const Home = () => {
  const dispatch = useDispatch()
  const { category } = useSelector(state => state.instCategory)
  const { parts } = useSelector(state => state.party)
  const { areas } = useSelector(state => state.geoposition)
  const {isLoading} = useSelector(state => state.preloader)

  const isLoadingCat = category.status === 'loaded'
  const isLoadingParts = parts.status === 'loaded'
  const isLoadingAreas = areas.status === 'loaded'

  const handleGetAny = async () => {
    const responseCat = await dispatch(fetchInstitutionCategory())
    const responseParts = await dispatch(fetchPartyList())
    const responseDistrict = await dispatch(fetchDistrict())
    const responseGeoData = await dispatch(fetchGeoData())
    if (responseCat && responseParts && responseDistrict && responseGeoData) {
      hidePreloader()
    }
  }
  useEffect(() => {
    showPreloader()
    handleGetAny()
  }, [])

  const groups = dataToGroups(category.items)
  const partsGroups = dataToGroups(parts.items)
  const areasGroups = dataToGroups(areas.items)

  if (isLoading) {
    return <Loader />
  }

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
        {isLoadingAreas && areasGroups.map((group, index) => (
          <div className="category_item" key={index}>
            {group.map((item) => (
              <NavLink to='/' className='noLink category_card_link' key={item.id}><CategoryCard text={item.name} percentage={item.rating} /></NavLink>
            ))}
          </div>
        ))}
      </div>

      <h1 className='cat_title'>Партии</h1>
      <div className="daughterSubjects">
        {isLoadingParts && partsGroups.map((group, index) => (
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


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import user_avatar from './../../asserts/icons/sidebars/user_avatar.png'
import scroll_down from './../../asserts/icons/sidebars/scroll_down.svg'
import './rightSidebar.css'
import { Search } from "../../ui/search/search";
import { Select } from "../../ui/selects/select";
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';
import { fetchCity, fetchArea, fetchRegion, geoResetAreas, geoResetCities, geoResetRegions } from '../../logic/slices/geopositionSlice';


export const RightSidebar = () => {
  const [selected, setSelected] = useState('')
  const [type, setType] = useState('')

  const { user, isAuth } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { districts, regions, cities, areas, defaultValue } = useSelector(state => state.geoposition)

  const isLoadingDistricts = districts.status === 'loaded'
  const isLoadingRegions = regions.status === 'loaded'
  const isLoadingCities = cities.status === 'loaded'
  const isLoadingAreas = areas.status === 'loaded'
  const isLoadingDefaultValue = defaultValue.status === 'loaded'

  const setLocalGeo = async () => {
    const check = localStorage.getItem('geoposition')
    if (!check || type === 'districts') {
      localStorage.setItem('geoposition', JSON.stringify({ "districts": "", "regions": "", "cities": "", "areas": "" }))
    }
    let setItem = JSON.parse(localStorage.getItem('geoposition'))
    switch (type) {
      case 'districts':
        setItem.districts = selected
        localStorage.setItem('geoposition', JSON.stringify(setItem))
        break;
      case 'regions':
        setItem.regions = selected
        localStorage.setItem('geoposition', JSON.stringify(setItem))
        break;
      case 'cities':
        setItem.cities = selected
        localStorage.setItem('geoposition', JSON.stringify(setItem))
        break;
      case 'areas':
        setItem.areas = selected
        localStorage.setItem('geoposition', JSON.stringify(setItem))
        break;
      default:
        break;
    }
  }

  const getRegions = async () => {
    switch (type) {
      case 'districts':
        const responseRegion = await dispatch(fetchRegion(selected))
        if (responseRegion) {
          hidePreloader()
          geoResetAreas()
          geoResetCities()
        }
        break;
      case 'regions':
        const responseCities = await dispatch(fetchCity(selected))
        if (responseCities) {
          hidePreloader()
        }
        break;
      case 'cities':
        const responseAreas = await dispatch(fetchArea(selected))
        if (responseAreas) {
          hidePreloader()
        }
        break;
      case 'areas':
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    showPreloader()
    getRegions()
    setLocalGeo()
  }, [type])

  return (
    <div className='right-sidebar'>
      <Search />
      <div className="user_block">
        {isAuth && <>
          <img src={user_avatar} alt="" className="user_img" />
          <p>{user.items['name']} {user.items['surname']}</p>
          <img src={scroll_down} alt="" className='user_scroll-down' />
        </>}
      </div>
      <div className="sidebar_geo-nav">
        <div className="sidebar_select">
          <Select setSelected={setSelected} data={districts.items} loaded={isLoadingDistricts} type={'districts'} setType={setType}
            defVal={isLoadingDefaultValue && defaultValue.items[0].districts[0].name} defValId={isLoadingDefaultValue && defaultValue.items[0].districts[0].id} />
        </div>
        <div className="sidebar_select">
          <Select setSelected={setSelected} data={regions.items} loaded={isLoadingRegions} type={'regions'} setType={setType}
            defVal={isLoadingDefaultValue && defaultValue.items[0].regions[0].name} defValId={isLoadingDefaultValue && defaultValue.items[0].regions[0].id} />
        </div>
        <div className="sidebar_select">
          <Select setSelected={setSelected} data={cities.items} loaded={isLoadingCities} type={'cities'} setType={setType}
            defVal={isLoadingDefaultValue && defaultValue.items[0].cities.length > 0 && defaultValue.items[0].cities[0].name}
            defValId={isLoadingDefaultValue && defaultValue.items[0].cities.length > 0 && defaultValue.items[0].cities[0].id} />
        </div>
        <div className="sidebar_select">
          <Select setSelected={setSelected} data={areas.items} loaded={isLoadingAreas} type={'areas'} setType={setType} 
          defVal={isLoadingDefaultValue && defaultValue.items[0].areas.length > 0 && defaultValue.items[0].areas[0].name}
          defValId={isLoadingDefaultValue && defaultValue.items[0].areas.length > 0 && defaultValue.items[0].areas[0].id}/>
        </div>
      </div>
    </div>
  );
};


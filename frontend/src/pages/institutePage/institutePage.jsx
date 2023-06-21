import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './institutePage.css'
import MinisterCard from "../../components/leaderCard/ministerCard";
import InstituteCard from "../../components/categoryCards/instituteCard";
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';
import { fetchInstitutionSubcategory } from '../../logic/slices/institutionSlice';
import { dataToGroups } from '../../logic/utils';

const InstitutePage = ({ institute_title }) => {
  const dispatch = useDispatch()
  const { subcategory } = useSelector(state => state.instCategory)

  const isLoadingData = subcategory.status === 'loaded'
  const getSubcategory = async () => {
    const id = window.location.pathname.split('/')[3]
    const response = await dispatch(fetchInstitutionSubcategory(id))
    if (response) {
      hidePreloader()
    }
  }
  useEffect(() => {    
    showPreloader()
    getSubcategory()
  }, [])

  const groups = dataToGroups(subcategory.items)

  return (
    <div className='institute_page'>
      <h1 className='institute_title'>{subcategory.head.name}</h1>
      <MinisterCard name={subcategory.leader.name} position={subcategory.leader.position} rating={subcategory.leader.rating}
        party={subcategory.leader.party} party_id={subcategory.leader.party_id} />
      <h1 className='institute_subtitle'>Учреждения</h1>
      <div className="categories">
        {isLoadingData && groups.map((group, index) => (
          <div className="category_item" key={index}>
            {group.map((item) => (
              <NavLink key={item.id} to={'/institutes/' + item.id} className='noLink category_card_link'>
                <InstituteCard text={item.name} /></NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutePage;
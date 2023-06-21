import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './tablePage.css'
import Table from "../../components/table/table";
import { fetchInstitutionObjects } from '../../logic/slices/institutionSlice';
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';
import { fetchPartyList } from '../../logic/slices/partsSlice';

const TablePage = ({ title, subtitle, path, type }) => {
  const dispatch = useDispatch()
  const { objects } = useSelector(state => state.instCategory)
  const { parts } = useSelector(state => state.party)

  const isLoadingObjects = objects.status === 'loaded'
  const isLoadingParts = parts.status === 'loaded'
  const getObjects = async () => {
    const id = window.location.pathname.split('/')[2]
    const response = await dispatch(fetchInstitutionObjects(id))
    if (response) {
      hidePreloader()
    }
  }
  const getParts = async () => {
    const response = await dispatch(fetchPartyList())
    if (response) {
      hidePreloader()
    }
  }
  useEffect(() => {
    showPreloader()
    switch (type) {
      case 'institutes':
        getObjects()
        break;
      case 'parts':
        getParts()
        break;
      default:
        break;
    }
  }, [])

  return (
    <div className='table_page_wrapper'>
      <h1 className='table_title'>{title}</h1>
      <h2 className='table_subtitle'>{subtitle}</h2>
      {isLoadingObjects && type === 'institutes' && <Table data={objects.items} />}
      {isLoadingParts && type === 'parts' && <Table data={parts.items} />}
    </div>
  );
};

export default TablePage;
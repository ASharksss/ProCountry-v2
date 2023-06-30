import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import './institutionPage.css'
import InstitutionLeader from "../../components/institutionLeader/institutionLeader";
import InstitutionInfo from "../../components/institutionInfo/institutionInfo";
import ReviewsPhoto from "../../components/ReviewsPhoto/ReviewsPhoto";
import InstitutionReviews from "../../components/InstitutuionReviews/InstitutionReviews";
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';
import { fetchInstitutionObjectInfo } from '../../logic/slices/institutionSlice';
import { fetchUserSubscribe } from '../../logic/slices/userInfoSlice';

const InstitutionPage = () => {
  const dispatch = useDispatch()
  const { objectInfo } = useSelector(state => state.instCategory)

  const isLoading = objectInfo.status === 'loaded'

  const getObjectInfo = async () => {
    const id = window.location.pathname.split('/')[3]
    const response = await dispatch(fetchInstitutionObjectInfo(id))
    if (response) {
      hidePreloader()
    }
  }

  const getSubscribe = async () => {
    const id = window.location.pathname.split('/')[3]
    const response = await dispatch(fetchUserSubscribe(id))
    if (response) {
      hidePreloader()
    }
  }

  useEffect(() => {
    showPreloader()
    getObjectInfo()
  }, [])

  return (
    <div className='institutionPage'>
      <div className="institutionPage_header">
        <div className="row space-between">
          <h1 className='institutionPage-title'>{objectInfo.items.name}</h1>
          <button onClick={() => getSubscribe()} style={{border: 'none', backgroundColor: 'transparent', fontSize: '1.25 rem'}}>&#128276;</button>
          <button>Редактировать</button>
        </div>
        <div className="row space-between">
          <div className="bread_crumb">
            {isLoading && <>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/institutes/subcategory/' + objectInfo.items.category.id}>{objectInfo.items.category.name}</NavLink> / <NavLink
                style={{ textDecoration: 'none', color: 'black' }} to={'/institutes/' + objectInfo.items.subcategory.id}>{objectInfo.items.subcategory.name}</NavLink>
            </>}
          </div>
        </div>
      </div>


      {/* <div className="institutionPage_header">
        <div className="row space-between">
          <h1 className='institutionPage-title'>Название учреждения</h1>
        </div>
        <div className="row space-between">
          <button className='noBtn'><p className='solid btn-text'>Изменить наименование</p></button>
          <button className='noBtn'><p className='solid btn-text'>Изменить директора</p></button>
        </div>
      </div> v2*/}


      {/* <div className="institutionPage_header">
        <div className="row space-between">
          <h1 className='institutionPage-title'>Название учреждения</h1>
          <button>Подписаться</button>
        </div>
        <div className="row space-between">
          <div className="bread_crumb">
            тут хлебные крошки
          </div>
          <button className='noBtn'><p className='solid btn-text'>представитель учреждения?</p></button>
        </div>
      </div> v1*/}


      {isLoading && <>
        <InstitutionLeader leader={objectInfo.items.leader} leaderInfo={objectInfo.items.leaderInfo} />

        <InstitutionInfo full_name={objectInfo.items.full_name} address={objectInfo.items.address} telNumber={objectInfo.items.tel_number}
          email={objectInfo.items.email} leader={objectInfo.items.leader.name} />

        <ReviewsPhoto />
      </>}

      <InstitutionReviews />

      <NavLink to='/institutionReviews'>
        <button>Смотреть все</button>
      </NavLink>
    </div>
  );
};

export default InstitutionPage;
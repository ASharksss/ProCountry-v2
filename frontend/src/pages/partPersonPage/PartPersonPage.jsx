import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './partPersonPage.css'
import leader_avatar from "../../asserts/icons/home/leader_avatar.png";
import {Rating} from "../../ui/rating/rating";
import BackBtn from "../../ui/buttons/backBtn/backBtn";
import { fetchMemberInfo } from '../../logic/slices/partsSlice';
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';

const PartPersonPage = () => {
  const dispatch = useDispatch()
  const {memberInfo} = useSelector(state => state.party)

  const isLoadingData = memberInfo.status === 'loaded'

  const getMemberInfo = async() => {
    const id = window.location.pathname.split('/')[3]
    const response = await dispatch(fetchMemberInfo(id))
    if(response) {
      hidePreloader()
    }
  }

  useEffect(() => {
    showPreloader()
    getMemberInfo()
  }, [])

  return (
    <div className='partPersonPage'>
      <div className="back_btn">
        <BackBtn/>
      </div>
      <div className="bio_card">
        <div className="partPersonPage_header">
          <div className="partPerson_avatar">
            <img className="partPerson_avatar-img" src={leader_avatar}/>
          </div>
          <div className="partPerson-info">
            <div className="partPerson-info_name">
              <h1 className='partPerson_name'>{memberInfo.items.name}</h1>
              <div className="partPerson_rating">
                <Rating size={'min'} rating={memberInfo.items.rating} />
              </div>
            </div>
            <p className='partPerson_job'>{memberInfo.items.position}</p>
          </div>
        </div>
        <div className="partPerson_bio">
          <h1 className='bio_title'>Биография</h1>
          <p className='bio_p'>{memberInfo.items.biography}</p>
          <h1 className='bio_title'>Трудовая деятельность</h1>
          {isLoadingData && memberInfo.items.labor_activity.map((item, index) => (
            <p className='bio_p' key={index}>{item.start_date} - {item.end_date} {item.end_date === 'н.в.' ? '' : 'гг.'} - {item.position}</p>
          ))}
        </div>

      </div>
    </div>

  )
};

export default PartPersonPage;
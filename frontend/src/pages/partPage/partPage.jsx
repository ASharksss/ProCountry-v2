import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './partPage.css'
import { Rating } from "../../ui/rating/rating";
import PartPersonCard from "../../components/partPersonCard/partPersonCard";
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';
import { fetchPartyMembers } from '../../logic/slices/partsSlice';

const PartPage = ({ text }) => {
  const dispatch = useDispatch()
  const { partyMembers } = useSelector(state => state.party)

  const isLoadingData = partyMembers.status === 'loaded'

  const getPartyMembers = () => {
    const id = window.location.pathname.split('/')[2]
    const response = dispatch(fetchPartyMembers(id))
    if (response) {
      hidePreloader()
    }
  }

  useEffect(() => {
    showPreloader()
    getPartyMembers()
  }, [])

  return (
    <div className='partPage'>
      <div className="part_header">
        <h1 className='part_name'>{partyMembers.items.name}</h1>
        <div>
          <Rating size={'max'} rating={partyMembers.items.rating} />
        </div>

      </div>
      <div className="bread_crumb">
        тут хлебные крошки
      </div>
      <h1 className='partPage_title'>Члены политической партии</h1>
      {isLoadingData && partyMembers.items.members.map((item, index) => <PartPersonCard key={index} id={item.id} name={item.name}
        position={item.position} rating={item.rating} party_id={partyMembers.items.id} />)}
    </div>
  );
};

export default PartPage;
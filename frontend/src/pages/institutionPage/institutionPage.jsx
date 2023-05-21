import React from 'react';
import './institutionPage.css'
import InstitutionLeader from "../../components/institutionLeader/institutionLeader";

const InstitutionPage = () => {
  return (
    <div className='institutionPage'>
      <div className="institutionPage_header">
        <div className="row space-between">
          <h1 className='institutionPage-title'>Название учреждения</h1>
          <button>Редактировать</button>
        </div>
        <div className="row space-between">
          <div className="bread_crumb">
            тут хлебные крошки
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
      <InstitutionLeader/>
    </div>
  );
};

export default InstitutionPage;
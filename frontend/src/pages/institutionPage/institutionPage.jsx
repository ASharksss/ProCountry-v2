import React from 'react';
import InstitutionLeader from "../../components/institutionLeader/institutionLeader";

const InstitutionPage = () => {
  return (
    <div className='institutionPage'>
      <div className="institutionPage_header">
        <div className="institutionPage_header-top">
          <h1>Название учреждения</h1>
          <button>Редактировать</button>
        </div>
        <div className="institutionPage_header-bottom">
          <div className="bread_crumb">
            тут хлебные крошки
          </div>
        </div>
      </div>
      <InstitutionLeader/>
    </div>
  );
};

export default InstitutionPage;
import React from 'react';
import './tablePage.css'
import Table from "../../components/table/table";

const TablePage = ({title, subtitle, path}) => {
  return (
    <div className='table_page_wrapper'>
      <h1 className='table_title'>{title}</h1>
      <h2 className='table_subtitle'>{subtitle}</h2>
      <Table path={path}/>
    </div>
  );
};

export default TablePage;
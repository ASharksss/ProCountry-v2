import React from 'react';
import Input from "../../ui/input/input";

const FormBid = ({form_title}) => {
  return (
    <div className='formBid'>
      <div className="reg_form">
        <h1 className='form_title'>{form_title}</h1>
        <div className="row reg_row">
          <div className="reg_input">
            <Input size={'small'} input_label={'Имя'} input_placeholder={'Имя'}/>
          </div>
          <div className="reg_input">
            <Input size={'small'} input_label={'Фамилия'} input_placeholder={'Фамилия'}/>
          </div>
        </div>
        <div className="row reg_row">
          <div className="reg_input">
            <Input size={'small'} input_label={'Город'} input_placeholder={'Город'}/>
          </div>
          <div className="reg_input">
            <Input size={'small'} input_label={'Учреждение'} input_placeholder={'Учреждение'}/>
          </div>
        </div>
        <div className="row reg_row">
          <div className="reg_input">
            <Input size={'small'} input_label={'Почта'} input_placeholder={'Почта'}/>
          </div>
          <div className="reg_input">
            <Input size={'small'} input_label={'Телефон'} input_placeholder={'Телефон'}/>
          </div>
        </div>
        <button>Подать заявку</button>
      </div>
    </div>
  );
};

export default FormBid;
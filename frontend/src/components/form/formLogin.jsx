import React from 'react';
import './form.css'
import Input from "../../ui/input/input";

const FormComponent = ({form_title}) => {
  return (
    <div className='form'>
      <div>
        <h1 className='form_title'>{form_title}</h1>
        <div className="form_input">
          <Input input_label={'Логин'} size={'large'} input_placeholder={'Почта'}/>
        </div>
        <div className="form_input">
          <Input input_label={'Пароль'} size={'large'} input_placeholder={'Пароль'}/>
        </div>
        <div className='checkbox_block'>
          <input type="checkbox" className='checkbox'/>
          <label>Scales</label>
        </div>
        <div className="row form_links">
          <button className='noBtn form_link'>
            <p className='solid form_link'>Забыли пароль?</p>
          </button>
          <button className='noBtn form_link'>
            <p className='solid form_link'>Зарегистрироваться</p>
          </button>
        </div>
        <button>Войти</button>
      </div>
    </div>

  );
};

export default FormComponent;

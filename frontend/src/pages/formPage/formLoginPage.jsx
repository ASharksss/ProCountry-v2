import React from 'react';
import './form.css'
import Input from "../../ui/input/input";
import InputPassword from "../../ui/input/inputPassword";
import Checkbox from "../../ui/checkbox/checkbox";

const FormLoginPage = ({form_title}) => {
  return (
    <div className='form'>
      <div>
        <h1 className='form_title'>{form_title}</h1>
        <div className="form_input">
          <Input input_label={'Логин'} size={'large'} input_placeholder={'Почта'}/>
        </div>
        <div className="form_input">
          <InputPassword input_label={'Пароль'} state={'usually'} size={'large'} input_placeholder={'Пароль'}/>
        </div>
        <div className='checkbox_block'>
          <Checkbox checkbox_text={'Запомнить меня'}/>
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

export default FormLoginPage;

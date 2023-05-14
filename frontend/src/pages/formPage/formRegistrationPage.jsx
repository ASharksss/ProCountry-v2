import React from 'react';
import InputRequired from "../../ui/input/inputRequired";
import Input from "../../ui/input/input";
import InputPassword from "../../ui/input/inputPassword";

const FormRegistrationPage = ({form_title}) => {
  return (
    <div className='reg_form'>
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
          <Input size={'small'} input_label={'Логин'} input_placeholder={'Логин'}/>
        </div>
        <div className="reg_input">
          <InputPassword size={'small'} input_label={'Пароль'} input_placeholder={'Пароль'}/>
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
      <div className="row reg_links">
        <p>Уже есть аккаунт?</p>
        <button className='noBtn reg_btn' >
          <p className='solid reg_btn-text'>Войти</p>
        </button>
      </div>
      <button>Зарегистрироваться</button>
    </div>
  );
};

export default FormRegistrationPage;
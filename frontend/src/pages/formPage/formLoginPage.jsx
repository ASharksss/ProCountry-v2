import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './form.css'
import Input from "../../ui/input/input";
import InputPassword from "../../ui/input/inputPassword";
import Checkbox from "../../ui/checkbox/checkbox";
import { fetchLogin } from "../../logic/slices/authSlice"
import { Loader } from '../../components/loader/loader';

const FormLoginPage = ({ form_title }) => {
  const disaptch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.user)
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const isLoading = user.status === 'loaded'

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const data = {
      "username": username,
      "password": password
    }
    const response = await disaptch(fetchLogin(data))
    if (response) {
      setLoading(false)
      setPassword('')
      setUsername('')
    }
  }
  if (isLoading) {
    navigate('/')
  }

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1 className='form_title'>{form_title}</h1>
        <div className="form_input">
          <Input input_label={'Логин'} size={'large'} input_placeholder={'Логин'} value={username} setValue={setUsername} />
        </div>
        <div className="form_input">
          <InputPassword input_label={'Пароль'} state={'usually'} size={'large'} input_placeholder={'Пароль'} password={password} setPassword={setPassword} />
        </div>
        <div className='checkbox_block'>
          <Checkbox checkbox_text={'Запомнить меня'} />
        </div>
        <div className="row form_links">
          <button className='noBtn form_link'>
            <p className='solid form_link'>Забыли пароль?</p>
          </button>
          <button className='noBtn form_link'>
            <p className='solid form_link'>Зарегистрироваться</p>
          </button>
        </div>
        <button type='submit'>Войти</button>
      </form>
    </div>

  );
};

export default FormLoginPage;

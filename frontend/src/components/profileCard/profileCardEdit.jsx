import React, {useState} from 'react';
import user_avatar from "../../asserts/icons/user_avatar.png";
import InputRequired from "../../ui/input/inputRequired";
import SupportModal from "../Modal/supportModal";
import ModalMain from "../Modal/modalMain";
import ModalDeleteProfile from "../Modal/modalDeleteProfile";

const ProfileCardEdit = () => {

  const [activeModal, setActiveModal] = useState(true)

  return (
    <>
      <div className='profileCardEdit'>
        <img src={user_avatar} alt='' className='profileCard_avatar'/>
        <button className='noBtn'>
          <p className='profileCard_btn solid'>Изменить фото</p>
        </button>
        <div className="profileCardEdit_input">
          <div className="row">
            <div className="profileCardEdit_input-item mr-50px mb-25px">
              <InputRequired input_content={'Имя'} input_label={'Имя'} size={'middle'}/>
            </div>
            <div className="profileCardEdit_input-item mb-25px">
              <InputRequired input_content={'Фамилия'} input_label={'Фамилия'} size={'middle'}/>
            </div>
          </div>
          <div className="row">
            <div className="profileCardEdit_input-item mr-50px">
              <InputRequired input_content={'Телефон'} input_label={'Телефон'} size={'middle'}/>
            </div>
            <div className="profileCardEdit_input-item">
              <InputRequired input_content={'Почта'} input_label={'Почта'} size={'middle'}/>
            </div>
          </div>
        </div>
      </div>
      <div className="profileCardEdit_buttons row flex jstfy-center">
        <button className='profileCardEdit_button'>Сохранить</button>
        <button className='profileCardEdit_button' onClick={() => setActiveModal(true)}>Удалить профиль</button>
      </div>
      <ModalMain active={activeModal} setActive={setActiveModal} children={<ModalDeleteProfile/>}/>
    </>
  );
};

export default ProfileCardEdit;
import React, {useState} from 'react';
import './supportPage.css'
import SupportCard from "../../components/supportCard/supportCard";
import ModalMain from "../../components/Modal/modalMain";
import SupportModal from "../../components/Modal/supportModal";


const SupportPage = () => {


	const [activeModal, setActiveModal] = useState(false)

	return (
		<div>
			<div className="supportPage">
				<div className="supportPage_header">
					<div className="supportPage_header-top">
						<h1 className='supportPage_header-title'>Поддержка</h1>
						<button onClick={() => setActiveModal(true)}>Задать вопрос</button>
					</div>
					<div className="supportPage_header-bottom">
						<h2 className='supportPage_header-subtitle'>Ожидание ответа от технической поддержки</h2>
					</div>
					<SupportCard/>
					<SupportCard/>
					<SupportCard/>
					<SupportCard/>
				</div>
			</div>
			<ModalMain active={activeModal} setActive={setActiveModal} children={<SupportModal/>}/>
		</div>
	);
};

export default SupportPage;
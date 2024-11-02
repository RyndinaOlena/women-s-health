import React from 'react'
import { FaLink } from "react-icons/fa6";
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <a className='modal_content_text__link_pay' href='https://www.privat24.ua/send/d8wyl'><FaLink /> Нажми чтобы оплатить </a>
                {/* <div className='qr_code_img'></div> */}

                <div className='modal_content_text'>

                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                    <p className='modal-text'>"После завершения оплаты напишите мне или сбросьте скрин"</p>
                    <p className='modal-text'>"Оплата по реквизитам или напишите мне в личные сообщения для большей информации об оплате"</p>
                    <p className='modal-text'>"Для завершения вашего заказа нажмите на кнопку выше. Вы будете перенаправлены на защищенный платежный сервис для безопасной оплаты."</p>

                </div>

            </div>
        </div>
    )
}

export default Modal

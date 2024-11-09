import React from 'react'
import { FaLink } from "react-icons/fa6";
import qr from '../img/qr.jpeg'
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        // <div className="modal-overlay" onClick={onClose}>
        //     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        //         <div className='modal_content_text'>
        //             <a className='modal_content_text__link_pay' rel='nofollow' href='https://www.privat24.ua/send/d8wyl'><FaLink /> Нажми чтобы оплатить </a>
        //             <div className='qr_code_img'></div>
        //             <button className="close-button" onClick={onClose}>
        //                 &times;
        //             </button>
        //             <p className='modal-text'>"После завершения оплаты напишите мне или сбросьте скрин"</p>
        //             {/* <p className='modal-text'>"Оплата по реквизитам или напишите мне в личные сообщения для большей информации об оплате"</p>
        //             <p className='modal-text'>"Для завершения вашего заказа нажмите на кнопку выше. Вы будете перенаправлены на защищенный платежный сервис для безопасной оплаты."</p> */}
        //         </div>

        //     </div>
        // </div>
        <div class="modal" onClick={onClose}>
            <div class="modal-content" onClick={(e) => e.stopPropagation()}>
                <span class="close" onClick={onClose}>&times;</span>
                <img src={qr} alt="QR Code" class="modal-img" />
                <p class="modal-text">Отсканируйте QR-код, чтобы оплатить</p>
                <a className='modal_content_text__link_pay' rel='nofollow' href='https://www.privat24.ua/send/d8wyl'><FaLink /> Нажми чтобы оплатить </a>
            </div>
        </div>
    )
}

export default Modal

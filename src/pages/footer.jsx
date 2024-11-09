import React, { useState } from 'react'
import Modal from './modal'
import { FaHandPointDown } from "react-icons/fa";
const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className='footer name'>
            <div>
                <p className='footer__text'>Не упусти шанс увидеть новую себя</p>
            </div>
            <p className='footer__text'>Реквизиты для оплаты, жми <FaHandPointDown /></p>
            <div className="modal-trigger">
                <button className='hero_btn' onClick={toggleModal}>Цена <span className='hero_price'>1111грн </span>вместо <span className='crossed-text '>5800грн</span>
                </button>
                <Modal isOpen={isModalOpen} onClose={toggleModal} />
            </div>

        </div>
    )
}

export default Footer

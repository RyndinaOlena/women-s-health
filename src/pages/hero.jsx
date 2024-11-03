import React, { useState } from 'react'
import Modal from './modal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='hero'>
            <p className='hero_text'>Старт: 22.11</p>
            <div className='hero_block_title'>
                <h1 className='hero_text_title'><span className='checked_letter'>Н</span>аучись восстанавливать свое женское здоровье с помощью сил природы</h1>
                <div className="modal-trigger">
                    <button className='hero_btn' onClick={toggleModal}>Цена <span className='hero_price'>1111грн </span>вместо <span className='crossed-text '>5800грн</span></button>
                    <Modal isOpen={isModalOpen} onClose={toggleModal} />
                </div>
            </div>
        </div>
    )
}

export default Hero

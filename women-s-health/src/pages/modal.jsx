import React from 'react'

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='qr_code_img'></div>
                <div className='modal_content_text'>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                    <h2 >Modal Window</h2>
                    <p>This is a reusable modal component.</p>
                </div>

            </div>
        </div>
    )
}

export default Modal

import React from 'react'

const Useful = () => {
    return (
        <div className="blog-section">
            <h2 className="blog-section__title">Интенсив будет полезен <span>тем</span> у кого:</h2>
            <div className='useful'>

                <div className='useful-section'>
                    <ul className='useful-section__list'>
                        <li>Фибриома</li>
                        <li>Эндометриоз</li>
                        <li>ФКМ</li>
                        <li>СПКЯ</li>
                        <li>Киста</li>
                        <li>Полип</li>
                        <li>Болезненные ощущения во время менструации</li>
                        <li>Бесплодие</li>
                        <li>Хроническим Запоры</li>
                        <li>Кандиозный кольпит</li>
                    </ul>
                </div>
                <div className='useful-section__bg'>
                    <div className='useful-section__bg_img'></div>
                </div>
            </div>

        </div>
    )
}

export default Useful

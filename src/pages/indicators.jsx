import React from 'react';
import '../styles/indicators.module.scss';

const Indicators = () => {
    return (
        <section className="intensive-benefits">
            <h2 className="intensive-benefits__title">
                Как будет проходить <span>ИНТЕНСИВ</span>?
            </h2>
            <div className="intensive-benefits__circles">
                <div className="intensive-benefits__circle">
                    <p>Сразу после оплаты ты получишь доступ к телеграмм-боту в котором один раз в неделю будешь получать лекции.</p>
                </div>
                <div className="intensive-benefits__circle intensive-benefits__circle--highlighted">
                    <p>Всем учасникам будет доступен телеграм-чат с поддержкой.</p>
                </div>
                <div className="intensive-benefits__circle intensive-benefits__circle--highlighted-last">
                    <p>Доступ к интенсиву - бессрочный.</p>
                </div>
            </div>
            <div className="intensive-benefits__line"></div>
        </section>
    );
};

export default Indicators;

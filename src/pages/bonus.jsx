import React from 'react';


const BlogSection = () => {
    return (
        <section className="blog-section">
            <div className="blog-section__bonus">
                <p>🎁   Бонус ~ <span>Питание</span> для гормональной системы по фазам цикла!</p>
            </div>
            <h2 className="blog-section__title">
                Мы разберем факторы <span className='blog-section_checked'>влияющие</span> на женское здоровье
            </h2>
            <div className="blog-section__cards">
                <div className="card card--dark">
                    <p>Будем работать с гормонами, метаболизмом.</p>
                    <span className="card__number">01</span>
                </div>
                <div className="card card--light">
                    <p>Восстанавливаем работу органов фильтров, лимфы, ендокринной системы.</p>
                    <span className="card__number">02</span>
                </div>
                <div className="card card--dark">
                    <p>Разберем альтернативные схемы лечения миомы, СПКЯ и другие проблемы женского здоровья.</p>
                    <span className="card__number">03</span>
                </div>

            </div>

        </section>
    );
};

export default BlogSection;


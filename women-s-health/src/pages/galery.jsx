import React from 'react';

import image1 from '../img/IMG_0201.png';
import image3 from '../img/IMG_0204.png';
import image2 from '../img/IMG_0202.png';
import image4 from '../img/IMG_0205.png';


const ChessGallery = () => {
    const images = [image1, image3, image2, image4];
    return (
        <div className="chess-gallery">
            {images.map((src, index) => (
                <div className="image-container" key={index}>
                    <img className='' src={src} alt={`img ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default ChessGallery;


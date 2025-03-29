import React from 'react';
import Carousel from '../CarouselContent/CarouselContent';
import image1 from '../../Assets/Img/banner_content_header_1.webp';
import image2 from '../../Assets/Img/banner_content_header_2.webp';
import image3 from '../../Assets/Img/banner_content_header_3.webp';
import image4 from '../../Assets/Img/banner-content_header_4.webp';
import image5 from '../../Assets/Img/banner_content_header_5.webp';
import image6 from '../../Assets/Img/banner_content_header_6.webp';
import image7 from '../../Assets/Img/banner_content_header_7.webp';

import imageMobile1 from '../../Assets/Img/banner-mobile_1.webp';
import imageMobile2 from '../../Assets/Img/banner-mobile_2.webp';
import imageMobile3 from '../../Assets/Img/banner-mobile_3.webp';
import imageMobile4 from '../../Assets/Img/banner-mobile_4.webp';
import imageMobile5 from '../../Assets/Img/banner-mobile_5.webp';

function ContentImages() {
    const imagesDesktop = [image1, image2, image3, image4, image5, image6, image7];
    const imagesMobile = [
        imageMobile1,
        imageMobile2,
        imageMobile3,
        imageMobile4,
        imageMobile5,
    ];

    return (
        <div>
            <Carousel imagesDesktop={imagesDesktop} imagesMobile={imagesMobile} />
        </div>
    );
}

export default ContentImages;
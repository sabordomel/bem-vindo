import styled from "styled-components";

const carousel = styled.div`
.Carousel {
    display: flex;
    animation: opacitor 2s ease-in-out;
    img {
        width: 100vw;
        margin: 0 auto;
    }
    .swiper-slide.swiper-slide-active {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
        bottom: 0 !important;
    }
    .swiper-slide {
    display: flex;
    align-items: center;
    }
    span.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #FFF;
    }
    span.swiper-pagination-bullet {
    border: 1px solid #FFF;
    opacity: 1;
    background: transparent;
    }
    
    @keyframes opacitor {
        from {opacity: 0}
        to {opacity: 1}
    }
}
`

export default carousel;
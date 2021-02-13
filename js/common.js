$(document).ready(function() {
    $('.intro .slider').slick({
        dots: true,
        arrows: true,
        nextArrow: '<div class="arrow arrow_right"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
        prevArrow: '<div class="arrow arrow_left"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
    });

    $('.sale .slider').slick({
        slidesToShow: 4,
        dots: false,
        arrows: true,
        nextArrow: '<div class="arrow arrow_right"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
        prevArrow: '<div class="arrow arrow_left"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
    });


})
$(document).ready(function() {
    $('.intro .slider').slick({
        dots: true,
        arrows: true,
        nextArrow: '<div class="arrow arrow_right"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
        prevArrow: '<div class="arrow arrow_left"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
    });

    $('.catalog-prod .slider').slick({
        slidesToShow: 4,
        dots: false,
        arrows: true,
        nextArrow: '<div class="arrow arrow_right"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
        prevArrow: '<div class="arrow arrow_left"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
    });

    //catalog detail
    $('.info .slider').slick({
        slidesToShow: 1,
        arrows: true,
        asNavFor: '.thumbnail',
        focusOnSelect: true,
        nextArrow: '<div class="arrow arrow_right"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
        prevArrow: '<div class="arrow arrow_left"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5775 31.6281L3.675 34.7256L21 17.4006L3.675 0.0755867L0.577502 3.17309L14.805 17.4006L0.5775 31.6281Z"/></svg></div>',
    });

    $('.info .thumbnail').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: '.info .slider',
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        nextArrow: '<div class="arrow-gray arrow-gray_bottom"><svg width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5702 20.5569L38.559 2.572C39.148 1.98275 39.147 1.02873 38.5559 0.440462C37.9649 -0.14735 37.0075 -0.145831 36.418 0.4435L19.4999 17.3579L2.58191 0.442891C1.99234 -0.146365 1.03555 -0.147883 0.444462 0.439853C0.148155 0.734747 -4.9004e-08 1.12108 -6.5891e-08 1.50741C-8.27349e-08 1.89275 0.147167 2.27756 0.441418 2.57193L18.4297 20.5569C18.7129 20.8407 19.0983 21 19.4999 21C19.9015 21 20.2865 20.8403 20.5702 20.5569Z" fill="#939393"/></svg></div>',
        prevArrow: '<div class="arrow-gray arrow-gray_top"><svg width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5702 20.5569L38.559 2.572C39.148 1.98275 39.147 1.02873 38.5559 0.440462C37.9649 -0.14735 37.0075 -0.145831 36.418 0.4435L19.4999 17.3579L2.58191 0.442891C1.99234 -0.146365 1.03555 -0.147883 0.444462 0.439853C0.148155 0.734747 -4.9004e-08 1.12108 -6.5891e-08 1.50741C-8.27349e-08 1.89275 0.147167 2.27756 0.441418 2.57193L18.4297 20.5569C18.7129 20.8407 19.0983 21 19.4999 21C19.9015 21 20.2865 20.8403 20.5702 20.5569Z" fill="#939393"/></svg></div>',

        


    })

})
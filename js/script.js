var swiper = new Swiper(".snacks", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
      el: "coupons-snacks .swiper-pagination",
      clickable: true,
    },

    breakpoints: {

        390: {
            slidesPerView: 1.4,
            spaceBetween: 16,
        },

        490: {
            slidesPerView: 1.3,
            spaceBetween: 16,
        },

        512: {
            slidesPerView: 1.6,
            spaceBetween: 16,
        },

        536: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        },


        580: {
            slidesPerView: 1.9,
            spaceBetween: 10,
        },

        600: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },

        638: {
            slidesPerView: 1.6,
            spaceBetween: 10,
        },



        690: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        },

        750: {
            slidesPerView: 1.9,
            spaceBetween: 10,
        },

        840: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },

        930: {
            slidesPerView: 2.3,
            spaceBetween: 10,
        },

        975: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        },

        1000: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },

        1070: {
            slidesPerView: 2.7,
            spaceBetween: 10,
        },

        1140: {
            slidesPerView: 2.9,
            spaceBetween: 10,
        },

        1200: {
            slidesPerView: 3.1,
            spaceBetween: 20,
        }
    }
});
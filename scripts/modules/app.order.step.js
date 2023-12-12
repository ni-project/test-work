
export default class AppOrderStep {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    container = document.getElementById('order-step');

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        this.orderStepSlider(this.container);
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    orderStepSlider = (container) => {
        new Swiper(container, {
            slidesPerView: 5,
            grabCursor: false,
            spaceBetween: 30,
            longSwipesMs: 500,
            breakpoints: {
                '0': {
                    slidesPerView: 'auto',
                    grabCursor: true,
                    centeredSlides: true,
                    spaceBetween: 10,
                },
                '350': {
                    slidesPerView: 'auto',
                    grabCursor: true,
                    centeredSlides: true,
                    spaceBetween: 30,
                },
                '480': {
                    slidesPerView: 'auto',
                    centeredSlides: false,
                },
                '1000': {
                    slidesPerView: 5,
                    grabCursor: false,
                },
            }
        });
    };
}

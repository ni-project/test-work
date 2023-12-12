
export default class AppBanner {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    container = document.querySelector('.js-banner');
    banner = this.container.querySelector('picture') || this.container.querySelector('img');

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        this.parallaxOffsetBanner();

        window.addEventListener('scroll', this.windowScroll);
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    parallaxOffsetBanner = () => {
        const parallaxOffsetBanner = window.pageYOffset / 2;

        this.banner.style.transform = 'translateY('+ parallaxOffsetBanner +'px)';
    };

    windowScroll = () => {
        this.parallaxOffsetBanner();
    };
}

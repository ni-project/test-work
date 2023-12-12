
class AppMobileMenu {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    button = document.querySelector('.js-button-mobile-menu');
    menu = document.querySelector('.js-mobile-menu');
    buttonClose = document.querySelector('.js-button-mobile-menu-close');

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        this.button.addEventListener('click', this.handleButtonMenu);
        this.buttonClose.addEventListener('click', this.handleButtonMenuClose);

        window.addEventListener('resize', this.windowResize);
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    handleButtonMenu = (event) => {
        const isVisible = event.currentTarget.classList.contains('active');

        if ( isVisible ) {
            this.mobileMenu('close');
        } else {
            this.mobileMenu('show');
        }
    };

    mobileMenu = (visible) => {
        switch (visible) {
            case 'show':
                this.menu.classList.add('active');
                this.button.classList.add('active');
                this.buttonClose.classList.add('active');
                document.body.style.overflowY = 'hidden';
                break;

            case 'close':
                this.menu.classList.remove('active');
                this.button.classList.remove('active');
                this.buttonClose.classList.remove('active');
                document.body.style.overflowY = 'auto';
                break;

            default: break;
        }
    };

    handleButtonMenuClose = () => {
        this.mobileMenu('close');
    };

    windowResize = () => {
        const windowWidth = window.innerWidth;
        const isActiveMenu = this.menu.classList.contains('active');

        if ( windowWidth > 750 && isActiveMenu ) {
            this.mobileMenu('close');
        }
    };
}

new AppMobileMenu();

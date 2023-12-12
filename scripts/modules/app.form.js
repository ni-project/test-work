
class AppForm {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    $container = '.js-form';
    container = document.querySelectorAll(this.$container);

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        for (let $index = 0; $index < this.container.length; $index++) {
            const buttonFile = this.container[$index].querySelectorAll('.js-button-file');
            const inputRange = this.container[$index].querySelectorAll('.js-handle-input-range');

            for (let $indexButtonFile = 0; $indexButtonFile < buttonFile.length; $indexButtonFile++) {
                buttonFile[$indexButtonFile].addEventListener('click', () => this.handleButtonFileClick(buttonFile[$indexButtonFile]));
            }

            for (let $indexInputRange = 0; $indexInputRange < inputRange.length; $indexInputRange++) {
                inputRange[$indexInputRange].addEventListener('input', () => this.handleInputRangeChange(inputRange[$indexInputRange]));

                this.inputRangeChange(inputRange[$indexInputRange]);
            }
        }

        $('select').selectric({
            nativeOnMobile: false,
        });
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    handleButtonFileClick = (button) => {
        button.querySelector('input').click();
    };

    handleInputRangeChange = (input) => {
        this.inputRangeChange(input);
    };

    inputRangeChange = (input) => {
        const container = input.closest(this.$container);
        const value = input.value;
        const elValue = input.getAttribute('data-value');
        const elValueContainer = container.querySelector('.' + elValue);

        elValueContainer.innerText = value + ' %';
    };
}

new AppForm();

(function header() {

    var button = document.querySelector('.header__btn');
    var navigation = document.querySelector('.header__nav');

    button.addEventListener('click', function () {
        this.classList.toggle('header__btn_active');
        navigation.classList.toggle('header__nav_active');
    });

})();
(function () {
    const header = document.querySelector ('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
        header.classList.remove('header_active');
        }
    };
    }());
    
    (function () {
        const burgerItem = document.querySelector ('.burger');
        const menu = document.querySelector ('.header-nav');
        const menuCloseItem = document.querySelector ('.header_nav_closed')
        burgerItem.addEventListener ('click', () => {
            menu.classList.add ('header-nav_active');
    
        } );
    
        menuCloseItem.addEventListener ('click', () => {
            menu.classList.remove ('header-nav_active');
        })
        }());
    
    
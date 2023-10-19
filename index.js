const nav = document.querySelector('nav');
        const menu = document.querySelector('.menu');
        const closeIcon = document.querySelector('.close');
        const body = document.querySelector('.body');

        menu.addEventListener('click', function(){
            nav.classList.add('nav-visible');
            menu.classList.add('menu-hide');
            closeIcon.classList.add('close-show');
            body.classList.add('body-noscroll');
        });

        closeIcon.addEventListener('click', function(){
            nav.classList.remove('nav-visible');
            menu.classList.remove('menu-hide');
            closeIcon.classList.remove('close-show');
            body.classList.remove('body-noscroll');
        });
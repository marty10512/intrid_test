;document.addEventListener('DOMContentLoaded', () => {
   const
       links = document.querySelectorAll('.header__navlink'),
       headerFunctional = (nav) => {
          nav.forEach(item => {
            item.addEventListener('click', () => {
                const isActive = item.classList.contains('active')
                nav.forEach(item => item.classList.remove('active'));
                isActive ?
                    item.classList.remove('active') :
                    item.classList.add('active');
            })
          })
       };

   headerFunctional(links);
   clickOutside(document.querySelector('.header__navigation'), () => {
      links.forEach(link => link.classList.remove('active'));
   });

   const
       burgerBtn = document.querySelector('.header__burger'),
       responsiveMenu = document.querySelector('.header__row-content'),
       closeMenuBtn = document.querySelector('.header__row-content-close'),
       toggleResponsiveMenu = (btn) => btn.addEventListener('click',() => responsiveMenu.classList.toggle('active'));

   toggleResponsiveMenu(burgerBtn);
   toggleResponsiveMenu(closeMenuBtn);

   //header mobile hide functional
    let isScrolled = false;
    const
        staticHeight = 128,
        breakpoint = 56,
        header = document.querySelector('.header'),
        checkScrolled = () => {
            const scrolled = window.scrollY;
            if (scrolled < breakpoint){
                if(isScrolled){
                    isScrolled = false;
                    header.classList.remove('scrolled');
                }
                const newHeight = staticHeight - scrolled;
                header.style.height = newHeight+'px';
                header.style.marginBottom = staticHeight-newHeight+'px';
            } else if (!isScrolled){
                isScrolled = true;
                header.style.height = '72px';
                header.classList.add('scrolled');
            }
        };

    if (document.documentElement.clientWidth<=1000){
        window.addEventListener('scroll', checkScrolled);
    }

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth<=1000){
            window.addEventListener('scroll', checkScrolled);
        } else {
            window.removeEventListener('scroll', checkScrolled);
            header.removeAttribute('style');
        }
    })

});
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
});
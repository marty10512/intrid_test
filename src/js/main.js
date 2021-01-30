function clickOutside(element, func) {
    document.addEventListener('click', (event) => {
        if (!element.contains(event.target)){
            func();
        }
    })
};


;document.addEventListener('DOMContentLoaded', () => {

    const
        checkboxes = document.querySelectorAll('.checkbox'),
        checkboxesFunc = (items) => {
            items.forEach(checkbox => {
                const icon = checkbox.querySelector('.checkbox__item');
                checkbox.querySelector('input').addEventListener('change', () => {
                    if(icon.classList.contains('icon-unchecked')){
                        icon.classList.add('icon-checked');
                        icon.classList.remove('icon-unchecked');
                    } else {
                        icon.classList.add('icon-unchecked');
                        icon.classList.remove('icon-checked');
                    }
                })

            })
        };
    checkboxesFunc(checkboxes);
});
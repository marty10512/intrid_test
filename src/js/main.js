function clickOutside(element, func) {
    document.addEventListener('click', (event) => {
        if (!element.contains(event.target)){
            func();
        }
    })
}
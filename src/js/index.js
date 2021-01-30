;document.addEventListener('DOMContentLoaded', () => {
    // slider
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.index__notofications-arrow--next',
            prevEl: '.index__notofications-arrow--prev',
        },
        pagination: {
            el: '.index__notofications-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 50,
        breakpoints: {
            465: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
            920: {
                slidesPerView: 4,

            }
        }
    });

    //dropdown
    const
        dropdown = document.querySelector('.create__item-dropdown'),
        dropdownFunc = (dd) => {
            const
                btn = dd.querySelector('.create__item-dropdown-btn'),
                list = dd.querySelector('.create__item-dropdown-content'),
                toggleFunc = (elem) => {
                    elem.addEventListener('click', () => {
                        dd.classList.toggle('active');
                    });
                };
            toggleFunc(btn);
            toggleFunc(list);
        }
        dropdownFunc(dropdown);

    //transliteration

    const  alphabet = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

    const
        transliterate = (word) =>  word.split('').map( char =>  alphabet[char] || char).join(""),
        originalTextarea = document.querySelector('.create__item-elem--third').querySelector('.textarea'),
        transliteratedTextarea = document.querySelector('.create__item-elem--fourth').querySelector('.textarea'),
        transliterateCheckbox = document.getElementById('transliteration-checkbox'),
        transliterateFunc = (original, transliterated) => {
            transliterated.value = original.value.split(' ').map(w => transliterate(w)).join(' ');
        };

    transliterateCheckbox.addEventListener('change', ()=> {
        if (transliterateCheckbox.checked){
            transliteratedTextarea.disabled = false;
            transliterateFunc(originalTextarea, transliteratedTextarea);
            originalTextarea.addEventListener('input', () => transliterateFunc(originalTextarea, transliteratedTextarea));
        } else {
            transliteratedTextarea.value = '';
            transliteratedTextarea.disabled = true;
            originalTextarea.removeEventListener('input', () => transliterateFunc(originalTextarea, transliteratedTextarea));
        }
    })

    // textarea symbols

    const textareasForSymbols = document.querySelectorAll('.create__item-textarea');

    textareasForSymbols.forEach(area => {
        const counter = area.closest('.create__item-elem').querySelector('.create__item-info-symbols').querySelector('span');
        area.addEventListener('input', () => counter.innerText = area.value.length);
    })

    flatpickr("#from-date", {
        enableTime: true,
        dateFormat: "d-m-y H:i",
    });
    flatpickr("#to-date", {
        enableTime: true,
        dateFormat: "d-m-y H:i",
    });

    // avlive checkbox

    const
        aliveCheckbox = document.querySelector('.create__item-checkbox--alive').querySelector('input'),
        aliveInputs = document.querySelectorAll('.create__item-alive-input');

    aliveCheckbox.addEventListener('change', () => {
        if (aliveCheckbox.checked){
            aliveInputs.forEach(input => input.disabled = false);
        } else {
            aliveInputs.forEach(input => input.disabled = true);
        }
    })
});
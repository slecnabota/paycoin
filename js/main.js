function toggleAccordion(element) {
    const content = element.nextElementSibling;
    if (content.style.maxHeight !== "0px" && content.style.maxHeight) {
        content.style.maxHeight = "0";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
    } else {
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.maxHeight = "0";
                item.style.paddingTop = "0";
                item.style.paddingBottom = "0";
            }
        });

        content.style.paddingTop = "15px";
        content.style.maxHeight = content.scrollHeight + 30 + "px"; 
    }
}




const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1, 
    spaceBetween: 0, 
    loop: true, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

window.onload = function() {
    let maxInfoHeight = 0;
    const infoBlocks = document.querySelectorAll('.steps__card-info');

    infoBlocks.forEach(function(block) {
        if (block.clientHeight > maxInfoHeight) {
            maxInfoHeight = block.clientHeight;
        }
    });

    infoBlocks.forEach(function(block) {
        block.style.height = maxInfoHeight + 'px';
    });
};

// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.querySelector('.header');
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 50) { // Adjust 50 to the scroll threshold you prefer
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     });
// });


document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.body.classList.toggle('lock'); 
});

document.querySelectorAll('.header__menu .menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // Переключаем классы для закрытия меню и удаления блокировки прокрутки
        document.querySelector('.burger-menu').classList.remove('active');
        document.querySelector('.header__menu').classList.remove('active');
        document.body.classList.remove('lock');

        // Плавный скролл к элементу, если он существует
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault(); // Отменяем стандартное поведение перехода по ссылке
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Отменяем стандартное действие перехода по ссылке
        e.preventDefault();

        // Получаем ID элемента, к которому нужно перейти
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);

        if (targetElement) {
            // Плавно прокручиваем страницу к элементу
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

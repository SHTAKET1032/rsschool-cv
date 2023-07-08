const burgerIcon = document.querySelector('.burger__menu-icon'),
    shadow = document.querySelector('.shadow'),
    burgerMenuOpen = document.querySelector('.burger__menu-open'),
    body = document.querySelector('html');

// console.log(document.body);

burgerIcon.addEventListener('click', () => {
    burgerMenuOpen.classList.toggle('burger__menu-open-active');
    shadow.classList.toggle('shadow-active');
    burgerIcon.classList.toggle('burger__menu-icon-active');
    body.classList.toggle('body-no-scroll');
})

// if (burgerMenuOpen.classList.contains('burger__menu-open-active')){
//     body.classList.add('body-no-scroll')
// }


burgerMenuOpen.addEventListener('click', () => {
    burgerMenuOpen.classList.toggle('burger__menu-open-active');
    shadow.classList.toggle('shadow-active');
    burgerIcon.classList.toggle('burger__menu-icon-active');
})


shadow.addEventListener('click', () => {
    shadow.classList.toggle('shadow-active');
    burgerMenuOpen.classList.toggle('burger__menu-open-active');
    burgerIcon.classList.toggle('burger__menu-icon-active');
})


const about = document.querySelector('.about'),
    contacts = document.querySelector('.contacts'),
    skills = document.querySelector('.skills'),
    projects = document.querySelector('.projects'),
    languages = document.querySelector('.languages'),
    code = document.querySelector('.my_code'),
    arrNode = [about, contacts, skills, projects, languages, code];


function makeBlock(node) {
    node.style.display = 'block';
}

arrNode.forEach((item, index) => {
    setTimeout(() => {
        makeBlock(item);
    }, index * 1000)
});


const navbarItems = [...document.querySelectorAll('.navbar__list-item')];


navbarItems.forEach((item, index) => {
    setTimeout(() => {
        makeBlock(item);
    }, index * 1000)
})

const burgerIcon = document.querySelector('.burger__menu-icon'),
    shadow = document.querySelector('.shadow'),
    burgerMenuOpen = document.querySelector('.burger__menu-open'),
    iconLines = document.querySelectorAll('.icon-line'),
    menuItem = document.querySelectorAll('.burger__list-item');

burgerIcon.addEventListener('click',() => {
    burgerMenuOpen.classList.toggle('burger__menu-open-active');
    shadow.classList.toggle('shadow-active');
    burgerIcon.classList.toggle('burger__menu-icon-active');
})




burgerMenuOpen.addEventListener('click', ()=>{
    burgerMenuOpen.classList.toggle('burger__menu-open-active');
    shadow.classList.toggle('shadow-active');
    burgerIcon.classList.toggle('burger__menu-icon-active');
})


shadow.addEventListener('click', ()=>{
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


function makeBlock(node){
    node.style.display = 'block';
}

arrNode.forEach((item, index)=>{
    setTimeout(()=>{
        makeBlock(item);
    }, index * 1000)
});


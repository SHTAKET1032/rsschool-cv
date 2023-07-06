const burgerIcon = document.querySelector('.burger__menu-icon'),
    shadow = document.querySelector('.shadow'),
    burgerMenuOpen = document.querySelector('.burger__menu-open'),
    iconLines = document.querySelectorAll('.icon-line'),
    menuItem = document.querySelectorAll('.burger__list-item');

burgerIcon.addEventListener('click',() => {
    burgerMenuOpen.classList.toggle('burger__menu-open-active');
    shadow.classList.toggle('shadow-active');
    burgerIcon.classList.toggle('burger__menu-icon-active');
    // iconLines.forEach(item=>{
    //     item.classList.toggle('icon-line-active');
    // })
    // iconLines[0].style.transform = '(-45deg)';
    // iconLines[1].style.display = 'none';
    // iconLines[2].style.transform = 'rotate(45deg)';
})



// menuItem.forEach(item=>{
//     item.addEventListener('click', ()=>{
//         burgerMenuOpen.classList.toggle('burger__menu-open-active');
//         shadow.classList.toggle('shadow-active');
//     })
// })



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
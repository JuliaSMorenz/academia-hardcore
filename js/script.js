//alert('Olá mundo!');
//console.log('Teste');

//Selecionar o elemento HTML que vai ser manipulado
//DOM
var header = document.querySelector('.header');
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

//ao clicar no btnMenu
btnMenu.addEventListener('click', function(){
    //alert('ok');

    //add ou remove a classe
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

})

//ao clicar no menu, esconde o mesmo e retona o botão para o formato inicial
menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
})


//ao rolar a página
window.addEventListener('scroll', function(){
    //console.log('rolou');
    //console.log(window.scrollY);
    var pxRolados = window.scrollY;

    //se a condição for verdadeira
    if(pxRolados > 100){
        header.classList.add('header-scroll');
    }

    //senão
    else{
        header.classList.remove('header-scroll');
    }

})

var btnMenu = document.querySelector('#btnMenu');
var body = document.querySelector('body')
var header = document.querySelector('.header');

var fadeElements = document.querySelectorAll('.has-fade');

btnMenu.addEventListener('click',function(){
    console.log('mm');
    if (header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element ){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
        })
    } 
    else{//open
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach(function(element){
        element.classList.add('fade-in');
        element.classList.remove('fade-out')
        })

    }
  
});



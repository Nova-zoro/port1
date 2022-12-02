window.addEventListener('scroll' , () =>{
    document.querySelector('nav').classList.toggle('window-scrolled' , scrollY > 0);
}) 

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textxy => {
    let text = textxy.querySelector('p');
   
    text.innerHTML =  text.innerHTML.split('').Map((character , index) =>`<span style ="transform : rotate(${index * 12}deg)">${character}</span>`).join('')

});

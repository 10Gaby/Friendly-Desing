window.addEventListener('scroll',function(){
    var header = document.querySelector(".sub-header");
    header.classList.toggle("abajo",window.scrollY>0)
})

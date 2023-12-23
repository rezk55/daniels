
// Typing text 
var typed = new Typed('#head', {
    strings: ['Larry Daniels', 'Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
  });
//===================================================//

// counter
function counter(id){
    var countId = document.getElementById(id);
    var end = countId.innerHTML;
    new PureCounter({
    selector: `#${id}`, 
    start: 0, 
    end: end,
    duration: 0.1, 
    delay: 0.5, 
    once: true, 
    pulse: false, 
    decimals: 0,
    legacy: true, 
    filesizing: false, 
    currency: false, 
    formater: "us-US",  
    separator: false 
        });
}
window.addEventListener('load', function(){
    //counter
    counter('count1');
    counter('count2');
    counter('count3');
    counter('count4');

})
//==============================================//

//progress & navbar
window.addEventListener('scroll', function(){


    // progress animate 
    if(this.scrollY > 370){
        var progress1 = document.getElementById('progressAbout1');
        progress1.classList.add('animate-progress-95','w-95');
        console.log(this.scrollY)
        var progress2 = document.getElementById('progressAbout2');
        progress2.classList.add('animate-progress-80','w-80');
        var progress3 = document.getElementById('progressAbout3');
        progress3.classList.add('animate-progress-90','w-90');
    }

   
    //change navbar 
    var nav =  document.getElementById('nav');
    var logo =  document.getElementById('logo');
    var navbarNav =  document.getElementById('navbarNav');
    var navbarTogglerIcon = document.getElementById('navbarTogglerIcon');
    console.log(document.body.scrollTop);
    if (this.scrollY > 560 ) {
        nav.classList.add("bg-white");
        nav.classList.remove("bg-transparent");
        logo.classList.remove('text-white');
        navbarTogglerIcon.classList.add("text-black");
        navbarTogglerIcon.classList.remove("text-white");
        navbarNav.children[0].children[0].classList.remove('active-white');
        for(var i=0;i<navbarNav.children.length;i++){
            navbarNav.children[i].children[0].classList.add('text-black');
       }
    } 
    else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("nav-colored");
        logo.classList.add('text-white');
        navbarTogglerIcon.classList.remove("text-black");
        navbarTogglerIcon.classList.add("text-white");
        navbarNav.children[0].children[0].classList.add('active-white');
        for(var i=0;i<navbarNav.children.length;i++){
            navbarNav.children[i].children[0].classList.remove('text-black');
       }

    }

})







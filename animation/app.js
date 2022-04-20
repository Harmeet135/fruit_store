var t1 = gsap.timeline({ defaults: { duration: 0.6 } });
var imageContainer = document.querySelector(".image");

t1.from(".header", { y: "-100vh", ease: "circ.out" })
  .to(".header__logo", {
    y: 0,
    opacity: 1,
    ease: "circ.out",
  })
  .to(
    ".header__nav",
    {
      y: 0,
      opacity: 1,
      ease: "circ.out",
      stagger: ".2",
    },
    "-=0.4"
  )
  .from(
    ".line span",
    {
      duration: 1,
      y: 240,
      skewY: 20,
      ease: "power4.out",
      stagger: 0.1,
    },
    "-=0.8"
  )
  .from(
    ".hero-animation",
    {
      opacity: 0,
      y: -20,
      skewY: 5,
      skewX: 20,
      stagger: 0.2,
    },
    "-=1"
  )
  .from(
    imageContainer,
    1,
    {
      opacity: 0,
      y: "120%",
      skewX: 20,
      skewY: 10,
      ease: "power4.out",
    },
    "-=1.2"
  );



var menu = document.querySelector('.menu')
var change = document.querySelector('.change')
var overlay = document.querySelector('.overlay')
var close = document.querySelector('.close')
var main = document.querySelector('.main')

change.addEventListener('click',()=>{
    overlay.classList.toggle('menu');
    
})

close.addEventListener('click',()=>{
    overlay.classList.toggle('menu');

})



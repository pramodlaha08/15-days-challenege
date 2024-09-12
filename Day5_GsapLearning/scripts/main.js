var tl = gsap.timeline();

tl.from('.nav h2, .nav li', {
    y: -50,
    delay: 0.4,
    duration: 0.8,
    opacity: 0,
    stagger:0.3
})

tl.from('#main h1', {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4
    
})

tl.from('img', {
    opacity: 0,
    x: 100,
    duration:0.8,
    rotate: 45,
    stagger:0.7
})
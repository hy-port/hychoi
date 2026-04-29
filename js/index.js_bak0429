//index header logo detect
$(window).scroll(function() {
    var resolutionTop = $('.resolution').offset().top + 100;
    var top = resolutionTop + $('.resolution').outerHeight();
    var bottom = $('.ncs').offset().top - 100;

    if ($(window).scrollTop() >= top && $(window).scrollTop() <= bottom) {
        $('.whiteLogo').css('opacity', '0');
        $('.blackLogo').css('opacity', '1');
        $('.menuOpen').addClass('blackColor');
    } else {
        $('.whiteLogo').css('opacity', '1');
        $('.blackLogo').css('opacity', '0');
        $('.menuOpen').removeClass('blackColor');
    }
});

//loading
$(function() {
    let tl = gsap.timeline();

    $('body').css('overflow', 'hidden');
    
    gsap.fromTo('.loading .loadBox span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        duration: 1,
        delay: 0.5,
        ease: 'power4'
    });
    
    tl.fromTo('.loading', {
        xPercent: 0,
    }, {
        xPercent: -100,
        delay: 1.5,
        duration: 1.5,
        ease: 'power4',
        onComplete: function() {
            $('body').css('overflow', 'auto');
        }
    })

    tl.fromTo("header", {
        xPercent: 100
    }, {
        xPercent: 0,
        duration: 1.5,
        delay: -1.5,
        ease: 'power4'
    })
    
    tl.fromTo('.title .inner p span', {
        yPercent: 100
    }, {
        yPercent: 0,
        duration: 1,
        delay: -0.5
    })

    tl.fromTo('.about', {
        opacity: '0' 
    }, {
        opacity: '1',
        duration: 1,
        delay: -0.5
    })

    tl.play();
});

//about
$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    let mm = gsap.matchMedia(),
    breakPoint = 1280;

    mm.add({
        pc: `(min-width: ${breakPoint}px)`,
        tablet: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, reduceMotion} = context.conditions;
        
        gsap.fromTo('.about .inner .imgBox', {
            'clip-path' : pc ? 'inset(10% 35%)' : 'inset(20% 35%)',
            'filter' : pc ? 'grayscale(0)' : 'grayscale(0)'
        }, {'clip-path' : pc ? 'inset(0% 0%)' : 'inset(0% 0%)',
            'filter' : pc ? 'grayscale(0.8)' : 'grayscale(0.8)',
            scrollTrigger: {
                trigger: '.about .inner',
                pinnedContainer: '.about .inner',
                start: '0% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.about .inner .textBox', {
            'transform' : pc ? 'translateY(150%)' : 'translateY(150%)'
        }, {'transform' : pc ? 'translateY(0%)' : 'translateY(0%)',
            scrollTrigger: {
                trigger: '.about .inner',
                pinnedContainer: '.about .inner',
                start: '35% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.about .inner .textBox .mask .text', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.about .inner',
                pinnedContainer: '.about .inner',
                start: '45% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.about', {
        }, {
            scrollTrigger: {
                trigger: '.about',
                start: '0% 0%',
                end: '100% 0%',
                pin: true,
                scrub: 1
            }
        })

        return () => {}
    });
});

//about02
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    let mm = gsap.matchMedia(),
    breakPoint = 1280;

    mm.add({
        pc: `(min-width: ${breakPoint}px)`,
        tablet: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, reduceMotion } = context.conditions;
        
        gsap.fromTo('.about02 .inner ul li .mask span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.about02',
                pinnedContainer: '.about02',
                start: '-200% 0%',
                end: '-100% 0%',
                scrub: 1
            }
        })
        
        return () => {}
    });
});

//gallery
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    let mm = gsap.matchMedia(),
    breakPoint = 1280;

    mm.add({
        pc: `(min-width: ${breakPoint}px)`,
        tablet: `(max-width: ${breakPoint - 1}px)`,
        mo: `(max-width: 480px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, mo, reduceMotion } = context.conditions;

        let boxes = gsap.utils.toArray('.box-wrapper .box');
        gsap.to(boxes, {
            xPercent: pc ? -1128 : -1382,
            ease: 'none',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                start: '35% 0%',
                end: '280% 0%',
                scrub: 1
            }
        })
        
        let maskBox = gsap.utils.toArray('.box-wrapper .box .maskBox .innerBox');
        gsap.fromTo(maskBox, {
            'transform': pc ? 'translateX(-150px)' : mo ? 'translateX(-100px)' : 'translateX(-50px)'
        }, {
            'transform': pc ? 'translateX(-350px)' : mo ? 'translateX(-100px)' : 'translateX(-200px)',
            ease: 'none',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                scrub: 1,
                start: '35% 0%',
                end: '280% 0%'
            }
        })
        
        gsap.fromTo('.gallery .progressbar .mask span', {
            'background-size' : pc ?  '0% 100%' : '0% 100%',
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                start: '35% 0%',
                end: '280% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.box:nth-child(odd)', {
            'transform' : pc ? 'translateY(-150%)' : 'translateY(-150%)',
        }, {
            'transform' : pc ? 'translateY(0%)' : 'translateY(0%)',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                start: '0% 0%',
                end: '25% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.box:nth-child(even)', {
            'transform' : pc ? 'translateY(150%)' : 'translateY(150%)',
        }, {
            'transform' : pc ? 'translateY(0%)' : 'translateY(0%)',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                start: '0% 0%',
                end: '25% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.gallery', {
        }, {
            scrollTrigger: {
                trigger: '.gallery',
                start: '0% 0%',
                end: '300% 0%',
                pin: true,
                scrub: 1
            }
        })

        return () => {}
    });
});

//resolution
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    let mm = gsap.matchMedia(),
    breakPoint = 1280;

    mm.add({
        pc: `(min-width: ${breakPoint}px)`,
        tablet: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, reduceMotion } = context.conditions;
        
        gsap.fromTo('.resolution .mask span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.resolution',
                pinnedContainer: '.resolution',
                start: '-100% 0%',
                end: '-50% 0%',
                scrub: 1
            }
        })
        
        return () => {}
    });
});

//work
$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    let mm = gsap.matchMedia(),
    breakPoint = 1280;

    mm.add({
        pc: `(min-width: ${breakPoint}px)`,
        tablet: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, reduceMotion } = context.conditions;
        
        gsap.fromTo('.work .inner', {
            'clip-path' : pc ? 'inset(0% 25%)' : 'inset(0% 25%)',
            'transform' : pc ? 'translateY(30%)' : 'translateY(30%)'
        }, {
            'clip-path' : pc ? 'inset(0% 0%)' : 'inset(0% 0%)',
            'transform' : pc ? 'translateY(0%)' : 'translateY(0%)',
            scrollTrigger: {
                trigger: '.work',
                start: '-100% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.work .inner .sectionName .mask span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.work',
                start: '-60% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.work .inner .cylinder .container .container-box', {
            'rotationX' : pc ? '-45' : '-45'
        }, {
            'rotationX' : pc ? '292.5' : '292.5',
            scrollTrigger: {
                trigger: '.work',
                start: '0% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.work .inner .textBox', {
            'transform' : pc ? 'translateY(100%)' : 'translateY(100%)'
        }, {
            'transform' : pc ? 'translateY(65%)' : 'translateY(65%)',
            scrollTrigger: {
                trigger: '.work',
                start: '20% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })
        
        gsap.fromTo('.work .inner .textBox li .mask span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.work',
                start: '30% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.work', {
        }, {
            scrollTrigger: {
                trigger: '.work',
                start: '0% 0%',
                end: '100% 0%',
                pin: true,
                scrub: 1
            }
        })
        
        return () => {}
    });
});

//ncs
$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)

    let mm = gsap.matchMedia(),
    breakPoint = 1280;

    mm.add({
        pc: `(min-width: ${breakPoint}px)`,
        tablet: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, reduceMotion } = context.conditions;
        
        let ncsList = document.querySelectorAll('.ncsList');
        
        ncsList.forEach((ncsList) => {
            gsap.to(ncsList, {
                scrollTrigger: {
                    trigger: ncsList,
                    start: '-100% 0%',
                    end: '0% 0%',
                    toggleClass: 'active',
                }
            })
        })
        
        return () => {}
    });
});

//contact
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    let mm = gsap.matchMedia(),
    breakPoint = 1280;

    mm.add({
        pc: `(min-width: ${breakPoint}px)`,
        tablet: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, reduceMotion } = context.conditions;
        
        gsap.fromTo('.contact', {
            'opacity' : pc ? '0' : '0'
        }, {
            'opacity' : pc ? '0.7' : '0.7',
            scrollTrigger: {
                trigger: '.contact',
                start: '-50% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })
        
        return () => {}
    });
});

// resize
window.addEventListener('resize', function() {
    document.body.style.overflow = 'hidden';
    setTimeout(function() {
        gsap.matchMediaRefresh();
        document.body.style.overflow = 'auto';
    }, 200);
});
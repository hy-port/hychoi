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

        gsap.fromTo('.about .inner .marquee', {
            'transform' : pc ? 'translateY(150%)' : 'translateY(150%)' 
        }, {
            'transform' : pc ? 'translateY(0%)' : 'translateY(0%)',
            scrollTrigger: {
                trigger: '.about .inner',
                pinnedContainer: '.about .inner',
                start: '50% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.about .inner .marquee .marquee-content01', {
            'transform' : pc ? 'translateX(calc(-35% - 15px))' : 'translateX(calc(-35% - 15px))'
        }, {
            'transform' : pc ? 'translateX(calc(1% - 15px))' : 'translateX(calc(1% - 15px))',
            scrollTrigger: {
                trigger: '.about .inner',
                pinnedContainer: '.about .inner',
                start: '50% 0%',
                end: '200% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.about .inner .marquee .marquee-content02', {
            'transform' : pc ? 'translateX(calc(10% - 15px))' : 'translateX(calc(10% - 15px))'
        }, {
            'transform' : pc ? 'translateX(calc(-28% - 15px))' : 'translateX(calc(-28% - 15px))',
            scrollTrigger: {
                trigger: '.about .inner',
                pinnedContainer: '.about .inner',
                start: '50% 0%',
                end: '200% 0%',
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
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, reduceMotion} = context.conditions;

        gsap.fromTo('.box-wrapper2', {
            'rotateY' : pc ? '0deg' : '0deg'
        }, {
            'rotateY' : pc ? '-360deg' : '-360deg',
            ease: 'none',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                scrub: 1,
                start: '35% 0%',
                end: '280% 0%'
            }
        })

        gsap.fromTo('.box-wrapper2 .box:nth-child(odd) .maskBox img', {
            'transform' : pc ? 'translateY(-150%)' : 'translateY(-150%)'
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

        gsap.fromTo('.box-wrapper2 .box:nth-child(even) .maskBox img', {
            'transform' : pc ? 'translateY(150%)' : 'translateY(150%)'
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
    
        gsap.fromTo('.gallery .progressbar .mask span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
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

        gsap.fromTo('.changeText p', {
            'transform' : pc ? 'translateY(100%)' : 'translateY(100%)'
        },{
            keyframes: {
                "0%": {translateY: '100%'},
                "5%": {translateY: '0%'},
                "10%": {translateY: '0%'},
                "20%": {translateY: '-100%'},
                "30%": {translateY: '-100%'},
                "40%": {translateY: '-200%'},
                "50%": {translateY: '-200%'},
                "60%": {translateY: '-300%'},
                "70%": {translateY: '-300%'},
                "80%": {translateY: '-400%'},
                "90%": {translateY: '-400%'},
                "100%": {translateY: '-500%'}
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                scrub: 1,
                start: '0% 0%',
                end: '300% 0%'
            }
        })

        gsap.fromTo('.fixedText p', {
            'transform' : pc ? 'translateY(100%)' : 'translateY(100%)'
        }, {
            keyframes: {
                "0%": {translateY: '100%'},
                "5%": {translateY: '0%'},
                "15%": {translateY: '-100%'},
                "25%": {translateY: '-100%'},
                "35%": {translateY: '-200%'},
                "45%": {translateY: '-200%'},
                "55%": {translateY: '-300%'},
                "65%": {translateY: '-300%'},
                "75%": {translateY: '-400%'},
                "85%": {translateY: '-400%'},
                "95%": {translateY: '-500%'},
                "100%": {translateY: '-500%'}
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.gallery .inner',
                pinnedContainer: '.gallery .inner',
                scrub: 1,
                start: '0% 0%',
                end: '300% 0%'
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

// open detail
/* $(function() {
    function openNewWindow(element) {
        var dataDirect = element.getAttribute("data-direct");
        window.open("../detail/" + dataDirect + "/" + dataDirect + ".html", "_blank");
    }
    
    $(".box").click(function() {
        openNewWindow(this);
    });
}); */

//project01
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

        gsap.fromTo('.project01 .inner .right span.projectText span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.project01 .inner',
                start: '-30% 0%',
                end: '-10% 0%',
                scrub: 1
            }
        })

        return () => {}
    });

    $('.project01 .inner .left').hover(
        function() {
            $('.project01 .inner').addClass('on');
        },
        function() {
            $('.project01 .inner').removeClass('on');
        }
    );
    
    /* $(".project01 .inner .left").click(function() {
        window.open("../work/img/img/kakaoWebtoon.pdf", "_blank");
    }); */
});

//project02
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

        gsap.fromTo('.project02 .inner .left span.projectText span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.project02 .inner',
                start: '-30% 0%',
                end: '-10% 0%',
                scrub: 1
            }
        })

        return () => {}
    });

    $('.project02 .inner .right').hover(
        function() {
            $('.project02 .inner').addClass('on');
        },
        function() {
            $('.project02 .inner').removeClass('on');
        }
    );
    
    /* $(".project02 .inner .right").click(function() {
        window.open("../work/img/img/edisonMotors.pdf", "_blank");
    }); */
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

        gsap.fromTo('.ncs .inner .textBox .ncsTitle span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.ncs .inner',
                start: '-50% 0%',
                end: '-15% 0%',
                scrub: 1
            }
        })

        return () => {}
    });
    
    function openNewWindow(element) {
        var dataDirect = element.getAttribute("data-direct");
        window.open("../work/img/img/" + dataDirect, "_blank");
    }
    
    $(".detailPage").click(function() {
        openNewWindow(this);
    });
    
    $(".outerPage").click(function() {
        window.open("http://ezentext01.dothome.co.kr", "_blank");
    });

    $(".outerPage2").click(function() {
        window.open("http://hyportfol01.dothome.co.kr", "_blank");
    });
});

// resolution
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
                start: '-80% 0%',
                end: '-30% 0%',
                scrub: 1,
                onLeave: function() {
                    $('.skill .inner .right li').removeClass('active');
                }
            }
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
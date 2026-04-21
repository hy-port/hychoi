//process header logo detect
$(window).scroll(function() {
    var historyTop = $('.research').offset().top - 50;
    var top = historyTop + $('.research').outerHeight();
    var bottom = $('.information').offset().top - 50;
    
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

// sign
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

        gsap.fromTo('.sign .inner .textBox span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.sign .inner',
                pinnedContainer: '.sign .inner',
                start: '-50% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('#svgAni01', {
            'stroke-dashoffset' : pc ? '6534' : '6534'
        }, {
            'stroke-dashoffset' : pc ? '0' : '0',
            scrollTrigger: {
                trigger: '.sign .inner',
                pinnedContainer: '.sign .inner',
                start: '0% 0%',
                end: '100% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.sign', {
        }, {
            scrollTrigger: {
                trigger: '.sign',
                start: '0% 0%',
                end: '100% 0%',
                pin: true,
                scrub: 1
            }
        })

        return () => {}
    });
});

//research
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
        
        gsap.utils.toArray('.research .inner').forEach(function(text) {
            gsap.fromTo(text.querySelector('.innerTitle .mask:nth-child(1) span'), {
                transform : pc ? 'translateY(100%)' : 'translateY(100%)'
            }, {
                transform : pc ? 'translateY(0%)' : 'translateY(0%)',
                scrollTrigger: {
                    trigger: text,
                    start: '-60% 0%',
                    end: '-40% 0%',
                    scrub: 1
                }
            })
        })

        gsap.utils.toArray('.research .inner').forEach(function(text) {
            gsap.fromTo(text.querySelector('.innerTitle .mask:nth-child(2) span'), {
                transform : pc ? 'translateY(100%)' : 'translateY(100%)'
            }, {
                transform : pc ? 'translateY(0%)' : 'translateY(0%)',
                scrollTrigger: {
                    trigger: text,
                    start: '-30% 0%',
                    end: '-10% 0%',
                    scrub: 1
                }
            })
        })

        gsap.utils.toArray('.research .inner').forEach(function(text) {
            gsap.fromTo(text.querySelector('.innerContent .left .img'), {
            }, {
                scrollTrigger: {
                    trigger: text,
                    start: '-10% 0%',
                    end: '-10% 0%',
                    scrub: 1,
                    onEnter: function() {
                        text.classList.add('on');
                    }
                }
            })
        })

        gsap.utils.toArray('.research .inner').forEach(function(text) {
            gsap.fromTo(text.querySelector('.innerContent .right .text span'), {
                'background-size' : pc ? '0% 100%' : '0% 100%'
            }, {
                'background-size' : pc ? '100% 100%' : '100% 100%',
                scrollTrigger: {
                    trigger: text,
                    start: '-20% 0%',
                    end: '15% 0%',
                    scrub: 1
                }
            })
        })

        gsap.to('#visual', {
            keyframes: {
                "0%": {'stroke-dashoffset' : '4986'},
                "5%": {'stroke-dashoffset' : '4600'},
                "10%": {'stroke-dashoffset' : '4200'},
                "15%": {'stroke-dashoffset' : '3900'},
                "25%": {'stroke-dashoffset' : '3500'},
                "30%": {'stroke-dashoffset' : '3200'},
                "40%": {'stroke-dashoffset' : '2800'},
                "50%": {'stroke-dashoffset' : '2300'},
                "60%": {'stroke-dashoffset' : '1700'},
                "70%": {'stroke-dashoffset' : '1200'},
                "80%": {'stroke-dashoffset' : '700'},
                "92%": {'stroke-dashoffset' : '0'},
                "100%": {'stroke-dashoffset' : '0'},
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.research #visual',
                start: '-5% 0%',
                end: '110% 100%',
                scrub: 1,
                ease: 'none',
                onUpdate: function(self) {
                    var visual = $('#visual');
                    var strokeDashOffset = visual.css('stroke-dashoffset');
                
                    if (parseInt(strokeDashOffset) < 4725) {
                        $('.research .svgPoint .point01').addClass('on');}
                    else if (parseInt(strokeDashOffset) > 4725) {
                        $('.research .svgPoint .point01').removeClass('on');}
                    
                    if (parseInt(strokeDashOffset) < 3905) {
                        $('.research .svgPoint .point02').addClass('on');}
                    else if (parseInt(strokeDashOffset) > 3905) {
                        $('.research .svgPoint .point02').removeClass('on');}
                        
                    if (parseInt(strokeDashOffset) < 3158) {
                        $('.research .svgPoint .point03').addClass('on');}
                    else if (parseInt(strokeDashOffset) > 3158) {
                        $('.research .svgPoint .point03').removeClass('on');}
                        
                    if (parseInt(strokeDashOffset) < 2248) {
                        $('.research .svgPoint .point04').addClass('on');}
                        else if (parseInt(strokeDashOffset) > 2248) {
                            $('.research .svgPoint .point04').removeClass('on');}
                        
                    if (parseInt(strokeDashOffset) < 1405) {
                        $('.research .svgPoint .point05').addClass('on');}
                    else if (parseInt(strokeDashOffset) > 1405) {
                        $('.research .svgPoint .point05').removeClass('on');}
                        
                    if (parseInt(strokeDashOffset) < 552) {
                        $('.research .svgPoint .point06').addClass('on');}
                    else if (parseInt(strokeDashOffset) > 552) {
                        $('.research .svgPoint .point06').removeClass('on');}
                }
            }
        })

        return () => {}
    });
});

//system
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

        gsap.fromTo('.system .inner', {
            'clip-path' : pc ? 'inset(0% 25%)' : 'inset(0% 25%)',
            'transform' : pc ? 'translateY(30%)' : 'translateY(30%)'
        }, {
            'clip-path' : pc ? 'inset(0% 0%)' : 'inset(0% 0%)',
            'transform' : pc ? 'translateY(0%)' : 'translateY(0%)',
            scrollTrigger: {
                trigger: '.system',
                start: '-50% 0%',
                end: '-10% 0%',
                scrub: 1
            }
        })

        return () => {}
    });
});

//info
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

        gsap.fromTo('.information .inner .textBox span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.information .inner',
                start: '-50% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.information .inner .imgBox #infoSvg01', {
            'stroke-dashoffset' : pc ? '920' : '920'
        }, {
            'stroke-dashoffset' : pc ? '0' : '0',
            scrollTrigger: {
                trigger: '.information .inner',
                start: '-40% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.information .inner .imgBox #infoSvg02', {
            'stroke-dashoffset' : pc ? '921' : '921'
        }, {
            'stroke-dashoffset' : pc ? '0' : '0',
            scrollTrigger: {
                trigger: '.information .inner',
                start: '-40% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.information .inner .imgBox #infoSvg03', {
            'stroke-dashoffset' : pc ? '646' : '646'
        }, {
            'stroke-dashoffset' : pc ? '0' : '0',
            scrollTrigger: {
                trigger: '.information .inner',
                start: '-40% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.information .inner .imgBox #infoSvg04', {
            'stroke-dashoffset' : pc ? '645' : '645'
        }, {
            'stroke-dashoffset' : pc ? '0' : '0',
            scrollTrigger: {
                trigger: '.information .inner',
                start: '-40% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })

        return () => {}
    });
});

// sketch
/* $(function() {
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

        gsap.fromTo('.sketch .inner .left > span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.sketch .inner',
                start: '-50% 0%',
                end: '0% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.sketch .inner .right', {
        }, {
            scrollTrigger: {
                trigger: '.sketch .inner .right',
                start: '-50% 0%',
                end: '0% 0%',
                scrub: 1,
                onEnter: function() {
                    document.querySelector('.sketch .inner .right').classList.add('on');
                }
            }
        })

        return () => {}
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}) */

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
                start: '-70% 0%',
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
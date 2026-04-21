//about header logo detect
$(window).scroll(function() {
    var historyTop = $('.history').offset().top - 50;
    var top = historyTop + $('.history').outerHeight();
    var bottom = $('.resolution').offset().top - 50;
    
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
    });

    tl.fromTo("header", {
        xPercent: 100
    }, {
        xPercent: 0,
        duration: 1.5,
        delay: -1.5,
        ease: 'power4'
    });
    
    tl.fromTo('.title .inner p span', {
        yPercent: 100
    }, {
        yPercent: 0,
        duration: 1,
        delay: -0.5
    });

    tl.fromTo('.about', {
        opacity: '0' 
    }, {
        opacity: '1',
        duration: 1,
        delay: -0.5
    });

    tl.play();
});

// about
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



//basic
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

        gsap.fromTo('.basic .inner .left li .mask .infoTitle1', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.basic .inner',
                start: '-40% 0%',
                end: '-5% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.basic .inner .left li .mask .infoTitle2 .infoText1', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.basic .inner',
                start: '-40% 0%',
                end: '-45% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.basic .inner .left li .mask .infoTitle2 .infoText2', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.basic .inner',
                start: '-40% 0%',
                end: '-5% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.basic .inner .right .text .mask span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.basic .inner',
                start: '-40% 0%',
                end: '-5% 0%',
                scrub: 1
            }
        })

        return () => {}
    });

    //count
    var count = {var : 0};

    ScrollTrigger.create({
        trigger: ".basic",
        start: "-10% 0%",
        onEnter: function() {
            gsap.fromTo(count, {
                var: 0
            }, {
                var: 40,
                duration: 1,
                onUpdate: function() {
                    $("#number1").text(Math.floor(count.var));
                },
                onComplete: function() {
                    $("#number1").text(count.var);
                }
            });
        }
    })

    ScrollTrigger.create({
        trigger: ".basic",
        start: "-10% 0%",
        onEnter: function() {
            gsap.fromTo(count, {
                var: 0
            }, {
                var: 200,
                duration: 1,
                onUpdate: function() {
                    $("#number2").text(Math.floor(count.var));
                },
                onComplete: function() {
                    $("#number2").text(count.var);
                }
            });
        }
    });

    ScrollTrigger.create({
        trigger: ".basic",
        start: "-10% 0%",
        onEnter: function() {
            gsap.fromTo(count, {
                var: 0
            }, {
                var: 2.4,
                duration: 1,
                onUpdate: function() {
                    $("#number3").text(count.var.toFixed(1));
                },
                onComplete: function() {
                    $("#number3").text("2.4");
                }
            });
        }
    });
});

//history
//history toggle
$(function() {
    $('.history').mouseenter(function() {
        $(this).addClass('active');
    });
    $('.history').mouseleave(function() {
        $(this).removeClass('active');
    });
});

//history mouse chase
$(function() {
    var img = $('.history .inner li .img');
    var mouseX = 0;
    var mouseY = 0;
    
    $(document).mousemove(function(e) {
        mouseX = e.pageX; 
        mouseY = e.pageY;
    });
    
    function animate() {
        var speed = 0.2;
        var targetX = mouseX 
        var targetY = mouseY
        var currentX = parseFloat(img.css('left'));
        var currentY = parseFloat(img.css('top'));
        var newX = currentX + (targetX - currentX) / speed;
        var newY = currentY + (targetY - currentY) / speed;
    
        img.css({
            left: newX,
            top: newY
        });
    
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});

//skill
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

        gsap.fromTo('.skill .inner .left .mask', {
            'top' : pc ? '25%' : '25%'
        }, {
            'top' : pc ? '61%' : '66%',
            scrollTrigger: {
                trigger: '.skill',
                start: '-15% 0%',
                end: '40% 0%',
                scrub: 1
            }
        })

        gsap.fromTo('.skill .inner', {
            'clip-path' : pc ? 'inset(0% 25%)' : 'inset(0% 25%)',
            'transform' : pc ? 'translateY(30%)' : 'translateY(30%)'
        }, {
            'clip-path' : pc ? 'inset(0% 0%)' : 'inset(0% 0%)',
            'transform' : pc ? 'translateY(0%)' : 'translateY(0%)',
            scrollTrigger: {
                trigger: '.skill',
                start: '-70% 0%',
                end: '-10% 0%',
                scrub: 1,
                onEnter: function() {
                    $('.skill .inner .right li').removeClass('active');
                }
            }
        })

        gsap.fromTo('.skill .inner .left .mask span', {
            'background-size' : pc ? '0% 100%' : '0% 100%'
        }, {
            'background-size' : pc ? '100% 100%' : '100% 100%',
            scrollTrigger: {
                trigger: '.skill',
                start: '-60% 0%',
                end: '-15% 0%',
                scrub: 1
            }
        })

        return () => {}
    });
    
    $(function() {
        $('.skill .inner .right li').on('click', function() {
            $(this).toggleClass('active');
            $('.skill .inner .right li').not(this).removeClass('active');
        });
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
        mo: `(max-width: 480px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
        let {pc, tablet, mo, reduceMotion } = context.conditions;

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
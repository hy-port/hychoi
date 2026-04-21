//detail header logo detect
$(window).scroll(function() {
    // var resolutionTop = $('.resolution').offset().top + 100;
    // var top = resolutionTop + $('.resolution').outerHeight();
    var top = 0;
    var bottom = $('.info').offset().top - 100;

    if ($(window).scrollTop() >= top && $(window).scrollTop() <= bottom) {
        $('.whiteLogo').css('opacity', '1');
        $('.blackLogo').css('opacity', '0');
        $('.menuOpen').removeClass('blackColor');
    } else {
        $('.whiteLogo').css('opacity', '0');
        $('.blackLogo').css('opacity', '1');
        $('.menuOpen').addClass('blackColor');
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
        duration: 1.5,
        delay: 0.5,
        ease: 'power4'
    });
    
    tl.fromTo('.loading', {
        xPercent: 0,
    }, {
        xPercent: -100,
        delay: 2,
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
    
    tl.fromTo('.title .inner', {
        // yPercent: 100
    }, {
        // yPercent: 0,
        duration: 0.01,
        // delay: -0.5,
        onComplete: function() {
            document.querySelector('.title .inner').classList.add('on');
        }
    })

    tl.play();
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
    
    gsap.fromTo('.info .inner .left .innerTitle span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.info .inner',
            start: '-40% 0%',
            end: '0% 0%',
            scrub: 1
        }
    })
    
    gsap.fromTo('.info .inner .left .text span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.info .inner',
            start: '-40% 0%',
            end: '0% 0%',
            scrub: 1
        }
    })
    
    gsap.fromTo('.info .inner .right li .content', {
        'transform' : 'translateY(200%)'
    }, {
        'transform' : 'translateY(0%)',
        scrollTrigger: {
            trigger: '.info .inner',
            start: '-40% 0%',
            end: '0% 0%',
            scrub: 1
        }
    })
});

//system
$(function() {
    $('.system .inner .colorBar li').each(function(index) {
    const liElement = $(this);
    const dataColor = liElement.attr('data-color');
    liElement.css('background-color', dataColor);
    liElement.html(dataColor);
    });
});

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
    
    gsap.fromTo('.system .inner', {
    }, {
        scrollTrigger: {
            trigger: '.system .inner',
            start: '-20% 0%',
            end: '-20% 0%',
            scrub: 1,
            onEnter: function() {
            document.querySelector('.system .inner').classList.add('on');
            }
        }
    })
});

//feature
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
    
    gsap.fromTo('.feature .inner', {
    }, {
        scrollTrigger: {
            trigger: '.feature .inner',
            start: '-20% 0%',
            end: '-20% 0%',
            scrub: 1,
            onEnter: function() {
            document.querySelector('.feature .inner').classList.add('on');
            }
        }
    })
});

//run
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
    
    gsap.fromTo('.run .inner', {
    }, {
        scrollTrigger: {
            trigger: '.run .inner',
            start: '-20% 0%',
            end: '-20% 0%',
            scrub: 1,
            onEnter: function() {
            document.querySelector('.run .inner').classList.add('on');
            }
        }
    })
});
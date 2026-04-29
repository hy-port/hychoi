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

/* --------------------------------------------------
   공통 초기화 (Lenis + ScrollTrigger + ticker)
-------------------------------------------------- */
const setVh = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
};
setVh();
window.addEventListener("resize", setVh);

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
  infinite: false,
});

gsap.ticker.add((time) => {
  lenis.raf(time * 600);
});
gsap.ticker.lagSmoothing(0);

lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";

const mm = gsap.matchMedia();

/* --------------------------------------------------
     공통 애니메이션 함수
  -------------------------------------------------- */

// about 섹션
function aboutAnimation({ clipStart }) {
  gsap.fromTo(
    ".about .inner .imgBox",
    { clipPath: clipStart, filter: "grayscale(0)" },
    {
      clipPath: "inset(0% 0%)",
      filter: "grayscale(0.8)",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "0% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about .inner .marquee",
    { transform: "translateY(150%)" },
    {
      transform: "translateY(0%)",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "50% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about .inner .marquee .marquee-content01",
    { transform: "translateX(calc(-35% - 15px))" },
    {
      transform: "translateX(calc(1% - 15px))",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "50% 0%",
        end: "200% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about .inner .marquee .marquee-content02",
    { transform: "translateX(calc(10% - 15px))" },
    {
      transform: "translateX(calc(-28% - 15px))",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "50% 0%",
        end: "200% 0%",
        scrub: 1,
      },
    }
  );

  gsap.to(".about", {
    scrollTrigger: {
      trigger: ".about",
      start: "0% 0%",
      end: "100% 0%",
      pin: true,
      scrub: 1,
    },
  });
}

// gallery 섹션
function galleryAnimation() {
  gsap.fromTo(
    ".box-wrapper2",
    { rotateY: "0deg" },
    {
      rotateY: "-360deg",
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        scrub: 1,
        start: "35% 0%",
        end: "280% 0%",
      },
    }
  );

  gsap.fromTo(
    ".box-wrapper2 .box:nth-child(odd) .maskBox img",
    { transform: "translateY(-150%)" },
    {
      transform: "translateY(0%)",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        start: "0% 0%",
        end: "25% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".box-wrapper2 .box:nth-child(even) .maskBox img",
    { transform: "translateY(150%)" },
    {
      transform: "translateY(0%)",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        start: "0% 0%",
        end: "25% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".gallery .progressbar .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        start: "35% 0%",
        end: "280% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".changeText p",
    { transform: "translateY(100%)" },
    {
      keyframes: {
        "0%": { translateY: "100%" },
        "5%": { translateY: "0%" },
        "10%": { translateY: "0%" },
        "20%": { translateY: "-100%" },
        "30%": { translateY: "-100%" },
        "40%": { translateY: "-200%" },
        "50%": { translateY: "-200%" },
        "60%": { translateY: "-300%" },
        "70%": { translateY: "-300%" },
        "80%": { translateY: "-400%" },
        "90%": { translateY: "-400%" },
        "100%": { translateY: "-500%" },
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        scrub: 1,
        start: "0% 0%",
        end: "300% 0%",
      },
    }
  );

  gsap.fromTo(
    ".fixedText p",
    { transform: "translateY(100%)" },
    {
      keyframes: {
        "0%": { translateY: "100%" },
        "5%": { translateY: "0%" },
        "15%": { translateY: "-100%" },
        "25%": { translateY: "-100%" },
        "35%": { translateY: "-200%" },
        "45%": { translateY: "-200%" },
        "55%": { translateY: "-300%" },
        "65%": { translateY: "-300%" },
        "75%": { translateY: "-400%" },
        "85%": { translateY: "-400%" },
        "95%": { translateY: "-500%" },
        "100%": { translateY: "-500%" },
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        scrub: 1,
        start: "0% 0%",
        end: "300% 0%",
      },
    }
  );

  gsap.to(".gallery", {
    scrollTrigger: {
      trigger: ".gallery",
      start: "0% 0%",
      end: "300% 0%",
      pin: true,
      scrub: 1,
    },
  });
}

// project 섹션 (공통)
function projectAnimation({
  textSelector,
  triggerSelector,
  hoverTarget,
  hoverClass,
}) {
  gsap.fromTo(
    textSelector,
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: triggerSelector,
        start: "-30% 0%",
        end: "-10% 0%",
        scrub: 1,
      },
    }
  );

  $(hoverTarget).hover(
    function () {
      $(hoverClass).addClass("on");
    },
    function () {
      $(hoverClass).removeClass("on");
    }
  );
}

// ncs 섹션
function ncsAnimation() {
  gsap.fromTo(
    ".ncs .inner .textBox .ncsTitle span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".ncs .inner",
        start: "-50% 0%",
        end: "-15% 0%",
        scrub: 1,
      },
    }
  );
}

// resolution 섹션
function resolutionAnimation() {
  gsap.fromTo(
    ".resolution .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".resolution",
        start: "-80% 0%",
        end: "-30% 0%",
        scrub: 1,
      },
    }
  );
}

// contact 섹션
function contactAnimation() {
  gsap.fromTo(
    ".contact",
    { opacity: 0 },
    {
      opacity: 0.7,
      scrollTrigger: {
        trigger: ".contact",
        start: "-50% 0%",
        end: "0% 0%",
        scrub: 1,
      },
    }
  );
}

/* --------------------------------------------------
     ncs 링크 핸들러 (breakpoint 무관)
  -------------------------------------------------- */
function openNewWindow(element) {
  const dataDirect = element.getAttribute("data-direct");
  window.open("../work/img/img/" + dataDirect, "_blank");
}

$(".detailPage").on("click", function () {
  openNewWindow(this);
});
$(".outerPage").on("click", function () {
  window.open("http://ezentext01.dothome.co.kr", "_blank");
});
$(".outerPage2").on("click", function () {
  window.open("http://hyportfol01.dothome.co.kr", "_blank");
});

/* --------------------------------------------------
     breakpoint별 ScrollTrigger 애니메이션
  -------------------------------------------------- */
mm.add("(min-width: 1280px)", () => {
  aboutAnimation({ clipStart: "inset(10% 35%)" });

  galleryAnimation();

  projectAnimation({
    textSelector: ".project01 .inner .right span.projectText span",
    triggerSelector: ".project01 .inner",
    hoverTarget: ".project01 .inner .left",
    hoverClass: ".project01 .inner",
  });

  projectAnimation({
    textSelector: ".project02 .inner .left span.projectText span",
    triggerSelector: ".project02 .inner",
    hoverTarget: ".project02 .inner .right",
    hoverClass: ".project02 .inner",
  });

  ncsAnimation();

  resolutionAnimation();

  contactAnimation();

  return () => {};
});

mm.add("(min-width: 769px) and (max-width: 1279px)", () => {
  aboutAnimation({ clipStart: "inset(20% 35%)" });

  galleryAnimation();

  projectAnimation({
    textSelector: ".project01 .inner .right span.projectText span",
    triggerSelector: ".project01 .inner",
    hoverTarget: ".project01 .inner .left",
    hoverClass: ".project01 .inner",
  });

  projectAnimation({
    textSelector: ".project02 .inner .left span.projectText span",
    triggerSelector: ".project02 .inner",
    hoverTarget: ".project02 .inner .right",
    hoverClass: ".project02 .inner",
  });

  ncsAnimation();

  resolutionAnimation();

  contactAnimation();

  return () => {};
});

mm.add("(max-width: 768px)", () => {
  return () => {};
});
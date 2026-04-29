//about header logo detect
$(window).scroll(function () {
  var historyTop = $(".history").offset().top - 50;
  var top = historyTop + $(".history").outerHeight();
  var bottom = $(".resolution").offset().top - 50;

  if ($(window).scrollTop() >= top && $(window).scrollTop() <= bottom) {
    $(".whiteLogo").css("opacity", "0");
    $(".blackLogo").css("opacity", "1");
    $(".menuOpen").addClass("blackColor");
  } else {
    $(".whiteLogo").css("opacity", "1");
    $(".blackLogo").css("opacity", "0");
    $(".menuOpen").removeClass("blackColor");
  }
});

//loading
$(function () {
  let tl = gsap.timeline();
  $("body").css("overflow", "hidden");

  gsap.fromTo(
    ".loading .loadBox span",
    {
      "background-size": "0% 100%",
    },
    {
      "background-size": "100% 100%",
      duration: 1,
      delay: 0.5,
      ease: "power4",
    }
  );

  tl.fromTo(
    ".loading",
    {
      xPercent: 0,
    },
    {
      xPercent: -100,
      delay: 1.5,
      duration: 1.5,
      ease: "power4",
      onComplete: function () {
        $("body").css("overflow", "auto");
      },
    }
  );

  tl.fromTo(
    "header",
    {
      xPercent: 100,
    },
    {
      xPercent: 0,
      duration: 1.5,
      delay: -1.5,
      ease: "power4",
    }
  );

  tl.fromTo(
    ".title .inner p span",
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      duration: 1,
      delay: -0.5,
    }
  );

  tl.fromTo(
    ".about",
    {
      opacity: "0",
    },
    {
      opacity: "1",
      duration: 1,
      delay: -0.5,
    }
  );

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
   요소 캐싱
-------------------------------------------------- */
const $historyItems = $(".history");
const $historyImg = $(".history .inner li .img");
const $skillListItems = $(".skill .inner .right li");

/* --------------------------------------------------
   공통 애니메이션 함수
-------------------------------------------------- */

// about 섹션
function aboutAnimation({ clipStart, clipEnd }) {
  gsap.fromTo(
    ".about .inner .imgBox",
    { clipPath: clipStart, filter: "grayscale(0)" },
    {
      clipPath: clipEnd,
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
    { y: "150%" },
    {
      y: "0%",
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

// basic 섹션
function basicAnimation() {
  gsap.fromTo(
    ".basic .inner .left li .mask .infoTitle1",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".basic .inner",
        start: "-40% 0%",
        end: "-5% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".basic .inner .left li .mask .infoTitle2 .infoText1",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".basic .inner",
        start: "-40% 0%",
        end: "-45% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".basic .inner .left li .mask .infoTitle2 .infoText2",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".basic .inner",
        start: "-40% 0%",
        end: "-5% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".basic .inner .right .text .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".basic .inner",
        start: "-40% 0%",
        end: "-5% 0%",
        scrub: 1,
      },
    }
  );
}

// basic 카운트 애니메이션 (breakpoint 무관)
function basicCountAnimation() {
  const countTargets = [
    { id: "#number1", to: 40, decimals: 0 },
    { id: "#number2", to: 200, decimals: 0 },
    { id: "#number3", to: 2.4, decimals: 1 },
  ];

  countTargets.forEach(({ id, to, decimals }) => {
    const proxy = { var: 0 };
    ScrollTrigger.create({
      trigger: ".basic",
      start: "-10% 0%",
      onEnter() {
        gsap.fromTo(
          proxy,
          { var: 0 },
          {
            var: to,
            duration: 1,
            onUpdate() {
              $(id).text(
                decimals > 0
                  ? proxy.var.toFixed(decimals)
                  : Math.floor(proxy.var)
              );
            },
            onComplete() {
              $(id).text(decimals > 0 ? to.toFixed(decimals) : to);
            },
          }
        );
      },
    });
  });
}

function basicCountAnimation2() {
  const countTargets = [
    { id: "#number1", to: 40, decimals: 0 },
    { id: "#number2", to: 200, decimals: 0 },
    { id: "#number3", to: 2.4, decimals: 1 },
  ];

  countTargets.forEach(({ id, to, decimals }) => {
    const proxy = { var: 0 };
    ScrollTrigger.create({
      trigger: ".basic",
      start: "0% 50%",
      onEnter() {
        gsap.fromTo(
          proxy,
          { var: 0 },
          {
            var: to,
            duration: 1,
            onUpdate() {
              $(id).text(
                decimals > 0
                  ? proxy.var.toFixed(decimals)
                  : Math.floor(proxy.var)
              );
            },
            onComplete() {
              $(id).text(decimals > 0 ? to.toFixed(decimals) : to);
            },
          }
        );
      },
    });
  });
}

// skill 섹션
function skillAnimation({ topTo }) {
  gsap.fromTo(
    ".skill .inner .left .mask",
    { top: "25%" },
    {
      top: topTo,
      scrollTrigger: {
        trigger: ".skill",
        start: "-15% 0%",
        end: "40% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".skill .inner",
    { clipPath: "inset(0% 25%)", y: "30%" },
    {
      clipPath: "inset(0% 0%)",
      y: "0%",
      scrollTrigger: {
        trigger: ".skill",
        start: "-70% 0%",
        end: "-10% 0%",
        scrub: 1,
        onEnter() {
          $skillListItems.removeClass("active");
        },
      },
    }
  );

  gsap.fromTo(
    ".skill .inner .left .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".skill",
        start: "-60% 0%",
        end: "-15% 0%",
        scrub: 1,
      },
    }
  );
}

// resolution 섹션
function resolutionAnimation({ start, end }) {
  gsap.fromTo(
    ".resolution .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".resolution",
        start,
        end,
        scrub: 1,
        onLeave() {
          $skillListItems.removeClass("active");
        },
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
   history: hover 토글 + 마우스 추적 (769px 이상만)
-------------------------------------------------- */
if (window.matchMedia("(min-width: 769px)").matches) {
  $historyItems
    .on("mouseenter", function () {
      $(this).addClass("active");
    })
    .on("mouseleave", function () {
      $(this).removeClass("active");
    });

  (function () {
    let mouseX = 0,
      mouseY = 0;

    $(document).on("mousemove", (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    const SPEED = 0.2;

    function animate() {
      const currentX = parseFloat($historyImg.css("left"));
      const currentY = parseFloat($historyImg.css("top"));

      $historyImg.css({
        left: currentX + (mouseX - currentX) / SPEED,
        top: currentY + (mouseY - currentY) / SPEED,
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  })();
}

/* --------------------------------------------------
   skill 아코디언 토글 (breakpoint 무관)
-------------------------------------------------- */
$skillListItems.on("click", function () {
  $(this).toggleClass("active");
  $skillListItems.not(this).removeClass("active");
});

/* --------------------------------------------------
   breakpoint별 ScrollTrigger 애니메이션
-------------------------------------------------- */
mm.add("(min-width: 1280px)", () => {
  aboutAnimation({
    clipStart: "inset(10% 35%)",
    clipEnd: "inset(0% 0%)",
  });

  basicCountAnimation();

  basicAnimation();

  skillAnimation({ topTo: "61%" });

  resolutionAnimation({ start: "-80% 0%", end: "-30% 0%" });

  contactAnimation();

  return () => {};
});

mm.add("(min-width: 769px) and (max-width: 1279px)", () => {
  aboutAnimation({
    clipStart: "inset(20% 35%)",
    clipEnd: "inset(0% 0%)",
  });

  basicCountAnimation();

  basicAnimation();

  skillAnimation({ topTo: "66%" });

  resolutionAnimation({ start: "-80% 0%", end: "-30% 0%" });

  contactAnimation();

  return () => {};
});

mm.add("(max-width: 768px)", () => {

  basicCountAnimation2();
  
  return () => {};
});

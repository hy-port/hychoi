//index header logo detect
$(window).scroll(function () {
  var resolutionTop = $(".resolution").offset().top + 100;
  var top = resolutionTop + $(".resolution").outerHeight();
  var bottom = $(".ncs").offset().top - 100;

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

/* 레니스 + 스크롤트리거 */
const setVh = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
};
setVh();
window.addEventListener("resize", setVh);

// Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
  infinite: false,
  prevent: (node) => node.classList.contains("detail-list"),
});

gsap.ticker.add((time) => {
  lenis.raf(time * 600);
});
gsap.ticker.lagSmoothing(0);

lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";

const mm = gsap.matchMedia();

const boxes = gsap.utils.toArray(".box-wrapper .box");
const maskBox = gsap.utils.toArray(".box-wrapper .box .maskBox .innerBox");
const ncsList = document.querySelectorAll(".ncsList");

// =========================
// 공통 애니메이션 함수
// =========================
function galleryAnimation(options) {
  const {
    xPercent,
    maskFromX,
    maskToX,
    start = "35% 0%",
    end = "280% 0%",
    pin = true,
  } = options;

  // 가로 이동
  gsap.to(boxes, {
    xPercent,
    ease: "none",
    scrollTrigger: {
      trigger: ".gallery .inner",
      pinnedContainer: ".gallery .inner",
      start,
      end,
      scrub: 1,
    },
  });

  // mask 이동
  gsap.fromTo(
    maskBox,
    { x: maskFromX },
    {
      x: maskToX,
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        start,
        end,
        scrub: 1,
      },
    }
  );

  // 프로그레스바
  gsap.fromTo(
    ".gallery .progressbar .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        start,
        end,
        scrub: 1,
      },
    }
  );

  // 위/아래 등장
  gsap.fromTo(
    ".box:nth-child(odd)",
    { y: "-150%" },
    {
      y: "0%",
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
    ".box:nth-child(even)",
    { y: "150%" },
    {
      y: "0%",
      scrollTrigger: {
        trigger: ".gallery .inner",
        pinnedContainer: ".gallery .inner",
        start: "0% 0%",
        end: "25% 0%",
        scrub: 1,
      },
    }
  );

  // pin
  if (pin) {
    gsap.to(".gallery", {
      scrollTrigger: {
        trigger: ".gallery",
        start: "0% 0%",
        end,
        pin: true,
        scrub: 1,
      },
    });
  }
}

function resolutionAnimation(options = {}) {
  const { start = "-100% 0%", end = "-50% 0%" } = options;

  gsap.fromTo(
    ".resolution .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".resolution",
        pinnedContainer: ".resolution",
        start,
        end,
        scrub: 1,
      },
    }
  );
}

function workAnimation(config = {}) {
  const {
    innerClip = "inset(0% 25%)",
    innerTo = "inset(0% 0%)",

    innerYFrom = "30%",
    innerYTo = "0%",

    sectionStart = "-100% 0%",
    sectionEnd = "0% 0%",

    maskStart = "-60% 0%",
    maskEnd = "0% 0%",

    cylinderStart = "0% 0%",
    cylinderEnd = "100% 0%",

    textStart = "20% 0%",
    textEnd = "100% 0%",

    textYTo = "65%",
  } = config;

  // 1. 메인 인트로
  gsap.fromTo(
    ".work .inner",
    {
      clipPath: innerClip,
      y: innerYFrom,
    },
    {
      clipPath: innerTo,
      y: innerYTo,
      scrollTrigger: {
        trigger: ".work",
        start: sectionStart,
        end: sectionEnd,
        scrub: 1,
      },
    }
  );

  // 2. 섹션 타이틀
  gsap.fromTo(
    ".work .inner .sectionName .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".work",
        start: maskStart,
        end: maskEnd,
        scrub: 1,
      },
    }
  );

  // 3. cylinder 회전
  gsap.fromTo(
    ".work .inner .cylinder .container .container-box",
    { rotationX: -45 },
    {
      rotationX: 292.5,
      scrollTrigger: {
        trigger: ".work",
        start: cylinderStart,
        end: cylinderEnd,
        scrub: 1,
      },
    }
  );

  // 4. 텍스트 박스
  gsap.fromTo(
    ".work .inner .textBox",
    { y: "100%" },
    {
      y: textYTo,
      scrollTrigger: {
        trigger: ".work",
        start: textStart,
        end: textEnd,
        scrub: 1,
      },
    }
  );

  // 5. 텍스트 마스크
  gsap.fromTo(
    ".work .inner .textBox li .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".work",
        start: "30% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    }
  );

  // 6. pin
  gsap.to(".work", {
    scrollTrigger: {
      trigger: ".work",
      start: "0% 0%",
      end: "100% 0%",
      pin: true,
      scrub: 1,
    },
  });
}

mm.add("(min-width: 1201px)", () => {
  gsap.fromTo(
    ".about .inner .imgBox",
    { clipPath: "inset(10% 35%)", filter: "grayscale(0)" },
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
    ".about .inner .textBox",
    { y: "150%" },
    {
      y: "0%",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "35% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about .inner .textBox .mask .text",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "45% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about",
    {},
    {
      scrollTrigger: {
        trigger: ".about",
        start: "0% 0%",
        end: "100% 0%",
        pin: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about02 .inner ul li .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".about02",
        pinnedContainer: ".about02",
        start: "-200% 0%",
        end: "-100% 0%",
        scrub: 1,
      },
    }
  );

  galleryAnimation({
    xPercent: -1128,
    maskFromX: -150,
    maskToX: -350,
  });

  resolutionAnimation({
    start: "-100% 0%",
    end: "-50% 0%",
  });

  workAnimation({
    innerClip: "inset(0% 25%)",
    innerYFrom: "30%",
    textYTo: "65%",
  });

  ncsList.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "-100% 0%",
      end: "0% 0%",
      toggleClass: "active",
    });
  });

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

  return () => {};
});

mm.add("(min-width: 769px) and (max-width: 1200px)", () => {
  gsap.fromTo(
    ".about .inner .imgBox",
    { clipPath: "inset(20% 35%)", filter: "grayscale(0)" },
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
    ".about .inner .textBox",
    { y: "150%" },
    {
      y: "0%",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "35% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about .inner .textBox .mask .text",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".about .inner",
        pinnedContainer: ".about .inner",
        start: "45% 0%",
        end: "100% 0%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about",
    {},
    {
      scrollTrigger: {
        trigger: ".about",
        start: "0% 0%",
        end: "100% 0%",
        pin: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about02 .inner ul li .mask span",
    { backgroundSize: "0% 100%" },
    {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".about02",
        pinnedContainer: ".about02",
        start: "-200% 0%",
        end: "-100% 0%",
        scrub: 1,
      },
    }
  );

  galleryAnimation({
    xPercent: -1382,
    maskFromX: -50,
    maskToX: -200,
  });

  resolutionAnimation({
    start: "-100% 0%",
    end: "-50% 0%",
  });

  workAnimation({
    innerClip: "inset(0% 25%)",
    innerYFrom: "30%",
    textYTo: "65%",
  });

  ncsList.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "-100% 0%",
      end: "0% 0%",
      toggleClass: "active",
    });
  });

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

  return () => {};
});

mm.add("(max-width: 768px)", () => {
  return () => {};
});
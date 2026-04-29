//splitting
$(function () {
  Splitting();
});

//contactBtn
$(function () {
  $(".contactBtn").click(function () {
    var text = "gusdn1555@nate.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(function () {
          swal("Great!", "이메일 주소가 복사되었습니다.", "success");
        })
        .catch(function (error) {
          console.error("이메일 주소가 복사되지 않았습니다.:", error);
        });
    } else {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      swal("Great!", "이메일 주소가 복사되었습니다.", "success");
    }
  });
});

let parallaxInstances = [];
let cursorInstance = null;

const mq = window.matchMedia("(min-width: 769px)");

function initParallax() {
  if (parallaxInstances.length) return;

  const targets = [
    { el: ".aboutImgBox", scale: 1.2, delay: 0.6 },
    { el: ".teamImg", scale: 1.2, delay: 0.5 },
  ];

  targets.forEach((item) => {
    const elements = document.querySelectorAll(item.el);

    if (elements.length) {
      const instance = new simpleParallax(elements, {
        scale: item.scale,
        delay: item.delay,
        transition: "cubic-bezier(0,0,0,1)",
      });

      parallaxInstances.push(instance);
    }
  });
}

function destroyParallax() {
  parallaxInstances.forEach((inst) => {
    inst.destroy?.();
  });
  parallaxInstances = [];
}

function initCursor() {
  if (cursorInstance) return;

  cursorInstance = curDot({
    easing: 5,
    diameter: 40,
    zIndex: 100,
    borderWidth: 2,
  });

  cursorInstance.over(".clickable", {
    scale: "1.4",
  });
}

function destroyCursor() {
  if (cursorInstance) {
    cursorInstance.destroy?.();
    cursorInstance = null;
  }
}

// init
$(function () {
  if (mq.matches) {
    initParallax();
    initCursor();
  }
});

// resize 대응 (debounce)
let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    if (mq.matches) {
      initParallax();
      initCursor();
    } else {
      destroyParallax();
      destroyCursor();
    }
  }, 150);
});
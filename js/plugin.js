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

let parallaxInstance = null;
let cursorInstance = null;

const mq = window.matchMedia("(min-width: 769px)");

function initEffects() {
  const image = document.getElementsByClassName("aboutImgBox");

  // simpleParallax init
  if (image.length && !parallaxInstance) {
    parallaxInstance = new simpleParallax(image, {
      scale: 1.2,
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)",
    });
  }

  // cursor init
  if (!cursorInstance && typeof curDot === "function") {
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
}

function destroyEffects() {
  // simpleParallax destroy
  if (parallaxInstance) {
    parallaxInstance.destroy?.();
    parallaxInstance = null;
  }

  // cursor destroy (라이브러리 지원 여부 케이스)
  if (cursorInstance) {
    cursorInstance.destroy?.(); // 지원하면 제거
    cursorInstance = null;
  }
}

// 초기 실행
$(function () {
  if (mq.matches) {
    initEffects();
  }
});

// 리사이즈 대응 (디바운스)
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    if (mq.matches) {
      initEffects();
    } else {
      destroyEffects();
    }
  }, 150);
});
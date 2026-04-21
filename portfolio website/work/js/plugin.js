//splitting
$(function () {
   Splitting();
});

//simpleParallax
$(function () {
   var image = document.getElementsByClassName('aboutImgBox');
   new simpleParallax(image, {
      scale: 1.2,
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
   })
});

// mouse cursor
const cursor = curDot({
   easing: 5,
   diameter: 40,
   zIndex: 100,
   borderWidth: 2
});

cursor.over(".clickable", {
   scale: '1.4'
});

//simpleParallax
$(function () {
   var image2 = document.getElementsByClassName('teamImg');
   new simpleParallax(image2, {
      scale: 1.2,
      delay: .5,
      transition: 'cubic-bezier(0,0,0,1)'
   })
});

//contactBtn
$(function () {
   $('.contactBtn').click(function () {
      var text = "gusdn1555@nate.com";
      if (navigator.clipboard && navigator.clipboard.writeText) {
         navigator.clipboard.writeText(text)
            .then(function () {
               swal("Great!", "이메일 주소가 복사되었습니다.", "success")
            })
            .catch(function (error) {
               console.error('이메일 주소가 복사되지 않았습니다.:', error);
            });
      } else {
         var textarea = document.createElement('textarea');
         textarea.value = text;
         document.body.appendChild(textarea);
         textarea.select();
         document.execCommand('copy');
         document.body.removeChild(textarea);
         swal("Great!", "이메일 주소가 복사되었습니다.", "success");
      }
   });
});
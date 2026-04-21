//splitting
$(function () {
   Splitting();
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
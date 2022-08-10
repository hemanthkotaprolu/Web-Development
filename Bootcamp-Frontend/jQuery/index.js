// $("h1").click(function () {
//   console.log($("h1").css("font-size","10rem"));
// });
$(document).keypress(function (event) {
  $("h1").text(event.key);
});

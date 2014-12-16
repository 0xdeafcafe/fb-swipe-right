// document.onload = function() {
// 	console.log("extention loaded");
// 	setLikes();
// };
// document.addEventListener("DOMContentLoaded", function(event) {
// 	console.log("DOMContentLoaded");
// 	setLikes();
// });
// document.addEventListener("load", function(event) {
// 	console.log("load");
// 	setLikes();
// });

setInterval(function() {
	var likes = document.getElementsByClassName("UFILikeLink");
	for(var i = 0; i < likes.length; i++) {
		if (likes[i].getAttribute("data-ft") == "{\"tn\":\"?\"}") {
			// Unlike
			likes[i].textContent = "Swipe Left";
			likes[i].setAttribute("title", "Swipe left on this content");
		}
		else if (likes[i].getAttribute("data-ft") == "{\"tn\":\">\"}") {
			// Like
			likes[i].textContent = "Swipe Right";
			likes[i].setAttribute("title", "Swipe right on this content");
		}
	}
}, 100);

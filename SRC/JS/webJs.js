var webSiteHeight = document.body.clientHeight;
var windowsHeight = window.innerHeight;
var shownHeight = webSiteHeight - windowsHeight;

console.log("Site height is: ", webSiteHeight);
console.log("windows Height is: ", windowsHeight);
console.log("shown Height is: ", shownHeight);




window.addEventListener("scroll", function() {
    var pageY = window.pageYOffset;
    console.clear();
    console.log("Site height is: ", webSiteHeight);
    console.log("windows Height is: ", windowsHeight);
    console.log("shown Height is: ", shownHeight);
    console.log("pageY: ", pageY);

})
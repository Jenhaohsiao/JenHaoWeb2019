var webSiteHeight = document.documentElement.clientHeight
var windowsHeight = window.innerHeight;
var shownHeight = webSiteHeight - windowsHeight;

console.log("Site height is: ", webSiteHeight);
console.log("windows Height is: ", windowsHeight);
console.log("shown Height is: ", shownHeight);




window.addEventListener("scroll", function () {
    var pageY = window.pageYOffset;
    console.clear();
    console.log("Site height is: ", webSiteHeight);
    console.log("windows Height is: ", windowsHeight);
    console.log("shown Height is: ", shownHeight);
    console.log("pageY: ", pageY);

})


function scrollToPoint(_elementID) {


    var elementPoint = document.getElementById(_elementID).offsetTop;
    var contectSection = document.getElementById('contect-section');
    console.log("elementPoint:", elementPoint);

    contectSection.scroll({
        top: elementPoint,
        behavior: "smooth"
    });
}
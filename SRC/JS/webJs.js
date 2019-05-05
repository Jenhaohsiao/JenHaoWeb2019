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

window.addEventListener = function () {
    setWidthForScrollBarHide()
};

window.onresize = function () {

    setWidthForScrollBarHide();

}

function setWidthForScrollBarHide() {

    var scrollBarContainer = document.getElementById('scroll-bar-container');
    var mainContainer = document.getElementById('content-container');


    var scrollBarContainerWidth = scrollBarContainer.offsetWidth;
    var mainContainerWidth = mainContainer.offsetWidth


    var _width = "width:" + (scrollBarContainerWidth + 15) + "px"

    mainContainer.setAttribute("style", _width.toString());

    mainContainer.style.width = mainContainerWidth;

}



function scrollToPoint(_elementID) {


    var elementPoint = document.getElementById(_elementID).offsetTop;
    var contectSection = document.getElementById('contect-section');
    console.log("elementPoint:", elementPoint);

    // contectSection.scroll({
    //     top: elementPoint,
    //     behavior: "smooth"
    // }, 2000);

    // contectSection.scrollTop = elementPoint;
}
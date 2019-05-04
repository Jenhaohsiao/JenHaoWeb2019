var webSiteHeight = document.body.clientHeight;
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


//=========================== scrollspy

$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#nav-bar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
var webSiteHeight = document.documentElement.clientHeight
var windowsHeight = window.innerHeight;
var shownHeight = webSiteHeight - windowsHeight;

console.log("Site height is: ", webSiteHeight);
console.log("windows Height is: ", windowsHeight);
console.log("shown Height is: ", shownHeight);




function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

var contectSection = document.getElementById("contect-section");
console.log("contectSection:", contectSection.offsetTop)

var heroSection = document.getElementById("hero-section");
var heroSectionOffset = heroSection.offsetTop
console.log("heroSectionOffset:", heroSectionOffset)

var projectSection = document.getElementById("projects-section");
var projectSectionOffset = projectSection.offsetTop
console.log("projectSectionOffset:", projectSectionOffset)


var skillsSection = document.getElementById("skills-section");
var skillsSectionOffset = skillsSection.offsetTop
console.log("skillsSectionOffset:", skillsSectionOffset)


var experienceSection = document.getElementById("experience-section");
var experienceSectionOffset = experienceSection.offsetTop
console.log("experienceSectionOffset:", experienceSectionOffset)


var allSections = [heroSection, projectSection, skillsSection, experienceSection]

function getSection(_position) {

    for (var i = 0; i < allSections.length; i++) {
        var windowsHeight10 = windowsHeight * 0.5

        if (windowsHeight10 <= 100) {
            windowsHeight10 = 100
        }

        var windowsHeight50 = windowsHeight * 0.5
        if (windowsHeight10 <= 500) {
            windowsHeight10 = 500
        }

        if ((_position <= allSections[i].offsetTop + windowsHeight50) && (_position >= allSections[i].offsetTop - windowsHeight10)) {
            return allSections[i].offsetTop
        }
    }
}

var currentSectionOffect = 0

function scrollCheck() {

    var _position = getSection(contectSection.scrollTop)

    if (currentSectionOffect !== _position) {
        currentSectionOffect = _position
        console.log("currentSectionOffect:", currentSectionOffect)



        switch (currentSectionOffect) {
            case heroSectionOffset:
                console.log("switch heroSectionOffset")
                addAnimation(heroSection, 'fadeIn');
                break;
            case projectSectionOffset:
                console.log("switch projectSectionOffset")
                addAnimation(projectSection, 'fadeIn');
                break;
            case skillsSectionOffset:
                console.log("switch skillsSectionOffset")
                addAnimation(skillsSection, 'fadeIn');
                break;
            case experienceSectionOffset:
                console.log("switch experienceSection")

                addAnimation(experienceSection, 'fadeIn');
                break;
            default:
                return;
        }
    }

}



function addAnimation(element, animation) {

    allSections = allSections.map(function (_section) {
        var _isHas = hasClass(_section, 'hidden');
        if (!_isHas) {
            _section.classList.add('hidden');
        }
        return _section
    })

    if (!hasClass(element, animation)) {
        element.classList.remove('hidden');
        element.classList.add(animation);
    }

    window.setTimeout(function () {
        element.classList.remove(animation)
    }, 1000);


};
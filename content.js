document.getElementById('consentVote').onclick = function () { 
    roddel();
};

roddel();

document.getElementById('RingControlLeft').onclick = function () { 
    roddel();
};

document.getElementById('RingControlRight').onclick = function () { 
    roddel();
};

function roddel() {
    document.querySelectorAll('.ring__cards .card__title').forEach(function (title) {
        title.innerHTML = "Roddelpraat"
    });
    document.querySelectorAll('.ring__cards .card__sub-title').forEach(function (subtitle) {
        subtitle.innerHTML = ""
    });
    document.querySelectorAll('.ring__cards .card__img > img').forEach(function (image) {
        image.src = "https://scontent-ams4-1.xx.fbcdn.net/v/t1.6435-9/182963160_165681088892504_4403830107495410915_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=GeJ7qNcKaFcAX-Ugbnh&_nc_ht=scontent-ams4-1.xx&oh=8ec266550a6ca6eaf298b02b70a1a411&oe=6142408B"
    });
    document.querySelectorAll('.ring__cards .clickable').forEach(function (link) {
        link.dataset.id = "\'Roddelpraat\'"
        link.dataset.name = "\'Roddelpraat\'"

        link.onclick = function () {
            roddel();
        }
    });
}

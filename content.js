var observer = new MutationObserver( function() { 
    const imgUrl = "https://scontent-ams4-1.xx.fbcdn.net/v/t1.6435-9/182963160_165681088892504_4403830107495410915_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=GeJ7qNcKaFcAX-Ugbnh&_nc_ht=scontent-ams4-1.xx&oh=8ec266550a6ca6eaf298b02b70a1a411&oe=6142408B"
    roddel(imgUrl);

    if (document.getElementById('electionTitle').innerHTML == 'Overzicht') {
        results(imgUrl);
    }
})

observer.observe(document.getElementById('participantList'), { attributes: true, childList: true, attributeOldValue: true })
function roddel(imgUrl) {
    if (document.getElementById('electionTitle').innerHTML != 'Televizier-Ster Online-Videoserie') {
        return;
    }

    document.querySelectorAll('.ring__cards .card__title')[0].innerHTML = "RoddelPraat"
    document.querySelectorAll('.ring__cards .card__sub-title')[0].innerHTML = "Dennis Schouten & Jan Roos"
    
    const image = document.querySelectorAll('.ring__cards .card__img > img')[0];
    image.src = imgUrl
    
    const card = document.querySelectorAll('.ring__cards .clickable')[0];
    card.dataset.id = "\'RoddelPraat\'"
    card.dataset.name = "\'RoddelPraat\'"
    card.onclick = function () {
        roddel(imgUrl);
    }
}

function results(imgUrl) {
    document.querySelectorAll('.card__sub-title')[5].innerHTML = "Dennis Schouten & Jan Roos"
    document.querySelectorAll('.voteresult > .ring__vote-row--image > img')[5].src = imgUrl
}

var UIModule = (function () {

    function createShowCards(arr) {
        arr.forEach(function (el, i) {
            $('#shows').append(`<div class='showCard'  key=${el.id}>
          <a class="toInfoPage" href='infoPage.html' style="display:block">
          <img src=${el.img.medium} />
          <p>${el.name}</p>
          </a>
          </div>`)
        })
        $('.toInfoPage').css({
            'text-decoration': 'none'
        })
    }

    function setSessionStorage() {
        $('.showCard').on('click', function () {
            sessionStorage.setItem('id', $(this).attr('key'))
        })
        $('.searchedResults').on('click', function () {
            sessionStorage.setItem('id', $(this).attr('key'))
        })
    }

    function returnToShowPage() {
        $('.returnToShowPage').on('click mouseover', function (e) {
            $(this).attr('href', 'index.html')
            $(this).css({
                'cursor': 'pointer',
                'color': 'white',
                'text-decoration': 'none'
            })
        })
    }

    function serachInputDisplayLinks(data) {
        $('.searchShows').on('keyup', function () {
            var value = $(this).val()
            // console.log(value)
            var filteredArr = data.filter(function (el) {
                return el.name.toLowerCase().indexOf(value.toLowerCase()) != -1
            })
            // console.log(filteredArr)
            if (filteredArr.length == 0) {
                $('.searchedResults').remove()
            }
            if ($(this).val() == '') {
                $('.searchedResults').remove()
            }
            if ($(this).val() != '') {
                $('.searchedResults').remove()
                filteredArr.slice(0, 10).forEach(function (el, i) {
                    $('.searchedResultsWrapper').append(`<div class="searchedResults" key="${el.id}" >
                    <a class="searchedResultsToInfoPage" href="infoPage.html">
                    ${el.name}
                    </a>
                    </div>`)
                })
            }
            setSessionStorage()
        })
        $(document).on('click',function(event) {
            if(event.target.matches('.searchedResults')){
                $('.searchedResults').show()
            }else{
                $('.searchedResults').hide()
            }
        })
    }

    function searchInputDisplayShowCards(data) {
        $('.searchShows').on('keyup', function () {
            var value = $(this).val()
            console.log(value)
            var filteredArr = data.filter(function (el) {
                return el.name.toLowerCase().indexOf(value.toLowerCase()) != -1
            })
            console.log(filteredArr)
            if (filteredArr.length == 0) {
                $('.showCard').remove()
            }
            if ($(this).val() == '') {
                $('.showCard').remove()
                data.filter(function (el) {
                    return el.rating.average >= 8.5
                }).forEach(function (el) {
                    $('#shows').append(`<div class='showCard' key=${el.id}>
                <a  class="toInfoPage" href='infoPage.html'>
                <img src=${el.image.medium} />
                <p >${el.name}</p>
                </a>
                </div>`)
                })
                $('.toInfoPage').css({
                    'text-decoration': 'none'
                })
            }
            if ($(this).val() != '') {
                $('.showCard').remove()
                filteredArr.forEach(function (el) {
                    $('#shows').append(`<div class='showCard' key=${el.id}>
                <a class="toInfoPage" href='infoPage.html'>
                <img src=${el.image.medium} />
                <p>${el.name}</p>
                </a>
                </div>`)
                })
                $('.toInfoPage').css({
                    'text-decoration': 'none'
                })
            }
            setSessionStorage() //zbog sessionStorage jer kada je u mainModule  f-ja ne dohvata novo napravljene divove sa $('.showCard'), ovako dohvata nove divove
        })
    }

    function createNameOfShow(obj) {
        $('.header').after(`<h1 style="text-align:center;">${obj.name}</h1>`)
    }

    function createImageOfShow(obj) {
        $('#printShow').append(`<img src=${obj.image.original}>`)
    }

    function createSeasonsOfShow(arr) {
        $('#printShow').append(`<div><h3 id="seasons">Seasons(${arr.length})</h3><ul id="listSeasons" "></ul></div>`)
    }

    function createListSeasons(arr) {
        arr.forEach(function (el) {
            $('#listSeasons').append(`<li>${el.premiereDate} - ${el.endDate}</li>`)
        })
    }

    function createCastsOfShow(arr) {
        $('#printShow').append(`<div><h3 id="casts">Casts</h3><ul id="listCasts"></ul></di>`)
    }

    function createListCasts(arr) {
        arr.slice(0, 10).forEach(function (el, i) {
            $('#listCasts').append(`<li>${el.person.name}</li>`)
        })
    }

    function createSummary(obj) {
        $('#printShow').append('<h3 id="description">Description</h3>')
        $('#printShow').append($('<p>').html(obj.summary))
    }
    return {
        createShowCards: createShowCards,
        setSessionStorage: setSessionStorage,
        returnToShowPage: returnToShowPage,
        serachInputDisplayLinks: serachInputDisplayLinks,
        searchInputDisplayShowCards: searchInputDisplayShowCards,
        createNameOfShow: createNameOfShow,
        createImageOfShow: createImageOfShow,
        createSeasonsOfShow: createSeasonsOfShow,
        createListSeasons: createListSeasons,
        createCastsOfShow: createCastsOfShow,
        createListCasts: createListCasts,
        createSummary: createSummary,
    }
})()
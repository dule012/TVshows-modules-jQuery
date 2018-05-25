var dataModule = (function () {
    function SingleShow(id, img, name, summary) {
        this.id = id
        this.img = img
        this.name = name
        this.summary = summary
    }

     function createAllShows(arr) {
        return arr.map(function (el) {
            return new SingleShow(el.id, el.image, el.name, el.summary)
        })
    }

    function Casts(name) {
        this.name = name
    }

    function createAllCasts(arr) {
        return arr.map(function (el) {
            return new Casts(el.person.name)
        })
    }

    function Seasons(premiereDate, endDate) {
        this.premiereDate = premiereDate
        this.endDate = endDate
    }

    function createAllSeasons(arr) {
        return arr.map(function (el) {
            return new Seasons(el.premiereDate, el.endDate)
        })
    }
    return {
        createAllShows: createAllShows,
        createAllCasts: createAllCasts,
        createAllSeasons: createAllSeasons
    }
})()
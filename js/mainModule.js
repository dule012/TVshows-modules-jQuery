var mainModule = (function (dataModule, UIModule) {
    $(function () {
        var get = $.get('https://api.tvmaze.com/shows')
        get.done(function (data) {
            console.log(data)
            var filterByRating = data.filter(function (el) {
                return el.rating.average >= 8.5
            })
            UIModule.createShowCards(dataModule.createAllShows(filterByRating))
            UIModule.serachInputDisplayLinks(data)
            UIModule.searchInputDisplayShowCards(data)
            UIModule.setSessionStorage()
        })
        UIModule.returnToShowPage()
        
    })

})(dataModule, UIModule)
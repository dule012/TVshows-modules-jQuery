var infoPageModule = (function () {
    $(function () {
        Promise.all([$.get('https://api.tvmaze.com/shows'),
            $.get('https://api.tvmaze.com/shows/' + sessionStorage.getItem('id')),
            $.get('https://api.tvmaze.com/shows/' + sessionStorage.getItem('id') + '/seasons'),
            $.get('https://api.tvmaze.com/shows/' + sessionStorage.getItem('id') + '/cast')
        ]).then(function (arr) {
            UIModule.serachInputDisplayLinks(arr[0])
            UIModule.setSessionStorage()
            UIModule.createNameOfShow(arr[1])
            UIModule.createImageOfShow(arr[1])
            UIModule.createSummary(arr[1])
            UIModule.createSeasonsOfShow(arr[2])
            UIModule.createListSeasons(arr[2])
            UIModule.createCastsOfShow(arr[3])
            UIModule.createListCasts(arr[3])
        })
        UIModule.returnToShowPage()

        //Ovako moze bez promise
        // var getShows = $.get('http://api.tvmaze.com/shows')
        // getShows.done(function (data) {
        //     UIModule.serachInputDisplayLinks(data)
        //     UIModule.setSessionStorage()
        // })
        // var getShow = $.get('http://api.tvmaze.com/shows/' + sessionStorage.getItem('id'))
        // getShow.done(function (data) {
        //     UIModule.createNameOfShow(data)
        //     UIModule.createImageOfShow(data)
        //     UIModule.createSummary(data)
        // })
        // var getSeasons = $.get('http://api.tvmaze.com/shows/' + sessionStorage.getItem('id') + '/seasons')
        // getSeasons.done(function (data) {
        //     UIModule.createSeasonsOfShow(data)
        //     UIModule.createListSeasons(data)
        // })
        // var getCasts = $.get('http://api.tvmaze.com/shows/' + sessionStorage.getItem('id') + '/cast')
        // getCasts.done(function (data) {
        //     UIModule.createCastsOfShow(data)
        //     UIModule.createListCasts(data)
        // })
    })
})(dataModule, UIModule)
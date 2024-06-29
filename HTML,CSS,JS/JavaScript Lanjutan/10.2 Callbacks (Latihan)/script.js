$(".search-btn").on("click", function() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=9110497b&s=" + $(".input-keyword").val(),
        success: results => {
            let cards = ``
            results.Search.forEach(m => {
                cards += /* html */ `<div class="col-md-3 my-5">
                                        <div class="card">
                                        <img src="${m.Poster}" class="card-img-top">
                                        <div class="card-body">
                                            <h5 class="card-title">${m.Title}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                            <a class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                                        </div>
                                        </div>
                                    </div>`
            })
            $(".movie-container").html(cards)
    
            $(".modal-detail-btn").on("click", function() {
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=9110497b&i=" + $(this).data("imdbid"),
                    success: m => {
                        const movieDetail = /* html */ `<div class="container-fluid">
                                                            <div class="col-md-2">
                                                            <img src="${m.Poster}" class="img-fluid">
                                                            </div>
                                                            <div class="col-md">
                                                            <ul class="list-group">
                                                                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                                                <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                                                                <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                                                                <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                                                                <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                                                            </ul>
                                                            </div>
                                                        </div>`
                        $(".modal-body").html(movieDetail)
                    },
                    error: (e) => {
                        console.log(e)
                    }
                })
            })
        },
        error: (e) => {
            console.log(e)
        }
    })

})


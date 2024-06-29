// $(".search-btn").on("click", function() {
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=9110497b&s=" + $(".input-keyword").val(),
//         success: results => {
//             let cards = ``
//             results.Search.forEach(m => {
//                 cards += showCards(m)
//             })
//             $(".movie-container").html(cards)
    
//             $(".modal-detail-btn").on("click", function() {
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=9110497b&i=" + $(this).data("imdbid"),
//                     success: m => {
//                         const movieDetail = showDetails(m)
//                         $(".modal-body").html(movieDetail)
//                     },
//                     error: (e) => {
//                         console.log(e)
//                     }
//                 })
//             })
//         },
//         error: (e) => {
//             console.log(e)
//         }
//     })

// })

// const search = document.querySelector(".search-btn")
// const input = document.querySelector(".input-keyword")
// const mvContainer = document.querySelector(".movie-container")

// search.addEventListener("click", function() {
//     fetch("http://www.omdbapi.com/?apikey=9110497b&s=" + input.value)
//         .then(response => response.json())
//         .then(response => {
//             let cards = ``
//             response.Search.forEach(m => {
//                 cards += showCards(m)
//             })
//             mvContainer.innerHTML = cards

//             const modalBtn = document.querySelectorAll(".modal-detail-btn")
//             modalBtn.forEach(b => {
//                 b.addEventListener("click", function() {
//                     const id = this.dataset.imdbid
//                     fetch("http://www.omdbapi.com/?apikey=9110497b&i=" + id)
//                         .then(response => response.json())
//                         .then(m => {
//                             let movieDetail = showDetails(m)
//                             const modalBody = document.querySelector(".modal-body")
//                             modalBody.innerHTML = movieDetail
//                         })
//                 })
//             })
//         })
//         .catch(response => console.log(response))
// })

const search = document.querySelector(".search-btn")
const input = document.querySelector(".input-keyword")


search.addEventListener("click", async function() {
    const movies = await getMovies(input.value)
    await updateUI(movies)
})


function getMovies(keyword) {
    return fetch("http://www.omdbapi.com/?apikey=9110497b&s=" + keyword)
        .then(response => response.json())
        .then(response => response.Search)
}

function updateUI(data) {
    let cards = ``
    const mvContainer = document.querySelector(".movie-container")
    data.forEach(m => {
        cards += showCards(m)
    })
    mvContainer.innerHTML = cards

    const modalBtn = document.querySelectorAll(".modal-detail-btn")
    const modalBody = document.querySelector(".modal-body")
    modalBtn.forEach(b => {
        b.addEventListener("click", function() {
            const id = this.dataset.imdbid
            fetch("http://www.omdbapi.com/?apikey=9110497b&i=" + id)
                .then(response => response.json())
                .then(response => {
                    let detail = showDetails(response)
                    modalBody.innerHTML = detail
                })
        })
    })
}

function showCards(m) {
    return /* html */ `<div class="col-md-3 my-5">
                            <div class="card">
                            <img src="${m.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <a class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                            </div>
                            </div>
                        </div>`
}

function showDetails(m) {
    return /* html */ `<div class="container-fluid">
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
}
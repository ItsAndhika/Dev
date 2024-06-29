const keyword = document.getElementById('search-input')
const button = document.getElementById('search-button')
const content = document.getElementById('movie-list')

function loadMovie() {
    content.innerHTML = ''
    fetch(`http://www.omdbapi.com/?apikey=9110497b&s=${keyword.value}`)
        .then(response => response.json())
        .then(response => {
            if(response.Response == "True") {
                let card = ``
                response.Search.forEach(m => {
                    card += /* html */ `<div class="col-md-4 my-3">
                                            <div class="card" style="width: 18rem;" class="m-3">
                                                <img src="${m.Poster}" class="card-img-top" alt="Movie Image">
                                                <div class="card-body">
                                                    <h5 class="card-title">${m.Title}</h5>
                                                    <p class="card-text">${m.Year}</p>
                                                    <a href="#" class="btn btn-primary details" data-bs-toggle="modal"
			                                        data-bs-target="#exampleModal" data-id="${m.imdbID}">Details</a>
                                                </div>
                                            </div>
                                        </div>`
                });
                content.innerHTML = card
                keyword.value = ''
                const detailBtn = document.querySelectorAll('.details')
                detailBtn.forEach(b => {
                    b.addEventListener('click', function() {
                        const id = this.dataset.id
                        console.log(id)
                    })
                })
            } else {
                content.innerHTML = `<h1 class="text-center text-danger">Movie not found!</h1>`
            }
        })
}

button.addEventListener('click', function() {
    loadMovie()
})

keyword.addEventListener('keyup', function(e) {
    if(e.keyCode == 13) {
        loadMovie()
    }
})
function showAll() {
    $.getJSON("../pizza.json", data => {
        let menu = data.menu
        $.each(menu, function (i, data) { 
             $('#menu-list').append(/* html */`<div class="col-md-4">
                                                    <div class="card shadow" style="width: 18rem">
                                                        <img src="img/menu/${data.gambar}" alt="" />
                                                        <div class="card-body">
                                                            <h5 class="card-title">${data.nama}</h5>
                                                            <h6 class="card-title">Rp.${data.harga},00</h6>
                                                            <p class="card-text">${data.deskripsi}</p>
                                                            <a href="" class="btn btn-primary">Order Now!</a>
                                                        </div>
                                                    </div>
                                                </div>`)
        });
    })
}

showAll()


$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active')
    $(this).addClass('active')

    let category = $(this).html()
    $('h1').html(category)

    if(category == 'All Menu') {
        showAll()
        return
    }

    $.getJSON('../pizza.json', function(data) {
        let menu = data.menu
        let content = ``
        $.each(menu, function (i, data) { 
             if(data.kategori == category.toLowerCase()) {
                content += /* html */ `<div class="col-md-4">
                	                        	<div class="card shadow" style="width: 18rem">
                	                        		<img src="img/menu/${data.gambar}" alt="" />
                	                        		<div class="card-body">
                	                        			<h5 class="card-title">${data.nama}</h5>
                                                        <h6 class="card-title">Rp.${data.harga},00</h6>
                	                        			<p class="card-text">${data.deskripsi}</p>
                	                        			<a href="" class="btn btn-primary">Order Now!</a>
                	                        		</div>
                	                        	</div>
                	                        </div>`
             }
        });
        $('#menu-list').html(content)
    })
})
country = ["India", "United States", "United Kingdom"]
country_codes = ["ind", "us", "gb"]

code = "ind"

for (i = 0; i < country.length; i++) {
    $(".dropdown-menu").append(`<li><a id='${country_codes[i]}' class='dropdown-item' href='#'>${country[i]}</a></li>`)
    console.log(country[i])
}

$(`.dropdown-item`).click(function () {
    code = $(this).attr('id')
    loaddata()
})

function loaddata() {
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=5e61b7561e794a1d9e169219bf23c6db",
        type: 'GET',
        success: function (res) {
            console.log(res);
        },
        error: function(res){
            console.log(res)
        }
    })
}

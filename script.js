$(document).ready(function(){
    $(".search-bar button").click(function(){
        alert("Búsqueda en desarrollo...");
    });

    $(".carousel-item img, .carousel-item p").each(function(){
        let link = $(this).closest("a").attr("href");
        if (link) {
            $(this).click(function() {
                window.location.href = link;
            });
        }
    });

    $('.carousel').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });
});

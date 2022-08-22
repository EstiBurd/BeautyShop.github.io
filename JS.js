$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});
// $(document).ready(function() {
//     $(".f").hide();
//     $(".img").hover(function() {
//         $(this).parent().find(".f").slideDown();
//     })
// });

// Scrolling Effect
$(document).ready(function() {
    $(".btn").click(function() {
        alert("הזמנתך בוצעה!")

    })
})
$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})
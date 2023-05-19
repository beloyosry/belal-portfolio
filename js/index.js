$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $("#navbar").addClass("noTransparent");
        $(".lang-list").css({ color: "black" });
        $(".dropdown-item").css({ color: "black" });
    } else {
        $("#navbar").removeClass("noTransparent");
        $(".lang-list").css({ color: "white" });
        $(".dropdown-item").css({ color: "black" });
    }
});
$(document).ready(function () {
    $(".circle")
        .circleProgress({
            startAngle: -Math.PI / 2,
            fill: "#0575e6",
        })
        .on("circle-animation-progress", function (event, progress, stepValue) {
            $(this)
                .find("span")
                .html(Math.round(stepValue * 100) + "%");
        });
    $(function () {
        $("#contactForm").validate();
    });
});
document.getElementById("date").innerHTML = new Date().getFullYear();

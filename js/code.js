$(document).ready(function () {

    // init animations
    new WOW().init();

    // navbar button
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });


    // tooltip init
    $('[data-toggle="tooltip"]').tooltip()

    loadData();
});


function loadData() {
    const info = {
        name: "Lautaro Cepeda",
        email: "lautac29@gmail.com",
        dni: "39236384",
        birthday: "08/06/1995",
        city: "Argentina - Mendoza",
        occupation: "Estudiante",
        description:
            "Waiting for the sun",
        social: {
            linkedin: "lautarocrodriguez",
            github: "lautarocepeda"
        }
    }

    $("#name").html(info.name);
    $("#occupation").html(info.occupation);
    $("#description").html(info.description);

    /* Social Links */
    $("#linkedin").attr("href", "http://www.linkedin.com/in/" + info.social.linkedin);
    $("#github").attr("href", "http://github.com/" + info.social.github);
}

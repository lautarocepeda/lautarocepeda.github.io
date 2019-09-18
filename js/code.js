$(document).ready(function () 
{

    // init animations
    new WOW().init();

    // navbar button
    $('.first-button').on('click', function () 
    {

        $('.animated-icon1').toggleClass('open');
    });

    $('.second-button').on('click', function () 
    {

        $('.animated-icon2').toggleClass('open');
    });

    $('.third-button').on('click', function () 
    {

        $('.animated-icon3').toggleClass('open');
    });

    $(".copyElement").on('click', function(e)
    {
        const copy = new String(e.currentTarget.innerText);

        const aux = document.createElement("input");
        aux.setAttribute('value', copy.toLowerCase());
        document.body.appendChild(aux);
        aux.select();

        try
        {
            document.execCommand('copy');
        }
        catch(e)
        {
            toastr.error("Ocurrió un error! :(");
            return e;
        } 

        document.body.removeChild(aux);

        toastr.success(copy, "¡ Copiado !");
    })




    // tooltip init
    $('[data-toggle="tooltip"]').tooltip()

    loadData();
});

function copy(e)
{

}



function loadData() 
{
    const info = 
    {
        name: "Lautaro Cepeda",
        email: "lautac29@gmail.com",
        dni: "39.236.384",
        birthday: "8 Junio 1995",
        phone: "+54 9 261 680 2146",
        city: "Argentina - Mendoza",
        occupation: "Estudiante",
        description:
            "Waiting for the sun",
        social: 
        {
            linkedin: "lautarocrodriguez",
            github: "lautarocepeda"
        }
    }

    $("#name").html(info.name);
    $("#occupation").html(info.occupation);
    $("#description").html(info.description);
    $("#email").html(info.email);
    $("#phone").html(info.phone);
    $("#dni").html(info.dni);
    $("#birthday").html(info.birthday);
    $("#city").html(info.city);

    /* Social Links */
    $("#linkedin").attr("href", "http://www.linkedin.com/in/" + info.social.linkedin);
    $("#github").attr("href", "http://github.com/" + info.social.github);
}

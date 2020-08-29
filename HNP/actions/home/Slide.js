document.addEventListener('DOMContentLoaded', function () {
    let data = [
        {
            img: "https://www.hnp.ro/wp-content/uploads/2020/08/W_T_Turning_Perform_1920-1080_RO-900x500.jpg",
            titleWithe: "Gama",
            titleYellow: "Walter Perform,",
            description: "Etalon pentru fiabilitate i eficienta econimica.",
            id: 1
        },
        {
            id: 2,
            img: "https://www.hnp.ro/wp-content/uploads/2020/08/W_All_Perform_1920-1080_RO-900x500.jpg",
            titleWithe: "Building Up",
            titleYellow: "Vision,<br/>  Leading Future",
            description: "We offer the most complete industrial solutions in the country, for the research, design and development of materials.",
        },
        {
            id: 3,
            img: "https://www.hnp.ro/wp-content/uploads/2020/06/promotie1_smicat_HNP-e1597263209992-900x500.png",
            titleWithe: "Building Up",
            titleYellow: "Vision,<br/>  Leading Future",
            description: "We offer the most complete industrial solutions in the country, for the research, design and development of materials.",
        }

    ];
    let startSlide = "";

    data.forEach(function (data) {
        startSlide += '<div class="item home-slider-bg" id="imgSlide-'+data.id+'">';
        startSlide += '   <div class="container">';
        startSlide += '      <div class="slider-dtl top-effect">';
        startSlide += '          <h1 class="slider-heading">' + data.titleWithe + ' <span>' + data.titleYellow + '</span> </h1>';
        startSlide += '          <h5 class="slider-sub-heading">' + data.description + ' </h5>';
        startSlide += '          <a href="#" class="btn btn-default">Contact Us </a>';
        startSlide += '      </div>';
        startSlide += '   </div>';
        startSlide += '</div>';
    });

    let containerId = document.getElementById("home-slider");
    containerId.innerHTML = startSlide;
    data.forEach(function (data) {
        document.getElementById("imgSlide-"+data.id).style.backgroundImage = "url('"+data.img+"')"
    });

    $('head').append(' <link href="css/owl.carousel.css" rel="stylesheet" type="text/css"/> ');
        $.ajax({
            url: 'js/owl.carousel.js',
            dataType: 'script',
            success: function () {
                $.ajax({
                    url: 'js/theme.js',
                    dataType: 'script',
                    success: function () {
                    },
                    async: true
                });
            },
            async: true
        });



});






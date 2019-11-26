$('.carousel2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})
$('.carousel2_xs').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
    }
})
$('.carousel3').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
})
$('.carousel_xs').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    loop: false,
    responsive: {
        0: {
            items: 1.25
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
})


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.display = "none";


}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.display = "block";

}
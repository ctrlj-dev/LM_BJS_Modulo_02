// Primero cargamos por JS los datos del hotel
var hoteles = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    },
    Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
    },
};

var selectedHotel = prompt(
    "Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani",
);

document.getElementById("name-hotel").innerHTML =
    "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;


/*
Este código ya no es necesario
document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;
*/

// Puntuación del hotel 


document.getElementById("rating").innerHTML = rating + " estrellas";
var stars = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

document.getElementById("rating").innerHTML = stars[rating];


// Chequear si queremos que la reseña sea anomina
var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;
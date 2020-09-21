var hotel = {
    name: "",
    location: "",
};


hotel.name = prompt("Introduce el nombre del hotel");
document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;

hotel.location = prompt("Introduce la ubicación del hotel");
document.getElementById("hotel-location").innerHTML = hotel["location"];

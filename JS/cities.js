// 05-cities.js

var a = { city: "Algiers", country: "Algeria", continent: "Africa" }; var b = { city: "Basel", country: "Switzerland", continent: "Europe" }; var c = { city: "Christchurch", country: "New Zealand", continent: "Oceania" }; var d = { city: "Dublin", country: "Ireland", continent: "Europe" }; var e = { city: "Espoo", country: "Finland", continent: "Europe" }; var f = { city: "Frankfurt", country: "Germany", continent: "Europe" }; var g = { city: "Georgetown", country: "Guyana", continent: "South America" }; var h = { city: "Hanoi", country: "Vietnam", continent: "Asia" }; var i = { city: "Istanbul", country: "Turkey", continent: "Asia" }; var j = { city: "Jimma", country: "Ethiopia", continent: "Africa" }; var k = { city: "Kabul", country: "Afghanistan", continent: "Asia" }; var l = { city: "La Paz", country: "Mexico", continent: "North America" }; var m = { city: "Melbourne", country: "Australia", continent: "Oceania" }; var n = { city: "New York", country: "United States", continent: "North America" }; var o = { city: "Okinawa", country: "Japan", continent: "Asia" }; var p = { city: "Pretoria", country: "South Africa", continent: "Africa" }; var q = { city: "Qom", country: "Iran", continent: "Asia" }; var r = { city: "Riga", country: "Latvia", continent: "Europe" }; var s = { city: "Santiago", country: "Chile", continent: "South America" }; var t = { city: "Toronto", country: "Canada", continent: "North America" }; var u = { city: "Utrecht", country: "Netherlands", continent: "Europe" }; var v = { city: "Valencia", country: "Venezuela", continent: "South America" }; var w = { city: "Windhoek", country: "Namibia", continent: "Africa" }; var x = { city: "Xinyi", country: "China", continent: "Asia" }; var y = { city: "Yamoussoukro", country: "Ivory Coast", continent: "Africa" }; var z = { city: "Zabrze", country: "Poland", continent: "Europe" }; var cities = []; cities.push(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z);

// Example Task #3
function addTags(){

    var ul = document.createElement('ul');

    info = ["HTML","CSS","Javascript"];

    document.body.appendChild(ul);
    info.forEach(addItems);

    function addItems(element, index, arr) {
        var li = document.createElement('li');
            ul.appendChild(li);

            li.innerHTML=li.innerHTML + element;
        }
}

// Write your code below
function addCountries() {
  var ul = document.createElement('ul');

  document.body.appendChild(ul);
  cities.forEach(addItems);

  function addItems(object, index, arr) {
    var li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML=li.innerHTML + object.city + ", " + object.country;
        li.setAttribute("class", object.continent.toLowerCase());
        li.setAttribute("id", object.country.toLowerCase());
  }
}

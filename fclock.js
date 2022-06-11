function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    f();
    getLocation();
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function f() {
    const d = new Date();
    let day2 = d.getDay()
    const y = new Date();
    const m = new Date();
    const b = new Date();
    var mouth = m.getMonth() + 1;
    var day1 = b.getDate();
    var year = y.getFullYear();
    mouth = mouth.toString();
    day1 = day1.toString();
    year = year.toString();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day = days[day2]
    var x = document.getElementById('day');
    x.innerHTML = day;
    var zz = document.getElementById('date2');
    zz.innerHTML = mouth + "/" + day1;
    var color = document.getElementById('color').value;
    var c = document.getElementById("colo").style.backgroundColor = color;
    var colortxt = document.getElementById('color2').value;
    document.getElementById("day").style.color = colortxt;
    document.getElementById("date2").style.color = colortxt;
    document.getElementById("txt").style.color = colortxt;
    document.getElementById("wether").style.color = colortxt;
    var x = document.getElementById("demo");


}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x = "";
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=4fbee6f796d9742c10ccc097c5c76006&units=metric",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function (location) {
            var cel = Math.floor(location.main.temp);
            $('#wether').html(cel + "°");

        }
    })
}
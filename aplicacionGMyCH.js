//var longitud = parseFloat(28.044);
//var latitud = parseFloat(-2.363);

function SendData(){
    var obj = JSON.parse(document.getElementById('JSONlatlng').value);
    var obj2=JSON.parse(document.getElementById('JSONdist').value);
    var latitud=parseFloat(obj.lat);
    var longitud=parseFloat(obj.lng);
    var km=obj2.km
    return latitud,longitud,km
}
function initMap() {
    SendData()
        var uluru = { lat: latitud, lng: longitud };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

function drawChart() {
    SendData()
    if k 

    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Year', 'Asia'],
       ['2012',  900],
       ['2013',  1000],
       ['2014',  1170],
       ['2015',  1250],
       ['2016',  1530]
    ]);
    
    var options = {title: 'km recorridos por día'}; 
    
    // Instantiate and draw the chart.
    var chart = new google.visualization.BarChart(document.getElementById('container'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);
//});
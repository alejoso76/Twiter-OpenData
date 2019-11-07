window.onload = function maxPereira() {
    var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Maximos Pereira en todas las Estaciones"
        },
        axisY: {
            title: "µg/m3",
            titleFontSize: 24
        },
        data: [{
            type: "line",
            yValueFormatString: "#,### µg/m3",
            dataPoints: dataPoints
        }]
    });
    
    function addData(data) {
        for (var i = 0; i < data.length; i++) {
            dataPoints.push(
                {x: new Date(data[i].a_o), 
                 y: parseInt(data[i].dato_m_ximo_g_m3)
                });
            console.log(data[i].dato_m_ximo_g_m3);
        }
        chart.render();
    
    }
    
    $.getJSON("https://www.datos.gov.co/resource/a2ud-mjag.json?ciudad=Pereira", addData);
    
    }
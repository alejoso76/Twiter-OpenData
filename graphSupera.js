window.onload = function minPereira() {
    var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Numero de veces que supera los limites (Diario) por estacion"
        },
        axisY: {
            title: "µg/m3",
            titleFontSize: 24
        },
        data: [{
            type: "pie",
            yValueFormatString: "#,### veces",
            dataPoints: dataPoints
        }]
    });
    
    function addData(data) {
        for (var i = 0; i < data.length; i++) {
            dataPoints.push(
                {label: data[i].estacion+data[i].a_o, 
                 y: parseInt(data[i].n_mero_de_veces_que_supera_la_norma_diaria)
                });
        }
        chart.render();
    
    }
    
    $.getJSON("https://www.datos.gov.co/resource/a2ud-mjag.json?ciudad=Pereira", addData);
    
    }
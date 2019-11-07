window.onload = function estacionesPereira() {
    var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Minimos Pereira por Estacion desde el 2010"
        },
        axisY: {
            title: "µg/m3",
            titleFontSize: 24
        },
        axisX: {
            labelAngle: -50
        },
        data: [{
            type: "column",
            yValueFormatString: "#,### µg/m3",
            dataPoints: dataPoints
        }]
    });
    
    function addData(data) {
        for (var i = 0; i < data.length; i++) {
            dataPoints.push(
                {label: data[i].estacion+data[i].a_o+data[i].semestre,
                 y: parseInt(data[i].dato_m_nimo_g_m3)
                });
            console.log(data[i].dato_m_nimo_g_m3);
        }
        chart.render();
    
    }
    
    $.getJSON("https://www.datos.gov.co/resource/a2ud-mjag.json?ciudad=Pereira&$where=a_o>2009", addData);
    
    }


/*var fetchValues = function() {
  return $.get(
    'https://data.cityofchicago.org/resource/6zsd-86xi.json',
    {
      '$select' : 'date_trunc_ymd(date) as day, count(*)',
      '$where' : "date > '2014-01-01'",
      '$group' : 'day'
    }
  );
};*/


function getTable(){
$.ajax({
  url: "https://www.datos.gov.co/resource/a2ud-mjag.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$select" : "ciudad, estacion, a_o, semestre, dato_m_nimo_g_m3, dato_m_ximo_g_m3",
    "$$app_token" : "CtfC6TSEA8thYg9XnXYu0BX8u"
  }
}).done(function(data) {
alert("Retrieved " + data.length + " records from the dataset!");
console.log(data);

var tbody = $("<tbody />"),tr;
  tbody.append("<th>Ciudad</th> <th>Estacion</th> <th>Anio</th> <th>Semestre</th> <th>Minimo</th> <th>Maximo</th>");
  $.each(data,function(_,obj) {
      tr = $("<tr />");
      $.each(obj,function(_,text) {
        tr.append("<td>"+text+"</td>")
      });
      tr.appendTo(tbody);
  });
  tbody.appendTo("#table1"); // only DOM insertion
return data;
});
}

//?-----------------------------------------------------------------------------------------

function getTablePereira(municipio){
  /*
  ciudad=document.getElementById("municipio").textContent;
  str1="https://www.datos.gov.co/resource/a2ud-mjag.json?ciudad=";
  str2=String(ciudad);
  str3=str1.concat(str2);
  console.log(ciudad);
  */
  $.ajax({
    url: "https://www.datos.gov.co/resource/a2ud-mjag.json?$q="+municipio,
    type: "GET",
    data: {
      "$limit" : 5000,
      "$select" : "ciudad, estacion, a_o, semestre, dato_m_nimo_g_m3, dato_m_ximo_g_m3",
      "$$app_token" : "CtfC6TSEA8thYg9XnXYu0BX8u"
    }
  }).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);

  var tbody = $("<tbody />"),tr;
    tbody.append("<th>Ciudad</th> <th>Estacion</th> <th>Anio</th> <th>Semestre</th> <th>Minimo</th> <th>Maximo</th>");
    $.each(data,function(_,obj) {
        tr = $("<tr />");
        $.each(obj,function(_,text) {
          tr.append("<td>"+text+"</td>")
        });
        tr.appendTo(tbody);
    });
    tbody.appendTo("#table1"); // only DOM insertion
  return data;
  });
  }

//?-----------------------------------------------------------------------------------------


$(function () {
    $.ajax({
        url: 'http://www.mindicador.cl/api',
        method: 'GET'
    }).then(function (data) {
        console.log(data);
        let dolar = data.dolar.valor;
        let euro = data.euro.valor;
        let uf = data.uf.valor;
        let utm = data.utm.valor;
        $("#valor-dolar").text(parseInt(dolar) + " CLP");
        $("#valor-euro").text(parseInt(euro) + " CLP");
        $("#valor-uf").text(parseInt(uf) + " CLP");
        $("#valor-utm").text(parseInt(utm) + " CLP");
        $("#button-1").click(function (e) {
            e.preventDefault();
            function roundToTwo(num) {    
                return +(Math.round(num + "e+2")  + "e-2");
            }
            if ($("#unidades-a-convertir option:selected").val() == "Dólar") {
                $(".valor-convertido-1 h5").text((roundToTwo(($("#cantidad-1").val() / dolar)) + " $US"))
            }
            else if ($("#unidades-a-convertir option:selected").val() == "Euro") {
                $(".valor-convertido-1 h5").text((roundToTwo(($("#cantidad-1").val() / euro)) + " $EU"))
            }
        })
        $("#button-2").click(function (e) {
            e.preventDefault();
            function roundToTwo(num) {    
                return +(Math.round(num + "e+2")  + "e-2");
            }
            if ($("#unidades-a-convertir-2 option:selected").val() == "Dólar") {
                $(".valor-convertido-2 h5").text((roundToTwo(($("#cantidad-2").val() * dolar)) + " $CLP"))
            }
            else if ($("#unidades-a-convertir-2 option:selected").val() == "Euro") {
                $(".valor-convertido-2 h5").text((roundToTwo(($("#cantidad-2").val() * euro)) + " $CLP"))
            }
        })
        $("#button-3").click(function (e) {
            e.preventDefault();
            function roundToTwo(num) {    
                return +(Math.round(num + "e+2")  + "e-2");
            }
            if ($("#unidades-a-convertir-3 option:selected").val() == "UF") {
                $(".valor-convertido-3 h5").text((roundToTwo(($("#cantidad-3").val() * uf)) + " $CLP"))
            }
            else if ($("#unidades-a-convertir-3 option:selected").val() == "UTM") {
                $(".valor-convertido-3 h5").text((roundToTwo(($("#cantidad-3").val() * utm)) + " $CLP"))
            }
        })
    })

})
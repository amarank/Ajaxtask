var productArr=[];
var product={};
function cust() {
    var company = $("#cName").val();
    var country = $("#ctry").val();
    var address = $("#add").val();
    var  adress2= $("#adrs").val();
    var  regNo= $("#cRNo").val();
    var zipcode = $("#zCode").val();
    var currency = $("#cuCy").val();
    var taxreg = $("#tRNo").val();

    product["com"] = company;
    product["coun"] = country;
    product["ad"] = address;
    product["ad2"] = adress2;
    product["reN"] = regNo;
    product["zDe"] = zipcode;
    product["cNy"] = currency;
    product["tR"] = taxreg;
if(product.id){
    product.id=product.id;
    var myJSON = JSON.stringify(product);
    $.ajax({
        url: 'https://5fd86a9b7e05f000170d2775.mockapi.io/ship/'+product.id,
        type: 'PUT',
        async: false,
        dataType: "json",
        data: myJSON,
        contentType: 'application/json',
        success: function (response) {
         window.location.replace("index.html");
        }
    });
    console.log(productArr);
}
else{
    var myJSON = JSON.stringify(product);
    $.ajax({
        url: 'https://5fd86a9b7e05f000170d2775.mockapi.io/ship',
        type: 'POST',
        async: false,
        dataType: "json",
        data: myJSON,
        contentType: 'application/json',
        success: function (response) {
         window.location.replace("index.html");
        }
    });
    console.log(productArr);
};
}
$(document).ready(function(){
    var url_string=(window.location.href).toLowerCase();
    var url=new URL(url_string);
    var id=url.searchParams.get("id");
    $.ajax({
        url: 'https://5fd86a9b7e05f000170d2775.mockapi.io/ship/'+id,
        type: 'GET',
        async: false,
        dataType: "json",
        contentType: 'application/json',
        success: function (response) {
        product=response;
        $("#cName").val(product.com);
      $("#ctry").val(product.coun);
     $("#add").val(product.ad);
   $("#adrs").val(product.ad2);
   $("#cRNo").val(product.reN);
  $("#zCode").val(product.zDe);
    $("#cuCy").val(product.cNy);
   $("#tRNo").val(product.tR);

        }
    });
});

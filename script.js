var productArr=[];
$ (document).ready(function(){
    $.ajax({
    url: 'https://5fd86a9b7e05f000170d2775.mockapi.io/ship',
    type: 'GET',
    async: false,
    dataType: "json",
    contentType: 'application/json',
    success: function (response) {
        $.each(response,function(i,object){
            productArr.push(object);
            console.log(productArr);
        });
    }
   
    });
    add();
});

var sNo=1;
function add(){
        var html = "";
        // editIndex = undefined;
        for (var i = 0; i < productArr.length; i++) {
            html += "<tr id='trr_"+sNo+"'>";
            html += "<td>" + productArr[i].com + "</td>";
            html += "<td>" + productArr[i].coun + "</td>";
            html += "<td>" + productArr[i].ad+ "</td>";
            html += '<td><button class=" btn btn-success" onclick="Edit(' +productArr[i].id + ')">Edit</button> <button class=" btn btn-info" onclick="Delete(' + productArr[i].id + ')">Delete</button></td>';
            sNo++;
        }
    
        $("#body").html (html) ;
    };


    function Delete(id){
        $.ajax({
        url: 'https://5fd86a9b7e05f000170d2775.mockapi.io/ship/'+id,
        type: 'DELETE',
        async: false,
        dataType: "json",
        contentType: 'application/json',
        success: function (response) {
            $("#trr_"+id).remove();
        }
        });
    }
    
    function Edit(id){
        window.location.href="create.html?id="+id;
    }
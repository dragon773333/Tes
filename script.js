$(document).ready(function) {
    $("#retrieve-resourcess").click(function( ) {
        var displayResourcess = $("display-resourcess");
        
        dsplayResourcess.text('Mengambil data dari api...');
        open"Page: https://cdnjs.cloudflare.com/Ajax/libs/jQuery/3.3.1/jQuery.min.js"
        
        $.ajax ( {
            type: "GET",
            dataType: "json",
            url: "api.php",
            success: function (result) { 
                 console.log (result);
                 var output +="<table><thead><tr><th>User Id</th><th>Name</th><th>Email</th><th>Phone</thead><tbody>";
                 for (var i in result) { 
                     output +="<tr><td>"+result [i].user_id +"</td><td>"+result [i].name+"</td><td>"+result [i].email"</td><td>"+result [i].phone"</td><td>";
                          
                }
                output +="</tbody></table>";
                
                displayResourcess.html(output);
                $('table').addClass("table");
            }
        });
    });
});
           
                          
            
        


    $(document).ready(function() {        
                          webdata();
                                }); 
        
         function webdata() {      
                  var nombre = $("#nombre");
                  var descripcion = $("#descripcion");
                  var precio = $("#precio");
                  var imagen = $("#imagen");
                  $.getJSON("http://127.0.0.1:8000/ws/productos/", function(json){
                    $.each(json, function(fields,data){
                      console.log(data);  
                      console.log(fields); 
                    nombre.append("<li><h3><td>" + data.fields.nombre +"<td>");  
                    descripcion.append("<li><h3><td>" + data.fields.descripcion +"<td>");
                    precio.append("<li><td><h3><td>" + data.fields.precio +"<td></li>");
                    imagen.append("<li><td><img  src='http://127.0.0.1:8000/media/" + data.fields.imagen +"'width=150px heigth=150px'/></td></li>");
                
                    
                    });      
                    
                    });  
                    
                    } 
$(function()
{


  MyMatriz = [[0,"*",0,"-","8",19],
                ["-","","+","","-",""],
                [0,"+",0,"*",0,8],
                ["+","","-","","+",""],
                [0,"+","4","-",0,2],
                [12,"","0","",9,""]];
                
                
                /* 0 x 0 - 8 = 19
                   -   +   -
                   0 + 0 * 0 = 8
                   +   -   +
                   0 + 4 - 0 = 2
                   =   =   = 
                   12  0   9
                */
                DibujaJuego();

			$("#Juego").keyup(function(){
				//IngresaValores();
       // DibujaJuego();
        //validaResultados();
			});
	  
function DibujaJuego (){
	
      var tds = `<table class="table table-bordered">
                    <tbody>
      `;
      for(num in MyMatriz){
        var color = (num) => num % 2;
        if(color(num) === 0){
          tds += '<tr class="success">';
        }else{
          tds += '<tr class="danger">'; 
        }
        
        for(var i= 0; i < MyMatriz[num].length; i++){
          if(MyMatriz[num][i]===0){
            tds += '<td><input type="number" class="form-control" id=id_'+num+i+'></td>'
          }else{
            tds += '<td align="center" class="success">'+MyMatriz[num][i]+'</td>';
          }
          
        }
        tds += '</tr>';
      }
      tds += `</tbody>
              </table>`;
      $("#Juego").html(tds);
	 
}

function validaResultados(){
 var cont=0;
 
 filas=[];
 Resultados=[];
 Valores=[];
 //Valida filas
  for(var i=0;i < MyMatriz.length-1;i+=2){ 
    filas[cont] = MyMatriz[i];
    //Resultados[cont] = filas[cont].pop(); 
    //Valores[cont] = filas[cont].join(' ');
    cont++;
    
  }
  for (var i = 0; i < filas.length; i++) {
   // Resultados[i] = filas[i].pop();
    for (var j = 0; j < filas[i].length-1; j++) {
      Valores.push(filas[i][j]);
    };
  
  };
   MisValoresF1=[];
   for (var i = 0; i < 5; i++) {
     MisValoresF1.push(Valores[i]);
   };
   MisValoresF2=[];
   for (var i = 5; i < 10; i++) {
     MisValoresF2.push(Valores[i]);
   };
   MisValoresF3=[];
   for (var i = 10; i < 15; i++) {
     MisValoresF3.push(Valores[i]);
   };

ValoresFilas=[];
ValoresFilas.push(MisValoresF1.join(' '),MisValoresF2.join(' '),MisValoresF3.join(' '));
  
//Valida Columnas
var Columnas=[], cont=0;
for(var i=0;i < MyMatriz.length;i++){
  for(var j=0;j< MyMatriz[i].length;j++){
   Columnas.push(MyMatriz[j][i]);
  }
}
var Columna1=[];
for (var i = 0; i < 5; i++) {
  Columna1.push(Columnas[i]);
};
var Columna2=[];
for (var i = 12; i < 17; i++) {
  Columna2.push(Columnas[i]);
};

var Columna3=[];
for (var i = 24; i < 29; i++) {
  Columna3.push(Columnas[i]);
};

  ValoresColumnas = [];
  ValoresColumnas.push(Columna1.join(''),Columna2.join(''),Columna3.join(''));
//----------------------------Validaciones---------------------------------------------------

if(eval(ValoresFilas[0])===MyMatriz[0][5] && eval(ValoresFilas[1])===MyMatriz[2][5] && eval(ValoresFilas[2])===MyMatriz[4][5] && eval(ValoresColumnas[0])===MyMatriz[5][0] && eval(ValoresColumnas[1]) === parseInt(MyMatriz[5][2]) && eval(ValoresColumnas[2])===MyMatriz[5][4]){

  
/*
Matriz de prueba  restFilas = 48, 90, 2
                  restColumnas = 3, 12, 5

"8" "*" "7" "-" "8" 48
"-" ""  "+" ""  "-" ""
"9" "+" "9" "*" "9" 90
"+" ""  "-" ""  "+" ""
"4" "+" "4" "-" "6" 2
 3  ""  12 ""  5 ""
*/
  $("#Mensajes").html("<p style='color:green'> !Ganóóóóó¡ </p>");
  DibujaJuego();

}else{

  $("#Mensajes").html("<p style='color:red'> Aun no Gana </p>");
}

 
}

function IngresaValores(){

  
  $("#id_00").val().toString().length > 0 && !isNaN($("#id_00").val()) ? MyMatriz[0][0] = $("#id_00").val() : MyMatriz[0][0]=0;
  $("#id_02").val().toString().length > 0 && !isNaN($("#id_02").val()) ? MyMatriz[0][2] = $("#id_02").val() : MyMatriz[0][2]=0;
  $("#id_20").val().toString().length > 0 && !isNaN($("#id_20").val()) ? MyMatriz[2][0] = $("#id_20").val() : MyMatriz[2][0]=0;
  $("#id_22").val().toString().length > 0 && !isNaN($("#id_22").val()) ? MyMatriz[2][2] = $("#id_22").val() : MyMatriz[2][2]=0;
  $("#id_24").val().toString().length > 0 && !isNaN($("#id_24").val()) ? MyMatriz[2][4] = $("#id_24").val() : MyMatriz[2][4]=0;
  $("#id_40").val().toString().length > 0 && !isNaN($("#id_40").val()) ? MyMatriz[4][0] = $("#id_40").val() : MyMatriz[4][0]=0;
  $("#id_44").val().toString().length > 0 && !isNaN($("#id_44").val()) ? MyMatriz[4][4] = $("#id_44").val() : MyMatriz[4][4]=0;
 
 validaResultados();
}


$("#Valida").click(function(event)
  {
    NoCamposVacios();
    //IngresaValores();
    //validaResultados();
  });

function NoCamposVacios(){
  $("#id_00").val().toString().length == 0 && !isNaN($("#id_00").val()) ? $("#Mensajes").html("<p style='color:red'> Debe llenar todos los campos y deben ser de tipo numerico </p>") :
  $("#id_02").val().toString().length == 0 && !isNaN($("#id_02").val()) ? $("#Mensajes").html("<p style='color:red'> Debe llenar todos los campos y deben ser de tipo numerico </p>") :
  $("#id_20").val().toString().length == 0 && !isNaN($("#id_20").val()) ? $("#Mensajes").html("<p style='color:red'> Debe llenar todos los campos y deben ser de tipo numerico </p>") :
  $("#id_22").val().toString().length == 0 && !isNaN($("#id_22").val()) ? $("#Mensajes").html("<p style='color:red'> Debe llenar todos los campos y deben ser de tipo numerico </p>") :
  $("#id_24").val().toString().length == 0 && !isNaN($("#id_24").val()) ? $("#Mensajes").html("<p style='color:red'> Debe llenar todos los campos y deben ser de tipo numerico </p>") :
  $("#id_40").val().toString().length == 0 && !isNaN($("#id_40").val()) ? $("#Mensajes").html("<p style='color:red'> Debe llenar todos los campos y deben ser de tipo numerico </p>") :
  $("#id_44").val().toString().length == 0 && !isNaN($("#id_44").val()) ? $("#Mensajes").html("<p style='color:red'> Debe llenar todos los campos y deben ser de tipo numerico </p>") :
  IngresaValores();
  
  
}

});

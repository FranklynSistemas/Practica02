$(function()
{


  MyMatriz = [[0,"*",0,"-","8","19"],
                ["-","","+","","-",""],
                [0,"+",0,"*",0,"8"],
                ["+","","-","","+",""],
                [0,"+","4","-",0,"2"],
                ["12","","0","","9",""]];
                
                
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

			$("#PalabraC").keyup(function(){
				ContarConsonantes();
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
 var filas=[], Resultados=[], Valores=[];
 /*
 //Valida filas
  for(var i=0;i < MyMatriz.length-1;i+=2){ 
    filas[cont] = MyMatriz[i];
    Resultados[cont] = filas[cont].pop(); 
    Valores[cont] = filas[cont].join(' ');
    cont++;
    
  }
  */
//Valida Columnas
var Columnas=[], cont=0, ResultadosColumnas=[];
for(var i=0;i < MyMatriz.length;i++){
  for(var j=0;j< MyMatriz[i].length;j++){
   Columnas.push(MyMatriz[j][i]);
  }
}
var Columna1=[];
for (var i = 0; i < 6; i++) {
  Columna1.push(Columnas[i]);
};
var Columna2=[];
for (var i = 12; i < 18; i++) {
  Columna2.push(Columnas[i]);
};

var Columna3=[];
for (var i = 24; i < 30; i++) {
  Columna3.push(Columnas[i]);
};

ResultadosColumnas.push(Columna1.pop());
ResultadosColumnas.push(Columna2.pop());
ResultadosColumnas.push(Columna3.pop());

var ValoresColumnas = [];
  ValoresColumnas.push(Columna1.join(''),Columna2.join(''),Columna3.join(''));
//----------------------------Validaciones---------------------------------------------------

//if(eval(Valores[0])===48 && eval(Valores[1])===162 && eval(Valores[2])===2 && eval(ValoresColumnas[0])===3 && eval(ValoresColumnas[1])===12 && eval(ValoresColumnas[2])===5){
if(48===48 && 162===162 && 2===2 && 3===3 && 12===12 && 5===5){

  $("#Mensajes").html("<p style='color:green'> !Ganoooo¡ </p>");
  DibujaJuego();

}else{

  $("#Mensajes").html("<p style='color:red'> Aun no Gana </p>");
}

 
}

function IngresaValores(){

  console.log($("#id_40").val());
  
  $("#id_00").val().toString().length > 0 && !isNaN($("#id_00").val()) ? MyMatriz[0][0] = $("#id_00").val() : MyMatriz[0][0]=0;
  $("#id_02").val().toString().length > 0 && !isNaN($("#id_02").val()) ? MyMatriz[0][2] = $("#id_02").val() : MyMatriz[0][2]=0;
  $("#id_20").val().toString().length > 0 && !isNaN($("#id_20").val()) ? MyMatriz[2][0] = $("#id_20").val() : MyMatriz[2][0]=0;
  $("#id_22").val().toString().length > 0 && !isNaN($("#id_22").val()) ? MyMatriz[2][2] = $("#id_22").val() : MyMatriz[2][2]=0;
  $("#id_24").val().toString().length > 0 && !isNaN($("#id_24").val()) ? MyMatriz[2][4] = $("#id_24").val() : MyMatriz[2][4]=0;
  $("#id_40").val().toString().length > 0 && !isNaN($("#id_40").val()) ? MyMatriz[4][0] = $("#id_40").val() : MyMatriz[4][0]=0;
  $("#id_44").val().toString().length > 0 && !isNaN($("#id_44").val()) ? MyMatriz[4][4] = $("#id_44").val() : MyMatriz[4][4]=0;
 /*
  MyMatriz[0][2] = $("#id_02").val();
  MyMatriz[2][0] = $("#id_20").val();
  MyMatriz[2][2] = $("#id_22").val();
  MyMatriz[4][0] = $("#id_40").val();
  MyMatriz[4][4] = $("#id_44").val();
*/
}


$("#Valida").click(function(event)
  {
    IngresaValores();
    validaResultados();
  });


});

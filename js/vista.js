var respuestaU,Npregunta;

$(document).ready(function(){

	
	console.log(respuestaU);
	Npregunta = 0;
	

	

	function preguntar (n){
		if (Npregunta == 6){
			location.href="Ganar.html"
		}
		else{
		$("#pregunta bloquote").html(Preguntas[n]);
			
		}
	
	}
	function chekearPregunta(respuesta){
			var resp = respuesta;
			console.log(resp);
			if (RespuestasC[Npregunta] == respuesta){
				console.log("correcta");
				adivino();
			}
			else
			{
				console.log("perdio");
				perdio();
			}


	}
	function adivino(){
		$("#resultado").html("ACERTASTE").addClass("text-success");
		Npregunta++;
		preguntar(Npregunta);

	}
	
	function perdio(){
		Npregunta=0;
		location.href="Perdiste.html"
	}

	preguntar(0);
    
    $("#botonVotar").click(function(){
    	respuestaU = $("#resp").val();
    	console.log("respuesta desde click "+ respuestaU )
    	chekearPregunta(respuestaU);
    });

})
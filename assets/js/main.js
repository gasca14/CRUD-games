
function agregar() {
   nombre = document.getElementById("nombre").value;
   genero = document.getElementById("genero").value;
   consola = document.getElementById("consola").value;
   
   let juego = {
      nombre:nombre,
      genero:genero,
      consola:consola
   };
   if(nombre === "" || genero === "" || consola === ""){
      alert("Todos los campos son obligatorios!")
   }
   else if(localStorage.getItem("juegos") === null){
      let juegos = [];
      juegos.push(juego);
      localStorage.setItem("juegos",JSON.stringify(juegos));
   }else{
      let juegos = JSON.parse(localStorage.getItem("juegos"));
      juegos.push(juego);
      localStorage.setItem("juegos",JSON.stringify(juegos));
   }
   mostrar();
   formulario.reset();
}

function mostrar() {
   let juegos = JSON.parse(localStorage.getItem("juegos"));
   tbody.innerHTML = "";
   for (let i = 0; i < juegos.length; i++) {
      let nombre = juegos[i].nombre;
      let genero = juegos[i].genero;
      let consola = juegos[i].consola;

      tbody.innerHTML += 
      `<tr>
         <td>${nombre}</td>
         <td>${genero}</td>
         <td>${consola}</td>
         <td><button type="button" class="btn btn-outline-info btn-sm" onclick = "editar('${nombre}')">Editar</button></td>
         <td><button type="button" class="btn btn-outline-danger btn-sm" onclick = "eliminar('${nombre}')">Eliminar</button></td>
      </tr>`


   }
}


function editar(nombre){
   let juegos = JSON.parse(localStorage.getItem("juegos"));
   for (let i = 0; i < juegos.length; i++) {
      if(juegos[i].nombre === nombre){
         document.getElementById("body").innerHTML = 
         `<div class="row">
          <div id="games" class="offset-md-3 col-md-6 mt-3">
             <h3 id="titulo"><b>Editar video juego</b></h3>
               <form>
                 <div class="form-group">
                     <input type="text" class="form-control" placeholder="${juegos[i].nombre}" id="newnombre">
                 </div>
                 <div class="form-group">
                     <input type="text" class="form-control" placeholder="${juegos[i].genero}" id="newgenero">
                 </div>
                 <div class="form-group">
                     <input type="text" class="form-control" placeholder="${juegos[i].consola}" id="newconsola">
                 </div>
                 <button type="button" class="btn btn-primary float-left" onclick = "actualizar('${i}')">Actualizar</button>
                 <button type="button" class="btn btn-danger float-rigth" onclick = "cancelar()">Cancelar</button>
             </form>
         </div>
     </div>`
      }
      
   }


}

function actualizar(i){
  
      
      let juegos = JSON.parse(localStorage.getItem("juegos"));
      juegos[i].nombre = document.getElementById("newnombre").value;
      juegos[i].genero = document.getElementById("newgenero").value;
      juegos[i].consola = document.getElementById("newconsola").value;
      if(juegos[i].nombre === "" || juegos[i].genero === "" || juegos[i].consola === ""){
         alert("Completa todos los nuevos datos a editar!")
      }else{
      localStorage.setItem("juegos",JSON.stringify(juegos))

   }
}



function eliminar(nombre){
   let juegos = JSON.parse(localStorage.getItem("juegos"));
   for(let i = 0; i < juegos.length; i++) {
      if(juegos[i].nombre === nombre){
         juegos.splice(i,1);
      }
   }
   localStorage.setItem("juegos",JSON.stringify(juegos))
   mostrar()
   
}


function limpiarTodo () {
   localStorage.clear()
   juegos = []
   tbody.innerHTML = ""
}
mostrar()

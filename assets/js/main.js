
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
         <td><button type="button" class="btn btn-warning btn-sm" onclick = "editar('${nombre}')"><i class="fa-solid fa-pen-to-square"></i></button></td>
         <td><button type="button" class="btn btn-danger btn-sm" onclick="eliminar('${nombre}')"><i class="fa-solid fa-trash"></i></button></td>
      </tr>`


   }
}


function editar(nombre){
   let juegos = JSON.parse(localStorage.getItem("juegos"));
   for (let i = 0; i < juegos.length; i++) {
      if(juegos[i].nombre === nombre){
         document.getElementById("body").innerHTML = 
         `<div class="row">
          <div  class="offset-md-3 col-md-6 mt-3">
             <h3><b>Editar video juego</b></h3>
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
                 <button type="button" class="btn btn-danger float-rigth" onclick = "menuPrincipal()">Cancelar</button>
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
         alert("Completa todos los campos para actualizar!")
      }else{
      localStorage.setItem("juegos",JSON.stringify(juegos))
      menuPrincipal()   
   }
}
function menuPrincipal(){
   document.getElementById("body").innerHTML = `<div class="row">
   <div id="games" class="offset-md-3 col-md-6 mt-3">
       <h3 id="titulo"><b>Formulario de video juegos</b></h3>
       <form id="formulario">
           <div class="form-group">
               <input type="text" class="form-control" placeholder="Nombre del videojuego" id="nombre">
           </div>
           <div class="form-group">
               <input type="text" class="form-control" placeholder="Genero" id="genero">
           </div>
           <div class="form-group">
               <input type="text" class="form-control" placeholder="Consola a la que pertenece" id="consola">
           </div>
           <button type="button" class="btn btn-success float-left" onclick="agregar()">Agregar</button>
           <button type="button" class="btn btn-primary float-right" onclick="limpiarTodo()">Limpiar
               todo</button>         
       </form>
   </div>
</div>
   <div class="offset-md-3 col-md-6">

       <div class="table-responsive mt-4">
           <table class="table">
               <h4 id="cont" class="text-center">Lista de juegos</h4> 
               <thead>
                   <tr>
                       <td>Nombre</td>
                       <td>Genero</td>
                       <td>Consola</td>
                       <td>Acciones</td>
                   </tr>
               </thead>
               <tbody id="tbody">
                    <tr>
                       <td>No hay registros</td>
                   </tr>
                   <tr>
                       <td>Mario</td>
                       <td>Accion</td>
                       <td>Nintendo</td>
                       <td><button type="button" class="btn btn-danger btn-sm">Editar</button></td>
                       <td><button type="button" class="btn btn-warning btn-sm">Eliminar</button></td>
                   </tr>
               </tbody>
           </table>
       </div>
   </div>`
   mostrar()
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

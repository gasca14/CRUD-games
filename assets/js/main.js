



function agregar() {
   nombre = document.getElementById("nombre").value;
   genero = document.getElementById("genero").value;
   consola = document.getElementById("consola").value;
   
   let juego = {
      nombre:nombre,
      genero:genero,
      consola:consola
   }
   if(nombre === "" || genero === "" || consola === ""){
      alert("Todos los campos son obligatorios!")
   }
   else if(localStorage.getItem("juegos") === null){
      let juegos = []
      juegos.push(juego)
      localStorage.setItem("juegos",JSON.stringify(juegos))
   }else{
      let juegos = JSON.parse(localStorage.getItem("juegos"))
      juegos.push(juego)
      localStorage.setItem("juegos",JSON.stringify(juegos))
   }
   mostrar()
   formulario.reset()
}

function mostrar() {
   let juegos = JSON.parse(localStorage.getItem("juegos"))
   tbody.innerHTML = ""
   for (let i = 0; i < juegos.length; i++) {
      let nombre = juegos[i].nombre;
      let genero = juegos[i].genero;
      let consola = juegos[i].consola;

      tbody.innerHTML += 
      `<tr>
         <td>${nombre}</td>
         <td>${genero}</td>
         <td>${consola}</td>
         <td><button type="button" class="btn btn-outline-info btn-sm" onclick = "editar()">Editar</button></td>
         <td><button type="button" class="btn btn-outline-danger btn-sm" onclick = "eliminar()">Eliminar</button></td>
      </tr>`


   }
}
mostrar()





function limpiarTodo () {
   localStorage.clear()
   juegos = []
   tbody.innerHTML = ""
}

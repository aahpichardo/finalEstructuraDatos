class verCitas { // Clase para manejar las citas
    constructor(){ // Constructor de la clase
      this.citas = JSON.parse(localStorage.getItem('citas')) || []; // Se obtienen las citas del localStorage
    }
  
    Push(cita){ // Método para agregar una cita
      this.citas.push(cita); // Se agrega la cita al arreglo
      localStorage.setItem('citas', JSON.stringify(this.citas)); // Se guarda el arreglo en el localStorage
    }

    Size(){ // Método para obtener el tamaño del arreglo
      return this.citas.length; // Se regresa el tamaño del arreglo
    }

    Shift(){ // Método para eliminar la primera cita del arreglo
      var cita = this.citas.shift(); // Se obtiene la primera cita
      localStorage.setItem('citas', JSON.stringify(this.citas)); // Se guarda el arreglo en el localStorage
      return cita; // Se regresa la cita
    }

    Print(num){
      return this.citas[num]; // Se regresa la cita
    }
}

var obCitas = new verCitas(); // Se crea el objeto de la clase verCitas

function agendar(){ // Función para agregar una cita
    var nombre = document.getElementById("nombre").value; // Se obtiene el nombre
    var curp = document.getElementById("curp").value; // Se obtiene la curp
    var nss = document.getElementById("nss").value; // Se obtiene el nss (número de seguro social)
    var email = document.getElementById("email").value; // Se obtiene el email
    var medico = document.getElementById("medico").value; // Se obtiene el médico
    var motivo = document.getElementById("motivo").value; // Se obtiene el motivo
    var cita = {Nombre: nombre, Curp: curp, Nss: nss, Email: email,Medico: medico,Motivo: motivo}; // Se crea la cita
    obCitas.Push(cita); // Se agrega la cita
}

function mostrarCita(){ // Función para mostrar la cita
    var num = obCitas.Size(); // Se obtiene el tamaño del arreglo
    if (num>0){ // Si hay citas
      document.getElementById("conteo").innerHTML = "Tiene "+ (num-1) +" cita(s) mas pendientes para hoy."; // Se muestra el número de citas
      var campos = ["nombre", "curp", "nss", "email", "medico", "motivo"]; // Se obtienen los campos
      for (var i = 0; i < campos.length; i++) { // Se recorren los campos
        document.getElementById(campos[i]).innerHTML = obCitas.Print(0)[campos[i].charAt(0).toUpperCase() + campos[i].slice(1)]; // Se muestra el campo
      }
    } else { // Si no hay citas
      document.getElementById("conteo").innerHTML = "No tiene citas pendientes para hoy."; // Se muestra que no hay citas
      var campos = ["nombre", "curp", "nss", "email", "medico", "motivo"]; // Se obtienen los campos
      for (var i = 0; i < campos.length; i++) { // Se recorren los campos
        document.getElementById(campos[i]).innerHTML = "No hay citas"; // Se muestra que no hay citas
      }
    }
}

function siguienteCita(){ // Función para mostrar la siguiente cita
  obCitas.Shift(); // Se elimina la primera cita
  mostrarCita(); // Se muestra la cita
}


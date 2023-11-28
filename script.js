class verCitas {
    constructor(){
      this.citas = JSON.parse(localStorage.getItem('citas')) || [];
    }
  
    Push(cita){
      this.citas.push(cita);
      localStorage.setItem('citas', JSON.stringify(this.citas));
    }

    Size(){
      return this.citas.length;
    }

    Shift(){
        var cita = this.citas.shift();
        localStorage.setItem('citas', JSON.stringify(this.citas));
        return cita;
    }

    Print(num){
      return this.citas[num];
    }
}

var obCitas = new verCitas();

function agendar(){
    var nombre = document.getElementById("nombre").value;
    var curp = document.getElementById("curp").value;
    var nss = document.getElementById("nss").value;
    var email = document.getElementById("email").value;
    var medico = document.getElementById("medico").value;
    var motivo = document.getElementById("motivo").value;
    var cita = {Nombre: nombre, Curp: curp, Nss: nss, Email: email,Medico: medico,Motivo: motivo};
    obCitas.Push(cita);
}

function mostrarCita(){
    var num = obCitas.Size();
    if (num>0){
      document.getElementById("conteo").innerHTML = "Tiene "+ (num-1) +" cita(s) mas pendientes para hoy.";
      var campos = ["nombre", "curp", "nss", "email", "medico", "motivo"];
      for (var i = 0; i < campos.length; i++) {
        document.getElementById(campos[i]).innerHTML = obCitas.Print(0)[campos[i].charAt(0).toUpperCase() + campos[i].slice(1)];
      }
    } else {
      document.getElementById("conteo").innerHTML = "No tiene citas pendientes para hoy.";
      var campos = ["nombre", "curp", "nss", "email", "medico", "motivo"];
      for (var i = 0; i < campos.length; i++) {
        document.getElementById(campos[i]).innerHTML = "No hay citas";
      }
    }
}

function siguienteCita(){
    obCitas.Shift();
    mostrarCita();
}


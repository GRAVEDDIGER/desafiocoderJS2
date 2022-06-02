 "use strict"
class paciente {
    constructor(apPaciente,nmPaciente,dniPaciente) {
        this.apPaciente = apPaciente
        this.nmPaciente = nmPaciente
        this.dniPaciente=dniPaciente
    }
    set setPacName(a) { this.nmPaciente = a }
    set setPacApe(a) { this.apPaciente = a }
    set setPacDni(a) { this.dniPaciente =a}
    get getPacName() { return this.nmPaciente }
    get getPacApe() { return  this.apPaciente }
    get getPacDni() {return  this.dniPaciente }

}

class turnos {
    constructor (nTurnos,ivTurnos,nmProfesional,horas){
        this.nTurnos = nTurnos
        this.ivTurnos = ivTurnos
        this.nmProfesional = nmProfesional
        this.horas=horas
    }
    set setNturnos(n){
        this.nTurnos = n
        console.log(this.nTurnos)
console.log(n)        
}
    set setIVturnos(n){
        this.ivTurnos=n
    }        
        set setNprofesional(n){
            this.nmProfesional = n
    }
        set sethoras(n){
        this.horas=n

        }
    get getNturnos(){
        return this.nTurnos
}
    get getIVturnos(){
        return this.ivTurnos
    }        
        get getNprofesional(){
        return this.nmProfesional
    }
    get gethoras() {
        this.horas
    }

}
const turnera = new turnos;
const paciente1 = new paciente;
let opcion =1;
const nmProf = () => turnera.setNprofesional = prompt("Ingrese el nombre del profesional")    
const ivDef = ()=> turnera.setIVturnos = parseInt(prompt("Defina el intervalo de turnos"))
const horasDef = () => turnera.sethoras = parseInt(prompt("Defina el numero de horas de atencion"))
const pacDef = () => {
    paciente1.setPacApe = prompt("Apellido")
    paciente1.setPacName = prompt("Nombre")
    paciente1.setPacDni=  prompt("DNI")
}
const nTurnos = () => {
let i= parseInt(turnera.ivTurnos)*parseInt(turnera.horas)
    turnera.setNturnos = i
console.log(i)
}
while (opcion !== 0) {
    opcion = parseInt(prompt(`ELIJA LA OPCION DESEADA
                    0 - SALIR
                    1 - DEFINIR NOMBRE DEL PROFESIONAL
                    2 - DEFINIR INTERVALO DE TURNOS
                    3 - DEFINIR HORAS DE CONSULTORIO
                    4 - INGRESAR PACIENTE`));
    opcion == 1 ? nmProf() : opcion == 2 ? ivDef() : opcion == 3 ? horasDef() : opcion == 4 ? pacDef() : opcion == 0 ? alert("hasta luego") : alert("Opcion erronea")
nTurnos()
}
document.write(`El profesional ${turnera.nmProfesional} da turnos cada ${turnera.ivTurnos} minutos y tiene ${turnera.horas} de atencion.
esto implica que se daran ${turnera.nTurnos} turnos para este profesional`)